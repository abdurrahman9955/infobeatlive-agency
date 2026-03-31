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
      return "INTERNATIONAL";
    }
    if (tz?.startsWith("Africa/")) {
      return "INTERNATIONAL";
    }
  } catch {}

  return "INTERNATIONAL";
}



export const Pricing: React.FC = () => {
  const [region, setRegion] = useState<Region>(() => detectRegion());

  const pricing = {
    NIGERIA: {
      subscriptions: [
        {
          name: "Starter",
          price: "₦30,000",
          interval: "mo",
          features: [
            "Website hosting",
            "Contact forms",
            "Booking system",
            "Email notifications",
            "Basic SMS/WhatsApp alerts",
  
            "Security & Backups",
            "Technical Support",
            "SEO Content",
            "Minor Content Edits",
          ],
        },
        
        {
          name: "Growth",
          price: "₦50,000",
          interval: "mo",
          featured: true,
          features: [
            "Website + hosting",
            "Contact forms",
            "Website chat",
            "Booking & calendar sync",
            "Automated SMS / WhatsApp / email",
            "Follow-up reminders",
            "Basic CRM",

            "SEO Content",
            "Security & Backups",
            "Technical Support",
            "Monthly Analytics",
            "Minor Content Edits",
          ],
        },
        {
          name: "Scale",
          price: "₦100,000",
          interval: "mo",
          features: [
            "Website + hosting",
            "Contact forms",
            "Website chat",
            "Booking & calendar sync",
            "Automated SMS / WhatsApp / email",
            "Follow-up reminders",
            "Advanced CRM",

            "Advanced automations",
            "Paid Ads Management",
            "Monthly optimization",
            "Dedicated Account Manager",
            "Unlimited Updates",
          ],
        },
      ],
    },

    INTERNATIONAL: {
      subscriptions: [
        {
          name: "Starter",
          price: "$299",
          interval: "mo",
          features: [
            "Website + hosting",
            "Contact forms",
            "Website chat",
            "Email notifications",
            "Booking & calendar sync",
            "Follow-up reminders",
            "CRM & Automations",
            "Full ai voice call agents",
          ],
        },
        {
          name: "Growth",
          price: "$1499",
          interval: "mo",
          featured: true,
          features: [
            "Everything In  Starter +",
            "One 1 Video Post  Everyday",
            "Facebook + Instagram + Tiktok",
            "Reply to (comments + Dms)",
            "AI-generated Videos Content",
            "Lead qualification calls",
            "Appointment booking",
            //"Automated SMS / email",
            "Dedicated Account Manager",
          ],
        },
  
        {
          name: "Scale",
          price: "$3000",
          interval: "mo",
          features: [
            "Everything In Growth +",
            "Paid Ads Management",
            "Ad campaign setup",
            "AI-generated Ads Content",
            "Weekly reporting",
            "Meta + Google Ads",
            "Dedicated Account Manager",
            "Unlimited Updates",

          ],
        },
      ],
    },
  };

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


    <a  href={'#contact'}>
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
{/* 
        <div className="flex justify-center hid den gap-2 mb-6">
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
        </div> */}

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
