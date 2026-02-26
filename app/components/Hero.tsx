'use client';
import React from 'react';
import { SparklesIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import { Globe, Zap } from 'lucide-react';

export const Button = ({ children, variant, className, href}: { children: React.ReactNode; variant: 'gradient' | 'outline'; className?: string; href: string; }) => {
  const baseClasses = 'font-bold rounded-full transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4';
  const variantClasses = {
    gradient: 'text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-opacity-50',
    outline: 'text-black border border-black hov er:text-blue-500 hov er:bg-gray-900 focus:ring-white focus:ring-opacity-50',
  } as const;
  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
};

  export const Hero: React.FC = () => {
  
  return (
    <div id="hero" className="relative bg-cyan-00 text-black min-h-screen pb-10 pt-28 overflow-hidden 
    flex items-center justify-center">
    
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute w-80 h-80 bg-green-500 opacity-90 rounded-full -top-20 -left-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-yellow-500 opacity-90 rounded-full -bottom-40 -right-40 animate-blob animation-delay-2000"></div>
        <div className="absolute w-64 h-64 bg-purple-500 opacity-90 rounded-full top-1/4 left-1/2 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-full px-6">
         {/* <div className='-mt-5'><PromoBarHome /></div>  */}

        <p className="text-lg sm:text-2xl font-extrabold tracking-tight text-blue-600 mb-6">
              Helping local businesses dominate
              <br/>
              since 2018
        </p>
        <h1 className="text-3xl max-sm:text-xl lg:text-4xl  font-extrabold leading-tight text-black mb-6 drop-shadow-lg">
          Your Website Should Be Your <br />
          <span className="">Best Salesperson.</span>

        </h1>
        <p className="text-base sm:text-lg text-yellow-500 font-bold mb-10 max-w-3xl mx-auto">
          We build high-performance websites and solutions for professionals, and local business that 
          turn clicks into confirmed bookings. No fluff. Just growth.
        </p>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 place-items-center mb-12">
          <div className="text-center  w-full max-w-xs transition ">
            <Globe  className="h-10 w-10 text-indigo-500 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-indigo-500 mb-2">Custom Web Builds</h3>
            <p className="text-sm w-full text-gray-950">
              Lightning-fast, mobile-first websites designed to rank best on Google and capture more leads.
              </p>
          </div>
         
          <div className="text-center   w-full max-w-xs transition ">
            <Zap className="h-10 w-10 text-green-500 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-green-500 mb-2">Redesign & Fixes</h3>
            <p className="text-sm w-full text-gray-950">
              Website looking dated? Broken forms? We overhaul your existing site for modern standards.
              </p>
          </div>
        </div>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="gradient" className="w-full sm:w-auto px-6 sm:px-8 py-4 text-md sm:text-xl" href="#contact">
            <SparklesIcon className="h-7 w-7 mr-2 inline-block" />Get Your Website Now
          </Button>
          <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8  py-4 text-md sm:text-xl" href="#pricing">
            <ChartBarIcon className="h-7 w-7 mr-2 inline-block" /> See Our All Plans Now
          </Button>
        </div>

      </div>
    </div>
  );
};
