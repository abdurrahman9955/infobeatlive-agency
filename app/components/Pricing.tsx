"use client";
import {  useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import Link from "next/link";

type Region = "NIGERIA" | "INTERNATIONAL";

interface PricingTierProps {
  name: string;
  price: string;
  interval?: string;
  featured?: boolean;
  features: string[];
}

function detectRegion(): Region {
  try {
    const locale = new Intl.Locale(navigator.language);
    const region = locale.region;

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const africanCountries = ["NG"];

    // INTERNATIONAL NIGERIA

    if (region && africanCountries.includes(region)) {
      return "NIGERIA";
    }
    if (tz?.startsWith("Africa/")) {
      return "NIGERIA";
    }
  } catch {}

  return "NIGERIA";
}



export const Pricing: React.FC = () => {
  const [region, setRegion] = useState<Region>(() => detectRegion());

  const pricing = {
    NIGERIA: {
      subscriptions: [
        {
          name: "Starter",
          price: "₦60,000",
          interval: "mo",
          features: [
           "Up to 3–5 pages",
           //  "Home, About, Services, Contact, Footer ",
           //  (Home, About, Services, Contact, Footer)
           "Mobile-responsive design",
           "Clean and professional layout",
           "Contact form integration",
           "Basic SEO setup"
          ],
        },
        
        {
          name: "Growth",
          price: " ₦120,000",
          interval: "mo",
          featured: true,
          features: [
            "Up to 6–10 pages",
            "Everything in Basic, plus",
            "Project/portfolio showcase",
            "Image gallery for past works",
            "WhatsApp chat integration",
            "Better performance & design",
            "On-page SEO optimization",
          ],
        },
        {
          name: "Scale",
          price: "₦300,000",
          interval: "mo",
          features: [
            "Unlimited pages",
            "Everything in Standard, plus",
            "Design tailored to your brand",
            "Categories & filtering system",
            "Blog/news section",
            "Google Maps integration",
            "Premium design features",
          ],
        },
      ],
    },

    INTERNATIONAL: {
      subscriptions: [
        {
          name: "Starter",
          price: "$99",
          interval: "mo",
          features: [
            "Website + hosting",
            "Contact forms",
            "Live Chat Widget",
            "Booking & calendar sync",
            "Email notifications",
            "Follow-up reminders (simple)",
          ],
        },
        {
          name: "Growth",
          price: "$199",
          interval: "mo",
          featured: true,
          features: [
            "Everything in Starter",
            "AI voice call agent", 
            "Lead qualification calls",
            "Appointment booking automation",
            "Follow-up reminders (Advanced)",
            "Smart automation workflows",
          ],
        },
 
        {
          name: "Scale",
          price: "$500",
          interval: "mo",
          features: [
            "Everything in Growth",
            "Paid ads management (Meta + Google)",
            "Ad creatives (AI-generated)",
            "Weekly reporting",
            "Dedicated manager",
            "Unlimited updates",
          ],
        },
      ],
    },
  };

  // For Quick Consultation → 5224838
  // Simple Consultation → 5224824
  // Full Consultation → 5223365

  // Electricians
  // Plumbers
  // Roofing Experts
  // Real Estate
  // Painters

  const PricingTier = ({ tier, sub = false }: { tier: PricingTierProps; sub?: boolean; }) => (
    <div className={`p-8 rounded-3xl flex flex-col transition-all ${
        tier.featured ? "bg-blue-600 text-white shadow-2xl scale-105"
        : "bg-white border border-slate-200 text-slate-900"}`} >

      <h3 className="text-lg font-bold uppercase mb-4">{tier.name}</h3>

      <div className="text-3xl font-black mb-6">
        {tier.price}
        {sub && <span className="text-sm font-medium opacity-80">/mo</span>}
      </div>

      <ul className="space-y-4 flex-grow mb-8">
        {tier.features.map((f) => (
          <li key={f} className="flex text-sm">
            <CheckCircle2
              size={18}
              className={`mr-3 ${
                tier.featured ? "text-blue-200" : "text-blue-600"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>


     <a  href={'https://cal.com/infobeatlive-o2otbh/simple-consultation'} target="_blank"  rel="noopener noreferrer">
      <Button variant={tier.featured ? "white" : "primary"} className="w-full">
        Book Free Consultation
      </Button>
    </a>
    </div>
  );

  const current = pricing[region];

  return (
    <section id="pricing" className="py-0 bg-slate-50">
      <div className="max-w-full mx-auto px-6">

        <SectionHeading subtitle="Simple Pricing" title="Clear pricing. Zero hidden fees."
        description="We design and build professional websites and tools that convert, scale, and perform."/>

        {/* <div className="flex justify-center hid den gap-2 mb-6">
          {(["NIGERIA", "INTERNATIONAL"] as Region[]).map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                region === r
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-300 text-slate-700"
              }`}
            >
              {r === "NIGERIA" ? "Nigeria" : "International"}
            </button>
          ))}
        </div>  */}

{/*    
        <div className="grid lg:grid-cols-3 gap-8">
          {current.builds.map((t) => (
            <PricingTier key={t.name} tier={t} />
          ))}
        </div> */}

        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          {current.subscriptions.map((t) => ( <PricingTier key={t.name} tier={t} sub /> ))}
        </div>
      </div>
    </section>
  );
};
