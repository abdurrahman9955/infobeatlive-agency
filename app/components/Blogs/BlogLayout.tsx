'use client';
import {  ArrowLeft, Clock, Calendar,  CheckCircle, Sparkles, Zap, Globe, Cpu, 
ShieldCheck, Megaphone, BookOpen, Star, LucideIcon, 
ShoppingCart,
Lock} from 'lucide-react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  category: string;
  date: string;
  readTime: string;
  icon: LucideIcon;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({  children, title, category, date, readTime, icon: Icon }) => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a 
          href="/blogs" 
          className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to All Blogs
        </a>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 mb-12 py-6 border-y border-slate-100">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs">
              IB
            </div>
            <span className="font-bold text-slate-900">InfoBeatLive Team</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Calendar className="w-5 h-5 text-blue-500" /> {date}
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Clock className="w-5 h-5 text-blue-500" /> {readTime}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
          {children}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <Icon className="w-8 h-8 text-blue-200" />
               <h3 className="text-md font-black">Ready to fix your {category.toLowerCase()}?</h3>
            </div>
            <p className="text-blue-100 text-lg mb-8 max-w-xl">
              Join 1000+ local businesses that trust InfoBeatLive to turn their websites into growth machines.
            </p>
            <Link
              href="/#contact" 
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-4 
              rounded-full font-black text-md hover:scale-105 transition-transform"
            >
              <Sparkles className="w-6 h-6" /> Get My Website Audit
            </Link>
          </div>
          <Zap className="absolute top-1/2 right-[-20px] w-48 h-48 text-white/10 -translate-y-1/2 rotate-12" />
        </div>
      </div>
    </div>
  );
};

// --- BLOG 1 ---
export const BlogOne = () => (
  <BlogLayout title="Why Your Current Website is Losing You Customers" category="Strategy" date="Feb 20, 2026" readTime="5 min read" 
    icon={Zap}>
    <p className="text-xl font-medium text-slate-900">
      Your website should be your best salesperson. If it isn&apos;t generating leads while you sleep, it&apos;s just a digital brochure.
    </p>
    <h2 className="text-2xl font-black text-slate-900 pt-4">1. The 3-Second Rule</h2>
    <p>Google’s research shows that 53% of mobile users leave a site that takes longer than three seconds to load. Is your site fast 
      enough to keep them?</p>
    <h2 className="text-2xl font-black text-slate-900 pt-4">2. Lack of Clear Calls-to-Action</h2>
    <p>A &apos;Contact Us&apos; page isn&apos;t enough. You need specific buttons like &apos;Book Your Cleaning&apos; or &apos;Claim 
      Free Consultation&apos; on every 
      section of your page.</p>
    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 italic">
      &apos;InfoBeatLive tripled our monthly lead flow. Our old site was an embarrassment, now it&apos;s our biggest asset.&apos; — John Miller
    </div>
  </BlogLayout>
);

// --- BLOG 2 ---
export const BlogTwo = () => (
  <BlogLayout title="5 Reasons for Online Booking Systems" category="Automation" date="Feb 18, 2026" readTime="4 min read" icon={Clock}>
    <p className="text-xl font-medium text-slate-900">The world doesn&apos;t stop at 5:00 PM. Your business shouldn&apos;t either.</p>
    <ul className="space-y-4">
      <li className="flex gap-3"><CheckCircle className="text-blue-600 shrink-0" /> <strong>24/7 Availability:</strong> Let clients 
      book while you’re out on a job or asleep.</li>
      <li className="flex gap-3"><CheckCircle className="text-blue-600 shrink-0" /> <strong>No More Phone Tag:</strong> Save hours 
      every week by letting the system manage your calendar.</li>
      <li className="flex gap-3"><CheckCircle className="text-blue-600 shrink-0" /> <strong>Automated Reminders:</strong> Reduce 
      no-shows by 40% with automated SMS/Email alerts.</li>
    </ul>
  </BlogLayout>
);

// --- BLOG 3 ---
export const BlogThree = () => (
  <BlogLayout title="How to Rank #1 on Google Maps" category="SEO" date="Feb 15, 2026" readTime="7 min read" icon={Globe}>
    <p>For local businesses like plumbers, dentists, and cafes, Google Maps is the most valuable real estate on the internet.</p>
    <h2 className="text-2xl font-black text-slate-900 pt-4">The Secret Map Pack Formula</h2>
    <p>Ranking in the top 3 requires three things: Proximity, Prominence, and Relevance.</p>
    <p>We help businesses optimize their **Google Business Profile (GBP)** by uploading high-quality photos, collecting 
    5-star reviews, and responding to every query instantly via AI.</p>
  </BlogLayout>
);

// --- BLOG 4 ---
export const BlogFour = () => (
  <BlogLayout title="Professional Design vs. DIY Builders" category="Development" date="Feb 12, 2026" readTime="6 min read" 
    icon={Sparkles}>
    <h2 className="text-2xl font-black text-slate-900">Is Wix/Squarespace Killing Your SEO?</h2>
    <p>DIY builders are great for beginners, but they often come with bloated code. This makes your site slow and difficult 
      for Google to crawl.</p>
    <p>At InfoBeatLive, we use **high-performance frameworks** (like Next.js) that are lightning-fast and mobile-first, 
      ensuring you outrank every generic competitor in your area.</p>
  </BlogLayout>
);

// --- BLOG 5 ---
export const BlogFive = () => (
  <BlogLayout title="AI Chatbots: The Future of Support" category="AI & Tech" date="Feb 10, 2026" readTime="5 min read" icon={Cpu}>
    <p>Imagine never missing a lead again because you were too busy to answer the phone.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
        <h3 className="font-black text-blue-900 mb-2">Lead Capture</h3>
        <p className="text-sm">The AI talks to visitors, asks for their email, and qualifies the lead before you even see it.</p>
      </div>
      <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
        <h3 className="font-black text-green-900 mb-2">Auto-Booking</h3>
        <p className="text-sm">Connect your chatbot to your Google Calendar and let it book calls directly.</p>
      </div>
    </div>
  </BlogLayout>
);

