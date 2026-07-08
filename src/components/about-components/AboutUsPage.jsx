import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  // Provided Color Palette Mapping from "Blue Palette Inspo.webp"
  const colors = {
    planetary: '#334EAC', // Vibrant Royal Blue
    venus: '#BAD6EB',     // Soft Light Blue
    universe: '#7096D1',  // Muted Steel Blue
    meteor: '#F7F2EB',    // Warm Off-White (Primary Canvas)
    milkyway: '#FFF9F0',  // Cream White (Secondary Canvas)
    galaxy: '#081F5C',    // Deep Midnight Blue (Heavy Text/Accents)
    sky: '#D0E3FF',      // Airy Blue
  };

  // ULTRACLEAN HERO TEXT ANIMATIONS (Perfect vertical translation, no bounciness, strictly flat)
  const heroTextVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 } 
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } // Smooth high-end corporate deceleration
    }
  };

  // Static-tilt visual canvas (Slow vertical translation only, strictly no rotations on text)
  const floatingVisualVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 1.0, 
        ease: [0.25, 1, 0.5, 1] 
      }
    }
  };

  // Sections 2, 3, and 4 configurations remain completely unchanged
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="w-full min-h-screen select-none" style={{ backgroundColor: colors.meteor }}>
      
      {/* --- SECTION 1: HERO NARRATIVE (Strictly Flat Typography with Shape-Only Rotations) --- */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Main story text block revealing strictly flat and horizontally stable elements */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={heroTextVariants}
            className="space-y-8"
          >
            <motion.span 
              variants={heroItemVariants}
              className="inline-block text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full border"
              style={{ color: colors.planetary, borderColor: colors.universe }}
            >
              Our Story & Evolution
            </motion.span>
            
            <motion.h1 
              variants={heroItemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none"
              style={{ color: colors.galaxy }}
            >
              Building Tomorrow's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.planetary}, ${colors.universe})` }}>
                Digital Enterprises
              </span>
            </motion.h1>

            <motion.div variants={heroItemVariants} className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90" style={{ color: colors.galaxy }}>
              <p>
                FutureBots was founded with a vision to bridge the gap between business strategy and modern technology. 
                We believe successful digital transformation is achieved not only through advanced technologies but also 
                through collaboration, innovation, and a deep understanding of business needs.
              </p>
              <p className="font-semibold">
                Our multidisciplinary team of consultants, software engineers, cloud architects, cybersecurity experts, 
                business analysts, and digital transformation specialists work together to deliver intelligent solutions 
                that help organizations innovate confidently.
              </p>
              <p className="text-base opacity-80 font-normal">
                We focus on creating scalable, secure, and user-friendly technology platforms that simplify complex 
                business processes while empowering employees and enhancing customer experiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Interactive visual shape layout: text is perfectly static while the shape has the motion */}
          <div className="relative hidden lg:flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatingVisualVariants}
              animate={{
                y: [0, -12, 0] // Gentle translational float strictly on the vertical axis (y)
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative flex items-center justify-center w-96 h-96"
            >
              {/* SLOW ROTATING OUTSIDE DECORATIVE SHAPE (Rotates independently of the text) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed rounded-full"
                style={{ borderColor: colors.universe }}
              />

              {/* STRICTLY FLAT AND UNTILTED TEXT CARD (Always level with the reader's eyes) */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-72 h-72 rounded-[3.5rem] shadow-2xl flex items-center justify-center p-8 bg-white z-10"
              >
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: colors.planetary }}>
                    Founding Vision
                  </p>
                  <p className="text-base italic leading-tight" style={{ color: colors.galaxy }}>
                    "Bridging the strategy-tech gap."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: VISION & MISSION BENTO --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          
          {/* Vision Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-12 lg:col-span-5 p-12 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center text-white"
            style={{ backgroundColor: colors.galaxy }}
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-sm font-bold tracking-widest uppercase text-sky-200">Our Vision</h2>
              <p className="text-3xl font-light leading-snug">
                To become a globally trusted technology partner delivering intelligent digital solutions that empower 
                organizations to innovate, grow, and lead in the digital era.
              </p>
            </div>
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.planetary }}></div>
          </motion.div>

          {/* Mission Block */}
          <motion.div 
            className="md:col-span-12 lg:col-span-7 p-12 rounded-[3rem] bg-white border flex flex-col justify-between"
            style={{ borderColor: `${colors.universe}30` }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase mb-8" style={{ color: colors.planetary }}>Our Mission</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: "Deliver", text: "Innovative technology solutions that solve real business challenges." },
                { title: "Enable", text: "Organizations to embrace digital transformation with confidence." },
                { title: "Develop", text: "Secure, scalable, and future-ready digital platforms." },
                { title: "Foster", text: "Long-term client partnerships built on trust and transparency." },
                { title: "Empower", text: "Businesses through continuous innovation and technological excellence." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="font-bold text-lg mb-2 group-hover:translate-x-2 transition-transform duration-300" style={{ color: colors.galaxy }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed opacity-70" style={{ color: colors.galaxy }}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: CORE VALUES BENTO GRID --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight" style={{ color: colors.galaxy }}>Our Core Values</h2>
          <div className="h-1 w-20 mt-4 rounded-full" style={{ backgroundColor: colors.planetary }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Innovation", desc: "Continuously exploring new ideas and technologies to deliver better solutions." },
            { title: "Integrity", desc: "Maintaining transparency, honesty, and accountability in every engagement." },
            { title: "Excellence", desc: "Delivering high-quality solutions that exceed client expectations." },
            { title: "Customer Success", desc: "Building long-term relationships by helping our clients achieve measurable business outcomes." },
            { title: "Collaboration", desc: "Working closely with clients to understand their goals and create meaningful solutions." },
            { title: "Continuous Learning", desc: "Adapting to emerging technologies and industry trends through ongoing learning and improvement." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, backgroundColor: colors.milkyway }}
              className="p-10 rounded-[2.5rem] bg-white border border-stone-100 shadow-sm transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl mb-6 flex items-center justify-center bg-stone-50 group-hover:bg-white">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.planetary }}></div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.galaxy }}>{value.title}</h3>
              <p className="text-base leading-relaxed opacity-80" style={{ color: colors.galaxy }}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: FINAL NARRATIVE BEAT --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: colors.galaxy }}>
             Adapting, Innovating, and Thriving.
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: colors.universe }}>
            As technology continues to evolve, FutureBots remains committed to helping businesses adapt, 
            innovate, and thrive in an increasingly digital economy.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.venus }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.universe }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.planetary }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}