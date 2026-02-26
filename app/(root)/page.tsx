import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Pricing } from "../components/Pricing";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import Faqs from "../components/Faqs";
import BlogsList from "../components/Blogs/Blogs";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
     
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Contact />
        <BlogsList/>
      </main>
      <Footer />
    </div>
  );
}
