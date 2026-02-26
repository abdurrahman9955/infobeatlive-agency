
import { MessageSquare,  Mail, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <span className="text-2xl font-black tracking-tighter text-blue-600 mb-6 block">
            INFO<span className="text-white">BEAT</span>LIVE
          </span>
          <p className="text-lg leading-relaxed max-w-xs">
            Leading digital agency for local services and businesses. We build the tools that build your business.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
            <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a></li>
            <li><a href="#process" className="hover:text-blue-500 transition-colors">Process</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
          </ul>
        </div>
       
        <div>
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <div className="grid grid-cols-1 gap-4">
            <a href="#" className="w-auto h-8 bg-s late-800 rounded-lg flex items-center justify-start pl-2
              hover:text-white transition-all"><MessageSquare size={18} /><span className='ml-2'>Contact us</span> </a>
           
            <a href="#" className="w-auto h-8 bg-s late-800 rounded-lg flex items-center justify-start pl-2
              hover:text-white transition-all"><PhoneCall size={18} /> <span className='ml-2'>WhatsApp +23470 1111 4377</span></a>

            <a href="#" className="w-auto h-8 bg-s late-800 rounded-lg flex items-center justify-start pl-2
              hover:text-white transition-all"><Mail size={18} /><span className='ml-2'>admin@infobeatlive.com</span></a>
           
          </div>
        </div>
     
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
             <div className="flex flex-col mt-3 gap-3">
             <a href="#" className="hover:text-white">Faqs</a>
             <a href="#" className="hover:text-white">Blogs</a>
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
        </div> 

        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 text-xs sm:text-md text-white flex flex-col md:flex-row justify-center gap-4">
        <p>© 2026 InfoBeatLive Agency. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
