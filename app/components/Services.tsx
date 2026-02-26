'use client'
import {  ArrowRight, Globe, Zap, ShieldCheck, BarChart3,  Bot, Smartphone,} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';


export const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={24} />,
      title: "Custom Web Builds",
      text: "Lightning-fast, mobile-first websites designed to rank on Google and capture leads."
    },
    {
      icon: <Zap size={24} />,
      title: "Redesign & Fixes",
      text: "Website looking dated? Broken forms? We overhaul your existing site for modern standards."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Monthly Maintenance",
      text: "Unlimited updates, security monitoring, and backups. We handle the tech; you handle the business."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Local SEO & Leads",
      text: "Optimizing your Google Business Profile and site to ensure you're the first call customers make."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Social Media Setup",
      text: "Strategic setup and management for Facebook, Instagram, and TikTok to keep you top-of-mind."
    },
    {
      icon: <Bot size={24} />,
      title: "AI & Automation",
      text: "Auto-reply to leads, online booking systems, and AI chatbots to handle queries 24/7."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          light
          subtitle="Our Expertise"
          title="Everything your business needs to win online."
          description="No tech jargon. Just professional tools that help you get more customers and save more time."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                {s.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-white">Already have a website that needs work?</h3>
            <p className="text-blue-100">We offer custom fix-it and redesign services. Most fixes are completed within 48 hours.</p>
          </div>
          <Button variant="white" href="#contact">Contact for Redesign <ArrowRight size={18} className="ml-2" /></Button>
        </div>
      </div>
    </section>
  );
};