'use client'
import React, { useState } from 'react';
import { MessageSquare, Mail, Send, CheckCircle2, CheckCircleIcon, XCircleIcon } from 'lucide-react';
import { contacts } from '../utils/contact';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    country: '',
    phoneNumber: '',
    email: '',
    reason: '',
    statement: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmissionStatus('idle'); 
  setErrorMessage('');
  setSubmitted(true)

  try {
     const response = await contacts.create({
      fullName: formData.fullName,
      businessName: formData.businessName,
      country: formData.country,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      reason: formData.reason,
      statement: formData.statement,
    });
    if (response.success) {
      setSubmissionStatus('success');
      setFormData({ fullName: '', businessName: '', country:'', phoneNumber:'', email: '', reason: '', statement:'' });
    } else {
      setErrorMessage(response.error || 'Failed to send your message.');
      setSubmissionStatus('error');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    setErrorMessage('There was an issue sending your message. Please try again later.');
    setSubmissionStatus('error');
  } finally{
    setSubmitted(false)
  }
};

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-900">
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
           
            <div>
              <span className="inline-block max-sm:mx-4 px-4 py-1.5 rounded-full bg-blue-50 text-sm font-bold 
              uppercase tracking-widest text-blue-600 mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-5xl max-sm:px-4 font-black text-slate-900 leading-tight">
                Ready to build your <br className="hidden md:block" /> 
                <span className="text-blue-600">growth engine?</span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 max-sm:px-4 leading-relaxed max-w-xl">
                From local services to global brands, we design and build professional websites and tools that convert, 
                scale, and perform.
              </p>

              <div className="mt-10 space-y-10 max-sm:px-4">

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 
                  transition-transform group-hover:scale-110">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp / Recommended</p>
                    <p className="text-lg font-bold text-slate-900 hover:text-green-600 transition-colors cursor-pointer">
                      +234 70 1111 4377
                    </p>
                  </div>
                </div>

                <div className="flex items-center  gap-5 group">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 
                  transition-transform group-hover:scale-110">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                      <a href="mailto:admin@infobeatlive.com">infobeatlive@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group max-sm:hidden">
                 
                  <div>
                    <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">What We do</p>
                      <p className="text-lg font-bold text-slate-900 transition-colors cursor-pointer">
                        We build high-performance websites and solutions for professionals, and local business that turn clicks into 
                        confirmed bookings. No fluff. Just growth.
                      </p>
                      <p className='py-5 text-lg'>
                        Leading digital agency for local services and businesses. We build the tools that build your business.
                      </p>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                {submitted ? (
                  <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
                    <p className="mt-2 text-slate-600">We&apos;ll get back to you with your audit within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                          placeholder="John Doe" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Business Name</label>
                        <input 
                          type="text" 
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                          placeholder="Business Name" 
                          required 
                        />
                      </div>
                    </div>

                     <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label htmlFor="country" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Country</label>
                      <input 
                        type="text" 
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                        placeholder="Write Country Here"  
                        required 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Phone Number</label>
                      <input 
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange} 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                        placeholder="Phone number" 
                        required 
                      />
                    </div>

                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">How can we help?</label>
                      <div className="relative">
                        <select 
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                          <option>New Website Build</option>
                          <option>Redesign Existing Site</option>
                          <option>Monthly Maintenance & SEO</option>
                          <option>Social Media / Ads</option>
                          <option>Other / Not Sure</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="statement" className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Write Your Message Here</label>
                      <textarea 
                        id="statement"
                        name="statement"
                        value={formData.statement}
                        rows={4} 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 resize-none" 
                        placeholder="Tell us about your project goals..."
                        onChange={handleChange}
                        required 
                      ></textarea>
                    </div>


                     {submissionStatus === 'success' && (
                      <div className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                         <span>Your message has been sent successfully! We will get back to you soon.</span>
                      </div>
                    )}

                    {submissionStatus === 'error' && errorMessage && (
                     <div className="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                       <XCircleIcon className="h-5 w-5 mr-2" /> 
                       <span>{errorMessage}</span>
                     </div>
                    )} 

                    <button  type="submit"
                      className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl 
                      shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                      <span>Submit Your Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                     <p className="text-center text-xs text-slate-400 mt-4">
                      No spam. Ever. Your data is 100% secure.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
