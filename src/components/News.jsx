
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Bill Bash Group Launches New Housing Development in Abuja",
    date: "May 20, 2025",
    excerpt: "Bill Bash Group has unveiled a new real estate project featuring affordable housing units and commercial spaces, aiming to meet the growing demand in Nigeria’s capital.",
    image: "Aerial view of a residential estate under construction with green spaces",
    delay: 0
  },
  {
    id: 2,
    title: "Bill Bash Group Expands Truck Import Operations to Port Harcourt",
    date: "April 15, 2025",
    excerpt: "To meet rising logistics demands, Bill Bash Group has extended its truck importation services to Port Harcourt, offering a wider range of heavy-duty trucks and faster delivery timelines.",
    image: "Shipping containers with imported trucks being offloaded at a port",
    delay: 0.1
  },
  {
    id: 3,
    title: "Bill Bash Farms Introduces High-Yield Maize and Poultry Projects",
    date: "March 8, 2025",
    excerpt: "As part of its commitment to food security, Bill Bash Group has launched new farming initiatives focused on hybrid maize and poultry production across rural communities.",
    image: "Farmers working in a maize field and a modern poultry facility",
    delay: 0.2
  }
];


const News = () => {
  return (
    <section className="py-20 bg-gray-50" id="news">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest News & Updates</h2>
            <p className="text-gray-700">Stay informed about our latest developments and initiatives</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-primary font-medium flex items-center hover:underline">
            View all news <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: news.delay }}
              viewport={{ once: true }}
            >
              <Card className="news-card h-full flex flex-col overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img  
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   src="https://images.unsplash.com/photo-1690120225080-e48e3aea49de" />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-700">{news.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="#" className="text-primary font-medium flex items-center hover:underline">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
