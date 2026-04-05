'use client';

import React, { useState } from 'react';
import { CopyIcon, Clock } from 'lucide-react';

const PromoBarHome: React.FC = () => {
  const PROMO_CODE = '+234 70 1111 4377';

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm sm:text-base py-2
     px-4 flex flex-row flex-wrap justify-between items-center gap-2 shadow-lg rounded-md mb-6 animate-fadeIn">

      <div className="flex items-center gap-2 sm:text-xl text-center sm:text-left">
        <Clock size={16} className="text-yellow-300" />
        <span> Get <strong>50% OFF</strong> </span>
      </div>

      
      <div className="flex items-center sm:text-xl gap-2 text-center sm:text-left">
          <span className='font-bold'>Give Us Call:{' '}  
          <span className="bg-yellow-300 text-gray-900 font-bold px-2 py-1 rounded">{PROMO_CODE} </span>
        </span>

        <button  onClick={handleCopy}
          className="flex items-center gap-1 bg-white text-indigo-700 font-bold px-2 py-0.5 rounded hover:bg-gray-100
           transition"> <CopyIcon size={14} /> {copied ? 'Copied!' : 'Copy'}
        </button>
        
      </div>

      <div className="flex items-center gap-3">
        <span className="text-yellow-300 sm:text-xl font-semibold">
          Ends in: 89900
        </span>
      </div>

    </div>
  );
};

export default PromoBarHome;