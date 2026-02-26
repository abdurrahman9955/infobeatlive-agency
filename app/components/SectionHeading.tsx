'use client'

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, description, light = false }) => (
  <div className="mb-16 text-center">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-sm font-bold uppercase tracking-widest ${light ? 'text-blue-200' : 'text-blue-600'}`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`mx-auto mt-4 max-w-2xl text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}
      >
        {description}
      </motion.p>
    )}
  </div>
);