// --- BLOG 6 ---
export const BlogSix = () => (
  <BlogLayout title="The 48-Hour Website Overhaul" category="Redesign" date="Feb 08, 2026" readTime="3 min read" icon={Zap}>
    <p>Got a website that looks like it was made in 2012? Broken forms? Blurry images?</p>
    <p>Our Rapid Overhaul service targets the most critical leaks in your sales funnel. We fix speed, mobile responsiveness, 
      and security in under 48 hours.</p>
  </BlogLayout>
);

// --- BLOG 7 ---
export const BlogSeven = () => (
  <BlogLayout title="Monthly Maintenance: Is it Necessary?" category="Maintenance" date="Feb 05, 2026" readTime="4 min read" 
    icon={ShieldCheck}>
    <p>Websites are living software. Every month, browser updates and security threats emerge.</p>
    <p>Our Maintain plan gives you total peace of mind. We handle the technical heavy lifting, backups, and security 
      monitoring so you can focus on running your business.</p>
  </BlogLayout>
);

// --- BLOG 8 ---
export const BlogEight = () => (
  <BlogLayout title="Case Study: Tripling Monthly Leads" category="Case Study" date="Feb 02, 2026" readTime="8 min read" icon={Star}>
    <p>We worked with a local Law Firm that was spending thousands on ads but getting 0 calls. By redesigning their 
    landing page for &apos;Trust Signals&apos; and adding an AI assistant, we jumped their conversion rate from 1% to 15%.</p>
  </BlogLayout>
);

// --- BLOG 9 ---
export const BlogNine = () => (
  <BlogLayout title="Social Media for Local Contractors" category="Marketing" date="Jan 30, 2026" readTime="5 min read" 
      icon={Megaphone}>
    <p>Contractors don&apos;t need &apos;viral&apos; videos; they need &apos;local&apos; reach. We show you how to target your 
      specific city on Facebook and Instagram to find homeowners who are ready to hire.</p>
  </BlogLayout>
);

// --- BLOG 10 ---
export const BlogTen = () => (
  <BlogLayout title="Scaling Your Professional Firm Online" category="Growth" date="Jan 28, 2026" readTime="6 min read" 
     icon={BookOpen}>
    <p>Authority is built through consistency. We help accountants and consultants build blogs and resource hubs that 
      position them as the #1 experts in their field.</p>
  </BlogLayout>
);

export const BlogEleven = () => (
  <BlogLayout 
    title="Local Retail E-commerce: Selling Beyond Your Shop Front" 
    category="E-commerce" 
    date="Jan 25, 2026" 
    readTime="6 min read" 
    icon={ShoppingCart}
  >
    <p className="text-xl font-medium text-slate-900">
      Your physical shop has closing hours, but your digital storefront shouldn&apos;t. 
      E-commerce is no longer just for global giants; it is the new standard for local retail success.
    </p>
   
    <h2 className="text-2xl font-black text-slate-900 pt-4">The 24/7 Revenue Engine</h2>
    <p>
      By taking your inventory online, you allow your local community to browse and buy even when your doors are 
      locked. 
      Whether it&apos;s Buy Online, Pick Up In-Store (BOPIS) or local delivery, we help you bridge the gap 
      between 
      your physical shelves and digital shoppers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-2">Inventory Sync</h3>
        <p className="text-sm">Automatically keep your online stock levels in line with your physical shop.</p>
      </div>
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-2">Local Growth</h3>
        <p className="text-sm">Use targeted local ads to show your products to people within a 10-mile radius.</p>
      </div>
    </div>
  </BlogLayout>
);

// --- BLOG 12 ---
export const BlogTwelve = () => (
  <BlogLayout 
    title="Is Your Site Secure? The Impact of SSL on Customer Trust" 
    category="Security" 
    date="Jan 22, 2026" 
    readTime="4 min read" 
    icon={Lock}
  >
    <p className="text-xl font-medium text-slate-900">
      Trust is the hardest thing to build and the easiest thing to lose. 
      If Google marks your site as &quot;Not Secure,&quot; you are losing customers before they even see 
      your homepage.
    </p>

    <h2 className="text-2xl font-black text-slate-900 pt-4">Why SSL Matters for Sales</h2>
    <p>
      An SSL certificate (the little padlock icon in the browser bar) encrypts the data between your client 
      and your server. Without it, modern browsers like Chrome will display a large red warning to your visitors.
    </p>

    <ul className="space-y-4 my-8">
      <li className="flex gap-3">
        <CheckCircle className="text-red-600 shrink-0" /> 
        <span><strong>SEO Rankings:</strong> Google officially uses HTTPS as a ranking signal. No security 
        means lower visibility.</span>
      </li>
      <li className="flex gap-3">
        <CheckCircle className="text-red-600 shrink-0" /> 
        <span><strong>Payment Security:</strong> You cannot legally or safely process payments without 
        high-level encryption.</span>
      </li>
      <li className="flex gap-3">
        <CheckCircle className="text-red-600 shrink-0" /> 
        <span><strong>Brand Reputation:</strong> Professional businesses don&apos;t trigger security 
        warnings.</span>
      </li>
    </ul>

    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
      <p className="text-red-900 font-medium">
        <strong>Pro Tip:</strong> All InfoBeatLive maintenance plans include managed SSL and 24/7 
        security monitoring 
        to ensure your business never goes dark.
      </p>
    </div>
  </BlogLayout>
);