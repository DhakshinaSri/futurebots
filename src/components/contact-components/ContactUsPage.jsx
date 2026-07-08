import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from "@/components/contact-components/ContactForm";

export default function ContactUsPage() {
  // Color Palette Reference Mapping from "Blue Palette Inspo.webp"
  const colors = {
    planetary: '#334EAC', // Vibrant Royal Blue
    venus: '#BAD6EB',     // Soft Light Blue
    universe: '#7096D1',  // Muted Steel Blue
    meteor: '#F7F2EB',    // Warm Off-White (Primary Canvas Base)
    milkyway: '#FFF9F0',  // Cream White
    galaxy: '#081F5C',    // Deep Midnight Blue (Heavy Typography)
    sky: '#D0E3FF',       // Airy Blue Accent
  };

  // Professional vertical entrance animation (strictly level)
  const faderUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const enquiryItems = [
    "Digital Transformation Consulting",
    "Enterprise Software Development",
    "Intelligent Automation Solutions",
    "Cloud & Infrastructure Services",
    "Data Analytics & Business Intelligence",
    "Cybersecurity & Governance",
    "Technology Partnerships",
    "Project Consultation"
  ];

  return (
    <main className="w-full min-h-screen select-none relative bg-white">
      
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: colors.sky }}
        />
        <div 
          className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          style={{ backgroundColor: colors.venus }}
        />
      </div>

      {/* --- SECTION 1: HEADER & PRIMARY CONTACT HUB --- */}
      <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Intro Title & Description (Top of the Form) */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <motion.span 
                variants={faderUp}
                className="inline-block text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full border"
                style={{ color: colors.planetary, borderColor: colors.universe }}
              >
                Global Connectivity
              </motion.span>
              <motion.h1 
                variants={faderUp}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none"
                style={{ color: colors.galaxy }}
              >
                Let's Build the Future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.planetary}, ${colors.universe})` }}>
                  Together
                </span>
              </motion.h1>
            </div>

            <motion.div 
              variants={faderUp} 
              className="space-y-6 text-lg md:text-xl font-light leading-relaxed opacity-95" 
              style={{ color: colors.galaxy }}
            >
              <p>
                Whether you're planning a digital transformation initiative, developing enterprise software, modernizing IT infrastructure, or exploring intelligent business solutions, FutureBots is here to help.
              </p>
              <p className="font-semibold text-lg" style={{ color: colors.planetary }}>
                Our team is committed to understanding your business needs and delivering practical technology solutions that create measurable value and long-term success.
              </p>
            </motion.div>
          </div>

          {/* Address & Hours (Left) + ContactForm (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Pillar: Typographical Details (Card-Free) */}
            <div className="lg:col-span-5 space-y-20">
              {/* Corporate Office */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-40" style={{ color: colors.galaxy }}>
                  Corporate Office
                </h3>
                <div className="space-y-3 text-lg sm:text-xl font-medium leading-tight" style={{ color: colors.galaxy }}>
                  <p className="font-extrabold text-2xl" style={{ color: colors.planetary }}>FutureBots</p>
                  <p className="opacity-80">Office 4, 7th Floor Building #25</p>
                  <p className="opacity-80">Raheja Mind space, Cyberabad</p>
                  <p className="opacity-80">Madhapur, Telangana 500081</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-40" style={{ color: colors.galaxy }}>
                  Business Hours
                </h3>
                <div className="space-y-6">
                  <div className="border-b pb-4" style={{ borderColor: 'rgba(8, 31, 92, 0.1)' }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: colors.planetary }}>Weekdays</p>
                    <p className="text-lg font-medium" style={{ color: colors.galaxy }}>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
                  </div>
                  <div className="border-b pb-4" style={{ borderColor: 'rgba(8, 31, 92, 0.1)' }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: colors.planetary }}>Saturdays</p>
                    <p className="text-lg font-medium" style={{ color: colors.galaxy }}>Saturday: 9:30 AM – 1:30 PM (IST)</p>
                  </div>
                  <div className="pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: colors.planetary }}>Sundays</p>
                    <p className="text-lg font-medium" style={{ color: colors.galaxy }}>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillar: Native Contact Form Embed */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: CARD-FREE TWO-COLUMN BUSINESS ENQUIRIES INDEX --- */}
      <section className="relative z-10 py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="space-y-3">
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: colors.galaxy }}>
              Business Enquiries
            </h2>
            <p className="text-lg opacity-70" style={{ color: colors.galaxy }}>
              Our experts are available to assist you with:
            </p>
          </div>

          {/* Premium Typographic Two-Column Layout (Zero cards, Left dynamic indicator tags) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {enquiryItems.map((item, idx) => (
              <div 
                className="group flex items-start space-x-6 relative pl-6 transition-all duration-300"
              >
                {/* Left Minimalist Interactive Anchor Line */}
                <div 
                  className="absolute left-0 top-1 bottom-1 w-[2px] transition-all duration-300 group-hover:w-1"
                  style={{ backgroundColor: colors.venus }}
                >
                  <div 
                    className="h-0 w-full transition-all duration-300 group-hover:h-full"
                    style={{ backgroundColor: colors.planetary }}
                  />
                </div>

                {/* Content Alignment */}
                <div className="space-y-1">
                  <span 
                    className="text-xl font-bold tracking-tight block transition-colors duration-300" 
                    style={{ color: colors.galaxy }}
                  >
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: GET IN TOUCH BANNER --- */}
      <section className="relative z-10 py-24 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.planetary }}>
              Direct Channel
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: colors.galaxy }}>
              Get in Touch
            </h2>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed font-light" style={{ color: colors.galaxy }}>
            Take the next step toward digital innovation with FutureBots. Contact our team today to discuss your requirements, schedule a consultation, or explore how we can help your organization achieve its technology and business goals. Drop an email to <a href="mailto:info@futurebots.co.in" className="font-bold underline transition-colors" style={{ color: colors.planetary }}>info@futurebots.co.in</a>
          </p>

          <div className="flex items-center space-x-4 pt-6">
            <div className="h-[2px] w-12" style={{ backgroundColor: colors.planetary }} />
            <div className="h-[2px] w-6 opacity-50" style={{ backgroundColor: colors.universe }} />
          </div>
        </div>
      </section>

    </main>
  );
}