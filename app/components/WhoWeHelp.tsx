"use client";

import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Scissors,
  Droplets,
  Store,
  Utensils,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Niche = {
  title: string;
  list: string[];
  icon: React.ReactNode;
};

export const WhoWeHelp: React.FC = () => {
  const niches: Niche[] = [
    {
      title: "Restaurants & Hospitality",
      list: ["Restaurants", "Cafés", "Hotels", "Fine Dining",  "Boutique"],
      icon: <Utensils className="text-blue-600" />,
    },
    {
      title: "Retail & Ecommerce",
      list: ["Online Stores", "Local Shops", "Brands", "Marketplaces", "Co-working Spaces"],
      icon: <Store className="text-blue-600" />,
    },
    {
      title: "Professional Services",
      list: ["Law Firms", "Accountants", "Consultants", "Real Estate",  "Architectural Firms"],
      icon: <ShieldCheck className="text-blue-600" />,
    },
    {
      title: "Education & Automobile",
      list: ["Schools", "Training Centers", "Coaches", "Auto Repair", "Car Detailers"],
      icon: <GraduationCap className="text-blue-600" />,
    },
    {
      title: "Home & Field Services",
      list: ["Plumbers", "Electricians", "HVAC Specialists", "Cleaning Services", "General Contractors"],
      icon: <Wrench className="text-blue-600" />,
    },
    {
      title: "Personal Care & Fitness",
      list: ["Barbershops", "Salons", "Gyms & Trainers", "Wellness Spas", "Fitness Studios"],
      icon: <Scissors className="text-blue-600" />,
    },
    {
      title: "Healthcare & Wellness",
      list: ["Clinics", "Dentists", "Therapists", "Wellness Centers", "Optometrists"],
      icon: <Stethoscope className="text-blue-600" />,
    },
    {
      title: "Property & Maintenance",
      list: ["Repair Companies","Landscapers", "Roofing Experts", "Painters", "Pool Maintenance"],
      icon: <Droplets className="text-blue-600" />,
    },
 
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Who We Help"
          title="Digital systems built for real businesses."
          description="From local services to global brands, we design and build professional websites and tools that convert, scale, and perform."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {niches.map((niche, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                {niche.icon}
              </div>

              <h3 className="text-md font-bold text-slate-900 mb-4">
                {niche.title}
              </h3>

              <ul className="space-y-2">
                {niche.list.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-slate-600 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-blue-500 mr-2 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600">
            Don’t see your industry?
            <span className="font-semibold text-slate-900">
              {" "}We build custom solutions for almost any business.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
