'use client'
import React, { useState, useEffect } from 'react';
import {  Menu,  X, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Faqs', href: '#faqs' },
    { name: 'Blogs', href: '#blogs' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tighter text-blue-600">

            <a href={'#'}>
             <div className='flex flex-row'>
                 <Image className={`h-12 w-20  border text-white rounded-md object-cover mr-3 -mt-2
                 ${scrolled ? ' border-cyan-800' : 'border-cyan-800'}`}
                  width={40} height={40} src='/logo.png'  alt='logo'/>
                  Info<span className="text-slate-900">Beat</span>Live
             </div>
            </a>
              
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold hover:text-blue-600 transition-colors 
                  ${scrolled ? 'text-slate-700' : 'text-slate-900'}`}
                >
                  {link.name}
                </a>
              ))}
              <Button href="#contact" variant="primary" className="py-2 text-sm max-lg:hidden">Send Message</Button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                     key={link.name}
                     href={link.href}
                     onClick={() => {
                     setTimeout(() => setIsOpen(false), 1500);}}
                     className="block px-3 py-4 text-base font-medium text-slate-700
                    hover:text-blue-600 hover:bg-slate-50 rounded-md">{link.name}
                </a>
              ))}

              <div className="px-3 pt-4">
                <Button href="#contact" className="w-full">Send Message</Button>
              </div>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
