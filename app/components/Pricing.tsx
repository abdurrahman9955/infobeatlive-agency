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

    //"ZA","GH","KE","EG","TZ","UG","RW","CM","SN","ET","DZ","MA"

    const africanCountries = ["NG"];

    if (region && africanCountries.includes(region)) {
      return "NIGERIA";
    }
    if (tz?.startsWith("Africa/")) {
      return "NIGERIA";
    }
  } catch {}

  return "NIGERIA";
  //return "INTERNATIONAL";
}



export const Pricing: React.FC = () => {
  const [region, setRegion] = useState<Region>(() => detectRegion());

  const pricing = {
    NIGERIA: {
      builds: [
        {
          name: "Starter Build",
          price: "₦120,000",
          features: [
            "Up to 5 Pages",
            "Mobile Optimized",
            "Contact Form",
            "Basic SEO Setup",
            "1 Round Revision",
          ],
        },
        {
          name: "Business Pro",
          price: "₦250,000",
          featured: true,
          features: [
            "Up to 10 Pages",
            "CMS for Blogging",
            "Online Booking Integration",
            "Advanced SEO",
            "Google Business Setup",
          ],
        },
        {
          name: "Growth Engine",
          price: "₦500,000",
          features: [
            "Unlimited Pages",
            "AI Chatbot",
            "Marketing Automations",
            "Social Media Setup",
            "VIP Priority Support",
          ],
        },
      ],
      subscriptions: [
        {
          name: "Maintain",
          price: "₦30,000",
          interval: "mo",
          features: [
            "Hosting Included",
            "Security & Backups",
            "Technical Support",
            "Monthly Analytics",
            "Minor Content Edits",
          ],
        },
        {
          name: "Growth",
          price: "₦100,000",
          interval: "mo",
          featured: true,
          features: [
            "Everything in Maintain",
            "SEO Content",
            "Weekly Blog Posts",
            "Reputation Management",
            "Lead Tracking Dashboard",
          ],
        },
        {
          name: "Scale",
          price: "₦300,000",
          interval: "mo",
          features: [
            "Everything in Growth",
            "Paid Ads Management",
            "Daily Social Engagement",
            "Dedicated Account Manager",
            "Unlimited Updates",
          ],
        },
      ],
    },

    INTERNATIONAL: {
      builds: [
        {
          name: "Starter Build",
          price: "$499",
          features: [
            "Up to 5 Pages",
            "Mobile Optimized",
            "Contact Form",
            "Basic SEO Setup",
            "1 Round Revision",
          ],
        },
        {
          name: "Business Pro",
          price: "$1,499",
          featured: true,
          features: [
            "Up 10 Pages",
            "CMS for Blogging",
            "Online Booking Integration",
            "Advanced SEO",
            "Google Business Setup",
          ],
        },
        {
          name: "Growth Engine",
          price: "$3000",
          features: [
            "Unlimited Pages",
            "AI Chatbot",
            "Marketing Automations",
            "Social Media Setup",
            "VIP Priority Support",
          ],
        },
      ],
      subscriptions: [
        {
          name: "Maintain",
          price: "$99",
          interval: "mo",
          features: [
            "Hosting Included",
            "Security & Backups",
            "Technical Support",
            "Monthly Analytics",
            "Minor Content Edits",
          ],
        },
        {
          name: "Growth",
          price: "$199",
          interval: "mo",
          featured: true,
          features: [
            "Everything in Maintain",
            "SEO Content",
            "Weekly Blog Posts",
            "Reputation Management",
            "Lead Tracking Dashboard",
          ],
        },
        {
          name: "Scale",
          price: "$499",
          interval: "mo",
          features: [
            "Everything in Growth",
            "Paid Ads Management",
            "Daily Social Engagement",
            "Dedicated Account Manager",
            "Unlimited Updates",
          ],
        },
      ],
    },
  };

  const PricingTier = ({
    tier,
    sub = false,
  }: {
    tier: PricingTierProps;
    sub?: boolean;
  }) => (
    <div
      className={`p-8 rounded-3xl flex flex-col transition-all ${
        tier.featured
          ? "bg-blue-600 text-white shadow-2xl scale-105"
          : "bg-white border border-slate-200 text-slate-900"
      }`}
    >
      <h3 className="text-lg font-bold uppercase mb-4">{tier.name}</h3>

      <div className="text-4xl font-black mb-6">
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
        {/* Select {tier.name}  */}
        Book Free Consultation
      </Button>
    </a>
    </div>
  );

  const current = pricing[region];

  return (
    <section id="pricing" className="py-0 bg-slate-50">
      <div className="max-w-full mx-auto px-6">
        <SectionHeading
          subtitle="Simple Pricing"
          title="Clear pricing. Zero hidden fees."
          description="Pricing is adjusted based on region to reflect local market conditions."
        />

        <div className="flex justify-center hid den gap-2 mb-16">
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
        </div>

    
        <div className="grid lg:grid-cols-3 gap-8">
          {current.builds.map((t) => (
            <PricingTier key={t.name} tier={t} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">
          {current.subscriptions.map((t) => ( <PricingTier key={t.name} tier={t} sub /> ))}
        </div>
      </div>
    </section>
  );
};
