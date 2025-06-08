import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, User, Briefcase, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { useLocation, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabaseClient';
import DOMPurify from 'dompurify';
import config from '@/config/config.js';

// Validation schema with zod
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val), {
    message: 'Invalid phone number',
  }),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and privacy policy',
  }),
});

// Custom hook for form submission logic
const useContactForm = (defaultValues, toast) => {
  const [loading, setLoading] = React.useState(false);
  const { sanitize } = DOMPurify;

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitize(data.name),
        email: sanitize(data.email),
        phone: sanitize(data.phone || ''),
        subject: sanitize(data.subject),
        message: sanitize(data.message),
      };

      // Save to Supabase
      const { error: supabaseError } = await supabase.from('inquiries').insert(sanitizedData);

      if (supabaseError) {
        if (supabaseError.code === '429') {
          throw new Error('Too many requests. Please try again later.');
        }
        throw new Error(supabaseError.message);
      }

      toast({
        title: 'Message Sent! 🚀',
        description: 'Thanks for reaching out. We’ll get back to you soon!',
      });
      return true; // Indicate success for form reset
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: error.message,
        variant: 'destructive',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
};

const ContactPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subjectFromQuery = queryParams.get('subject') || '';

  // Form setup with react-hook-form
  const {
    control,
    handleSubmit: formSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: subjectFromQuery,
      message: '',
      agreedToTerms: false,
    },
  });

  const { handleSubmit, loading } = useContactForm(
      {
        name: '',
        email: '',
        phone: '',
        subject: subjectFromQuery,
        message: '',
        agreedToTerms: false,
      },
      toast
  );

  // Handle form submission
  const onSubmit = async (data) => {
    const success = await handleSubmit(data);
    if (success) {
      reset(); // Reset form on success
    }
  };

  // Validate config existence
  if (!config?.contact?.office) {
    console.error("Contact configuration is missing");
    return <div className="text-red-600 text-center py-20">Error loading contact information</div>;
  }

  // Split address into lines for rendering
  const addressLines = config.contact.office.address.split('\n');

  return (
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
        <section className="py-12 md:py-16 bg-primary/5 text-center">
          <div className="container mx-auto px-4">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              Get In Touch
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            >
              We’re here to help and answer any question you might have. We look forward to hearing from you at BillBash Industries!
            </motion.p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-white p-8 md:p-10 rounded-xl shadow-xl"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Contact Form</h2>
                <form onSubmit={formSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">
                        Full Name
                      </Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="name"
                                    placeholder="John Doe"
                                    className="pl-10"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                            )}
                        />
                        {errors.name && (
                            <p id="name-error" className="text-sm text-destructive mt-1">
                              {errors.name.message}
                            </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="pl-10"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                            )}
                        />
                        {errors.email && (
                            <p id="email-error" className="text-sm text-destructive mt-1">
                              {errors.email.message}
                            </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number (Optional)
                    </Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                              <Input
                                  {...field}
                                  id="phone"
                                  type="tel"
                                  placeholder="+1 234 567 8900"
                                  className="pl-10"
                                  aria-invalid={!!errors.phone}
                                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                              />
                          )}
                      />
                      {errors.phone && (
                          <p id="phone-error" className="text-sm text-destructive mt-1">
                            {errors.phone.message}
                          </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700">
                      Subject
                    </Label>
                    <div className="relative mt-1">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Controller
                          name="subject"
                          control={control}
                          render={({ field }) => (
                              <Input
                                  {...field}
                                  id="subject"
                                  placeholder="Inquiry about..."
                                  className="pl-10"
                                  aria-invalid={!!errors.subject}
                                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                              />
                          )}
                      />
                      {errors.subject && (
                          <p id="subject-error" className="text-sm text-destructive mt-1">
                            {errors.subject.message}
                          </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Message
                    </Label>
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                id="message"
                                placeholder="Your message here..."
                                rows={5}
                                className="mt-1"
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                            />
                        )}
                    />
                    {errors.message && (
                        <p id="message-error" className="text-sm text-destructive mt-1">
                          {errors.message.message}
                        </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                        name="agreedToTerms"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                id="agreedToTerms"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                aria-invalid={!!errors.agreedToTerms}
                                aria-describedby={errors.agreedToTerms ? 'terms-error' : undefined}
                            />
                        )}
                    />
                    <Label htmlFor="agreedToTerms" className="text-sm font-normal text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="underline hover:text-primary">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy-policy" className="underline hover:text-primary">
                        Privacy Policy
                      </Link>
                      .
                    </Label>
                  </div>
                  {errors.agreedToTerms && (
                      <p id="terms-error" className="text-sm text-destructive">
                        {errors.agreedToTerms.message}
                      </p>
                  )}
                  <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base"
                      disabled={loading}
                  >
                    {loading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                        <Send className="mr-2 h-5 w-5" />
                    )}
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>
                  <div className="flex items-start text-gray-600 mb-3">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="whitespace-pre-line">
                      {addressLines.map((line, index) => (
                          <span key={index}>
                        {line}
                            {index < addressLines.length - 1 && <br />}
                      </span>
                      ))}
                    </p>
                  </div>
                  <div className="space-y-2 mb-3">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 inline" />
                    {config.contact.office.phone.map((phone, index) => (
                        <p key={index} className="text-gray-600 inline-block">
                          <a href={`tel:${phone}`} className="hover:underline">
                            {phone}
                          </a>
                          {index < config.contact.office.phone.length - 1 && ', '}
                        </p>
                    ))}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a href={`mailto:${config.contact.office.email}`} className="hover:underline">
                      {config.contact.office.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                  {config.contact.businessHours.map((item, index) => (
                      <p key={index} className="text-gray-600">
                        {item.day}: {item.hours}
                      </p>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-4">
                    Follow us on social media for the latest updates and news.
                  </p>
                  <div className="flex space-x-4">
                    <a
                        href={config.contact.social.facebook}
                        aria-label="Facebook"
                        className="text-primary hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a
                        href={config.contact.social.twitter}
                        aria-label="Twitter"
                        className="text-primary hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    <a
                        href={config.contact.social.linkedin}
                        aria-label="LinkedIn"
                        className="text-primary hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
);
};

export default ContactPage;