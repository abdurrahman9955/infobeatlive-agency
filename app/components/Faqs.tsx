'use client'
import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const faqData = [
  {
    question: "How long does a typical website project take?",
    answer: "Most custom website builds take between 1 to 4 weeks from kickoff to launch. This timeline depends on the complexity of the site, the number of pages, and how quickly feedback is provided during the design phase."
  },
  {
    question: "Do you offer monthly maintenance and SEO services?",
    answer: "Yes! We provide ongoing 'Growth Engines' which include secure hosting, regular security updates, content changes, and data-driven SEO strategies to ensure your site continues to climb the search rankings."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. In today's market, mobile traffic often accounts for over 60% of visitors. We use a 'mobile-first' design philosophy, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops."
  },
  {
    question: "Can you help with rebranding or just new sites?",
    answer: "We offer full digital transformations. This includes logo refinement, color palette selection, and updated messaging to ensure your online presence matches the professional quality of your business."
  },
  {
    question: "What is a 'Website Audit'?",
    answer: "Our audit is a deep dive into your current site's performance. We analyze loading speeds, SEO health, conversion rates, and mobile usability. We then provide a roadmap of exactly what needs to change to increase your leads."
  },
  {
    question: "How much does a new website typically cost?",
    answer: "Pricing varies based on project scope, but most professional small business sites start around $499 to $5000. We provide custom quotes after our initial discovery call to ensure you only pay for the features your business actually needs."
  },
  {
    question: "Do I own the website once it is finished?",
    answer: "Yes, 100%. Once the final payment is made, you own the code, the design, and the content. We don't believe in 'hostage' contracts—you are free to move your site elsewhere, though most clients stay for our premium maintenance."
  },
  {
    question: "Do you provide the text and images for the site?",
    answer: "We offer professional copywriting and stock photography selection as an add-on service. However, if you prefer to provide your own content, we will guide you on the best structure and SEO-friendly headlines to use."
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Yes. We build primarily on user-friendly platforms and provide a 1-on-1 training session after launch. You'll be able to swap images, update text, and add blog posts without needing to touch a single line of code."
  },
  {
    question: "What happens if something breaks after launch?",
    answer: "Every site comes with a 30-day post-launch support window where we fix any bugs for free. For long-term peace of mind, our maintenance plans include daily backups and 24/7 uptime monitoring."
  }
];

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, }) => {
  return (
    <div
      className={`border-b border-slate-200 transition-all duration-300 ${
        isOpen ? "bg-blue-50/30" : "bg-transparent"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 ${
            isOpen ? "text-blue-600" : "text-slate-900"
          }`}
        >
          {question}
        </span>

        <div
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-blue-600 text-white rotate-180 shadow-lg shadow-blue-200"
              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
          }`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 text-slate-600 leading-relaxed text-lg pr-12">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
    
      <section id="faqs" className="pt-24 pb-12 px-4">
        <div className="max-w-full mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100
           text-blue-700 text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span>Help Center</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Frequently Asked <br />
            <span className="text-blue-600 italic">Questions.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about working with InfoBeatLive Agency and our growth process.
          </p>
        </div>

        <div className="max-w-full mx-auto mt-16 bg-white rounded-3xl shadow-xl shadow-slate-200/60 
        border border-slate-100 overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="max-w-full mx-auto mt-16">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-3">Still have questions?</h3>
                <p className="text-slate-400 text-lg">
                  Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
                </p>
              </div>
             
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

                 <a href={'#contact'}>
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 
                py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all hover:shadow-lg 
                hover:shadow-blue-500/25 active:scale-95">
                  <MessageCircle size={20} />
                  Contact Us Here
                </button></a>

                <a href={'#blogs'}>
                <button className="flex items-center justify-center gap-2 bg-slate-800 text-white px-8 
                py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all border border-slate-700 active:scale-95">
                 Read Our Blogs
                  <ArrowRight size={20} />
                </button></a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <div className="w-12 h-1 bg-slate-200 mx-auto mb-8 rounded-full"></div>
        <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
          InfoBeatLive Agency &bull; Support
        </p>
      </footer>
    </div>
  );
}