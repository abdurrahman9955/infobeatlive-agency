'use client';
import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, Globe, Zap, Megaphone, ShieldCheck, Cpu, ShoppingCart, Lock } from 'lucide-react';
import { ChartBarIcon } from '@heroicons/react/24/solid';

const blogs = [
  {
    id: 'why-your-website-is-losing-customers',
    title: 'Why Your Current Website is Losing You Customers (And How to Fix It)',
    excerpt: 'Is your website a digital brochure or a salesperson? Discover the 3 main reasons your site is failing to convert.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    category: 'Strategy'
  },
  {
    id: 'online-booking-for-local-services',
    title: '5 Reasons Every Local Service Business Needs an Online Booking System',
    excerpt: 'Stop playing phone tag. Learn why automated booking is a game-changer for plumbers, cafes, and law firms.',
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    date: 'Feb 18, 2026',
    readTime: '4 min read',
    category: 'Automation'
  },
  {
    id: 'rank-number-1-google-maps',
    title: 'Local SEO: How to Rank #1 on Google Maps in 2026',
    excerpt: 'If you aren’t in the "Top 3" map pack, you don’t exist to local customers. Here is how to dominate.',
    icon: <Globe className="w-6 h-6 text-green-500" />,
    date: 'Feb 15, 2026',
    readTime: '7 min read',
    category: 'SEO'
  },
  {
    id: 'professional-design-vs-diy-builders',
    title: 'Professional Web Design vs. DIY Builders: The Hidden Costs',
    excerpt: 'Saving money today might cost you millions in lost leads. We compare custom builds vs Wix.',
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    date: 'Feb 12, 2026',
    readTime: '6 min read',
    category: 'Development'
  },
  {
    id: 'ai-chatbots-for-small-business',
    title: 'AI Chatbots: The Future of Customer Service for Local Shops',
    excerpt: 'Never miss a query again. Learn how AI can handle FAQ and booking while you work on your business.',
    icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    category: 'AI & Tech'
  },
  {
    id: 'fast-website-redesign-services',
    title: 'The 48-Hour Overhaul: Rapid Fixes for Dated Business Sites',
    excerpt: 'Is your site broken or slow? Learn how we modernize platforms in record time to boost credibility.',
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    date: 'Feb 08, 2026',
    readTime: '3 min read',
    category: 'Redesign'
  },
  {
    id: 'website-maintenance-importance',
    title: 'Monthly Maintenance: Why You Can’t "Set It and Forget It"',
    excerpt: 'Why hackers love neglected sites. Discover why security and updates are your best insurance policy.',
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    date: 'Feb 05, 2026',
    readTime: '4 min read',
    category: 'Maintenance'
  },
  {
    id: 'local-business-growth-case-study',
    title: 'From 5 to 25 Leads: A Case Study on Local Business Growth',
    excerpt: 'See the exact framework we used to triple monthly contracts for a service-based business.',
    icon: <ChartBarIcon className="w-6 h-6 text-emerald-500" />,
    date: 'Feb 02, 2026',
    readTime: '8 min read',
    category: 'Case Study'
  },
  {
    id: 'social-media-for-contractors',
    title: 'Social Media Strategy: Beyond Just Posting Pictures',
    excerpt: 'Likes are vanity; leads are sanity. How to use TikTok and Instagram to get real work.',
    icon: <Megaphone className="w-6 h-6 text-pink-500" />,
    date: 'Jan 30, 2026',
    readTime: '5 min read',
    category: 'Marketing'
  },
  {
    id: 'scaling-professional-services-online',
    title: 'The Ultimate Guide to Scaling Your Professional Firm Online',
    excerpt: 'For lawyers and accountants, trust is the currency. Here is how your site builds authority.',
    icon: <BookOpen className="w-6 h-6 text-slate-700" />,
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    category: 'Growth'
  },
  {
    id: 'ecommerce-strategies-for-local-retail',
    title: 'Local Retail E-commerce: Selling Beyond Your Shop Front',
    excerpt: 'Turn your local shop into a 24/7 revenue engine. How to handle inventory and online sales easily.',
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    date: 'Jan 25, 2026',
    readTime: '6 min read',
    category: 'E-commerce'
  },
  {
    id: 'website-security-and-ssl-trust',
    title: 'Is Your Site Secure? The Impact of SSL on Customer Trust',
    excerpt: 'Dont let Google label your site as "Not Secure." Learn how security affects your sales and rankings.',
    icon: <Lock className="w-6 h-6 text-red-600" />,
    date: 'Jan 22, 2026',
    readTime: '4 min read',
    category: 'Security'
  }
  
];

export default function BlogsList() {
  return (
    <div id="blogs" className="bg-slate-50 min-h-screen py-24 px-6">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Resources for Growth</h2>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Inside the InfoBeat<span className="text-blue-600">Live</span> Blog
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Expert insights to help your local business dominate the digital landscape and turn traffic into revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <a 
              key={blog.id} 
              href={`/blogs/${blog.id}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {blog.icon}
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>{blog.category}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-md font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
              <p className="text-slate-600 text-sm mb-8 flex-grow leading-relaxed">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {blog.date}
                </span>
                <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}