import { SectionHeading } from "./SectionHeading";
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  biz: string;
  content: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    { name: "John Miller", biz: "Miller & Sons Plumbing", content: "InfoBeatLive tripled our monthly lead flow. Our old site was an embarrassment, now it's our biggest asset." },
    { name: "Sarah Jenkins", biz: "The Hair Loft", content: "The booking system they integrated is so easy. My clients love it and I save 5 hours a week on calls." },
    { name: "Dave Thompson", biz: "Pristine Landscaping", content: "Finally, an agency that speaks my language. No jargon, just more lawn care contracts." },
    { name: "Mike Rossi", biz: "Rossi Auto Repair", content: "Best investment I've made for my shop in 10 years. My local search ranking went from page 4 to #1." },
    { name: "Elena Garcia", biz: "Garcia Legal", content: "Professional, responsive, and incredibly fast. They redesigned our firm's site in just 2 weeks." },
    { name: "Tom Baker", biz: "Baker’s Bakery", content: "The social media setup brought in a whole new crowd of younger customers. Highly recommend." },
    { name: "Chris Watts", biz: "Watts Electric", content: "The monthly maintenance plan gives me total peace of mind. If something breaks, they fix it immediately." },
    { name: "Rachel Green", biz: "Green Cleaning", content: "My leads are much higher quality now. The website filters out the tire-kickers perfectly." },
    { name: "James Wilson", biz: "Wilson HVAC", content: "We went from 5 leads a month to 25. The numbers speak for themselves." },
    { name: "Lisa Wong", biz: "Main St Dental", content: "A clean, modern site that perfectly reflects our clinic. The SEO work has been stellar." }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading 
          subtitle="Success Stories"
          title="Don't just take our word for it."
          description="We've helped hundreds of business owners reclaim their time and grow their revenue."
        />
      </div>

      <div className="relative">
        <div className="flex space-x-6 whitespace-nowrap animate-marquee">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-block w-80 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm whitespace-normal">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, starIdx) => <Star key={starIdx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic text-sm">&apos;{t.content}&apos;</p>
              <div>
                <p className="font-bold text-slate-900 text-base">{t.name}</p>
                {/* <p className="text-xs text-blue-600 font-bold uppercase tracking-wide">{t.biz}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style> 
    </section>
  );
};