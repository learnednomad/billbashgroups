
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Dangote Refinery Begins Production of Diesel and Aviation Fuel",
    date: "May 20, 2025",
    excerpt: "Africa's largest oil refinery has commenced production of diesel and aviation fuel, marking a significant milestone in the continent's energy sector.",
    image: "Aerial view of Dangote Refinery with processing units and storage facilities",
    delay: 0
  },
  {
    id: 2,
    title: "Dangote Cement Expands Operations to East Africa",
    date: "April 15, 2025",
    excerpt: "Dangote Cement announces new $500 million investment to expand its manufacturing capacity in Tanzania and Ethiopia.",
    image: "Dangote cement plant construction with workers and equipment",
    delay: 0.1
  },
  {
    id: 3,
    title: "Dangote Foundation Launches $100M Healthcare Initiative",
    date: "March 8, 2025",
    excerpt: "The Dangote Foundation has launched a new healthcare initiative aimed at improving medical infrastructure across rural communities in Africa.",
    image: "Dangote Foundation healthcare facility with medical staff and patients",
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
