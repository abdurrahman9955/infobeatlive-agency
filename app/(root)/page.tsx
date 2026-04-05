'use client'
import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Pricing } from "../components/Pricing";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import Faqs from "../components/Faqs";
import BlogsList from "../components/Blogs/Blogs";
import { useEffect, useState } from "react";
import { Mail, Globe, Home, Award } from "lucide-react";
import PromoBarHome from "../components/Blogs/Home";

type Language = 'en' | 'ha';
type TabId = 'home' | 'services' | 'contact' | 'pricing' ;

export default function App() {

  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<TabId>('home');
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);


  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Contact />
        <BlogsList/>
      </main>
      <Footer />

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t-4  px-6 py-3 flex 
      justify-between items-center rounded-t-2xl  border-blue-600 md:hidden z-50">
        {[
          { id: 'home', icon: Home, label: lang === 'en' ? 'Home' : 'Gida', href: '#hero' },
          { id: 'services', icon: Globe, label: lang === 'en' ? 'Services' : 'Bincika', href: '#services' },
          { id: 'contact', icon: Mail, label: lang === 'en' ? 'Contact' : 'Yi Rigista', href: '#contact' },
          { id: 'pricing', icon: Award, label: lang === 'en' ? 'Pricing' : 'Farashi', href: '#pricing' },
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id as TabId)}
            className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-blue-600' : 'text-slate-800'}`}
          >
         
              <a href={item.href}><item.icon size={22} fill={activeTab === item.id ? "currentColor" : "none"} /></a>
              <span className="text-[10px] font-bold uppercase tracking-wider"><a href={item.href}>{item.label}</a></span>
            
          </button>
        ))}
      </div>

    </div>
  );
}
