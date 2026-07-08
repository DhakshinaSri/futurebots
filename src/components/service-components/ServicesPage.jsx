import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  // Color Palette Mapping from "Blue Palette Inspo.webp"
  const colors = {
    planetary: '#334EAC', // Vibrant Royal Blue
    venus: '#BAD6EB',     // Soft Light Blue
    universe: '#7096D1',  // Muted Steel Blue
    meteor: '#F7F2EB',    // Warm Off-White (Primary Canvas Base)
    milkyway: '#FFF9F0',  // Cream White (Secondary Canvas)
    galaxy: '#081F5C',    // Deep Midnight Blue (Heavy Typography & Accents)
    sky: '#D0E3FF',      // Airy Blue Highlight
  };

  // Smooth pure vertical translate animation for initial viewport entrances
  const faderUp = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const services = [
    {
      title: "Enterprise Digital Transformation",
      text: "We help organizations modernize their operations through digital transformation strategies, process optimization, and technology consulting. Our experts develop customized roadmaps that align digital initiatives with business objectives, ensuring long-term success."
    },
    {
      title: "Custom Software Development",
      text: "Our software engineering team designs and develops secure, scalable, and user-friendly web applications, enterprise platforms, mobile applications, customer portals, and business management systems tailored to your specific requirements."
    },
    {
      title: "Intelligent Business Automation",
      text: "We streamline repetitive business processes using intelligent automation solutions that improve operational efficiency, reduce manual effort, minimize errors, and increase overall productivity while allowing employees to focus on higher-value activities."
    },
    {
      title: "Cloud Solutions",
      text: "FutureBots provides comprehensive cloud consulting, migration, infrastructure modernization, hybrid cloud solutions, disaster recovery, and managed cloud services that enhance business agility, scalability, and operational resilience."
    },
    {
      title: "Data Analytics & Business Intelligence",
      text: "We transform business data into actionable insights through interactive dashboards, advanced reporting, predictive analytics, and performance monitoring, enabling organizations to make informed strategic decisions."
    },
    {
      title: "Cybersecurity Solutions",
      text: "Our cybersecurity services help organizations protect digital assets, strengthen compliance, manage cyber risks, implement governance frameworks, and ensure secure business operations in today's evolving threat landscape."
    },
    {
      title: "Enterprise Integration",
      text: "We integrate enterprise applications, business systems, APIs, cloud platforms, and databases to create connected digital ecosystems that improve collaboration and operational efficiency."
    },
    {
      title: "Technology Consulting",
      text: "Our consultants provide strategic technology advisory services, helping organizations identify innovation opportunities, optimize IT investments, and implement sustainable digital transformation strategies."
    }
  ];

  return (
    <main className="w-full min-h-screen select-none" style={{ backgroundColor: colors.meteor }}>
      
      {/* --- SECTION 1: STACKING SERVICES CARDS --- */}
      <section className="relative pt-32 pb-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header Block */}
          <div className="space-y-4">
            <motion.h1 
              variants={faderUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none"
              style={{ color: colors.galaxy }}
            >
              OUR SERVICES
            </motion.h1>
            <motion.div variants={faderUp} className="h-1 w-24 rounded-full" style={{ backgroundColor: colors.planetary }}></motion.div>
          </div>

          {/* Interactive Stacking Cards Stack Container */}
          <div className="relative space-y-12 py-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={faderUp}
                className="sticky rounded-[2.5rem] bg-white border border-stone-200/50 shadow-2xl p-8 sm:p-12 overflow-hidden transition-all duration-300"
                style={{ 
                  borderColor: `${colors.universe}30`,
                  // Calculates top sticking position for a fanned overlap aesthetic as you scroll
                  top: `calc(100px + ${index * 24}px)`,
                  // Creates a depth stack using z-index
                  zIndex: index + 1
                }}
              >
                {/* Horizontal Split Layout: Perfectly compact for scroll sticky stacked layouts */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Number & Service Heading */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight" style={{ color: colors.galaxy }}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Column: Service Paragraph Copy */}
                  <div className="lg:col-span-7">
                    <p className="text-base sm:text-lg leading-relaxed opacity-90" style={{ color: colors.galaxy }}>
                      {service.text}
                    </p>
                    <div 
                      className="w-16 h-1 mt-6 rounded-full" 
                      style={{ backgroundColor: colors.venus }}
                    />
                  </div>

                </div>

                {/* Subtle visual design background identifier */}
                <div 
                  className="absolute bottom-4 right-10 font-mono text-[100px] font-extrabold leading-none opacity-5 pointer-events-none select-none"
                  style={{ color: colors.galaxy }}
                >
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE FUTUREBOTS (Sticky Layout) --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Pillar Block */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.planetary }}>
              Strategic Distinction
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight leading-tight" style={{ color: colors.galaxy }}>
              WHY CHOOSE <br />FUTUREBOTS
            </h2>
            <div className="h-1 w-16" style={{ backgroundColor: colors.planetary }} />
            
            <div className="p-8 rounded-3xl space-y-4" style={{ backgroundColor: colors.meteor }}>
              <h3 className="text-lg font-bold" style={{ color: colors.galaxy }}>
                Your Trusted Technology Partner
              </h3>
              <p className="text-sm leading-relaxed opacity-90" style={{ color: colors.galaxy }}>
                At FutureBots, we understand that every organization has unique goals, challenges, and opportunities. Our client-centric approach ensures every solution is tailored to your business requirements while delivering measurable value.
              </p>
            </div>
          </div>

          {/* Scrolling Grid Value Props */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Business-Centric Approach",
                desc: "We align technology with business objectives, ensuring every investment contributes to organizational growth and operational excellence."
              },
              {
                title: "Experienced Professionals",
                desc: "Our multidisciplinary team brings expertise across software engineering, cloud computing, cybersecurity, business consulting, data analytics, and enterprise architecture."
              },
              {
                title: "Innovative Solutions",
                desc: "We leverage modern technologies and best practices to develop future-ready solutions that support business innovation and long-term scalability."
              },
              {
                title: "Customer-Focused Delivery",
                desc: "We work closely with our clients throughout every stage of the project—from planning and development to implementation, training, and ongoing support."
              },
              {
                title: "Secure & Scalable Technology",
                desc: "Security, reliability, and scalability are integrated into every solution we deliver, ensuring long-term performance and business continuity."
              },
              {
                title: "Industry Expertise",
                desc: "Our experience spans multiple sectors, enabling us to deliver industry-specific solutions that address unique operational challenges and regulatory requirements."
              },
              {
                title: "End-to-End Services",
                desc: "From strategic consulting and solution design to implementation and continuous support, FutureBots provides comprehensive technology services under one roof."
              },
              {
                title: "Long-Term Partnerships",
                desc: "We believe in building lasting relationships by continuously supporting our clients' digital transformation journeys and helping them adapt to changing business environments."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: colors.planetary }}
                className="p-8 rounded-3xl border border-stone-200/80 bg-white transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: colors.meteor }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.planetary }}></div>
                </div>
                <h4 className="text-lg font-bold mb-3" style={{ color: colors.galaxy }}>
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-80" style={{ color: colors.galaxy }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: INDUSTRIES WE SERVE --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.planetary }}>
              Broad Horizon
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: colors.galaxy }}>
              INDUSTRIES WE SERVE
            </h2>
            <div className="h-1 w-20 mx-auto" style={{ backgroundColor: colors.planetary }} />
          </div>

          {/* Premium Badge Interface Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Healthcare", "Banking & Financial Services", "Insurance", "Manufacturing",
              "Retail & E-Commerce", "Education", "Government", "Logistics & Supply Chain",
              "Hospitality", "Telecommunications", "Energy & Utilities", "Construction",
              "Real Estate", "Professional Services", "Startups & MSMEs"
            ].map((industry, i) => (
              <motion.div
                key={i}
                variants={faderUp}
                whileHover={{ scale: 1.03, backgroundColor: colors.galaxy, color: '#ffffff' }}
                className="px-6 py-4 rounded-2xl font-bold text-sm tracking-wide border cursor-pointer transition-all duration-300"
                style={{ backgroundColor: colors.milkyway, borderColor: `${colors.universe}30`, color: colors.galaxy }}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 4: THE PROGRESSIVE PROCESS TRACK --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.planetary }}>
              Execution Lifecycle
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: colors.galaxy }}>
              OUR PROCESS
            </h2>
            <div className="h-1 w-16" style={{ backgroundColor: colors.planetary }} />
          </div>

          {/* Connected Step Grid (Fully Mobile Responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {[
              { title: "Discover", text: "Understanding your business goals, challenges, and opportunities." },
              { title: "Strategize", text: "Developing customized digital transformation roadmaps." },
              { title: "Design", text: "Creating intuitive, scalable, and secure solution architectures." },
              { title: "Develop", text: "Building high-quality software and digital platforms using modern technologies." },
              { title: "Deploy", text: "Implementing solutions with minimal disruption to business operations." },
              { title: "Support", text: "Providing continuous monitoring, optimization, and technical assistance." }
            ].map((step, index) => (
              <div key={index} className="relative group space-y-6 p-6 rounded-2xl transition-all duration-300 hover:bg-stone-50">
                <div className="flex items-center justify-between">
                  {/* Process Indicator */}
                  <div className="w-10 h-10 rounded-full font-mono text-sm font-bold flex items-center justify-center text-white" style={{ backgroundColor: colors.galaxy }}>
                    0{index + 1}
                  </div>
                  {/* Connection Track Segment (Hidden on mobile) */}
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-[44px] left-[52px] right-[-34px] h-[1px] z-0" style={{ backgroundColor: colors.universe, opacity: '0.3' }}></div>
                  )}
                </div>
                
                <div className="space-y-2 relative z-10">
                  <h4 className="font-extrabold text-lg" style={{ color: colors.galaxy }}>
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-80" style={{ color: colors.galaxy }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}