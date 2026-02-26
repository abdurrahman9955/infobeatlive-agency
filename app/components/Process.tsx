import { SectionHeading } from "./SectionHeading";

export const Process: React.FC = () => {
  const steps = [
    { title: "Strategy Session", desc: "We learn about your business, your competition, and exactly how we can help you win." },
    { title: "Build & Optimize", desc: "Our team crafts your site with high-performance code and conversion-focused copy." },
    { title: "Launch & Training", desc: "We go live! We provide a simple dashboard for you to track leads and bookings." },
    { title: "Scale & Support", desc: "Ongoing maintenance and SEO growth to ensure you stay ahead of the competition." }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Our Framework"
          title="From first click to lifetime client."
          description="Our 4-step process ensures your website isn't just a digital brochure, but a growth machine."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-blue-100 -z-10" />
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
