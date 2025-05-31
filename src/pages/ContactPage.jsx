
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subjectFromQuery = queryParams.get('subject');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form data retrieval
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
       toast({
        title: "Uh oh! Missing fields.",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    console.log("Form Submitted", { name, email, subject: subjectFromQuery || formData.get("subject"), message });
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. We'll get back to you soon!",
    });
    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <section className="py-20 md:pt-32 md:pb-24 bg-primary/5 text-center">
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
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input type="text" id="name" name="name" placeholder="John Doe" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input type="email" id="email" name="email" placeholder="you@example.com" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <Input type="text" id="subject" name="subject" placeholder="Inquiry about..." defaultValue={subjectFromQuery || ""} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." rows={5} className="mt-1" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base">
                  Send Message <Send className="ml-2 h-4 w-4" />
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
                  <span>No.3008/3007 GRA, Western Bypass, Kano, Nigeria</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>+2348091692888 / +8618840079240 </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>bashahmad99@yahoo.com</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl">
                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                 <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                 <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
                 <p className="text-gray-600">Sunday: Closed</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl">
                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                 <p className="text-gray-600 mb-4">Follow us on social media for the latest updates and news from Bill Bash Group.</p>
                 <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04zm4.37 6.88c.3.3.3.77 0 1.06L12 14.94l-4.37-4.37c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 12.81l3.31-3.31c.3-.3.77-.3 1.06 0z"/></svg></a>
                    <a href="#" className="text-primary hover:text-primary/80"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.77.86-2.76 1.05C18.4 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.27 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.79 1.9 3.55-.7-.02-1.37-.22-1.95-.5v.03c0 2.07 1.48 3.8 3.44 4.2-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.14 2.93 4.02 2.96C5.76 18.59 4.02 19.3 2 19.3c-.33 0-.66-.02-.98-.06 1.92 1.23 4.2 1.96 6.68 1.96 8.08 0 12.5-6.7 12.5-12.5 0-.19 0-.38-.01-.57.85-.62 1.59-1.39 2.18-2.27z"/></svg></a>
                    <a href="#" className="text-primary hover:text-primary/80"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-3.06v9.37h3.06v-4.6c0-1.21.55-2.22 1.63-2.22 1.05 0 1.43.8 1.43 2.16v4.66h3.06zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-9.37H5.5v9.37h2.77z"/></svg></a>
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
