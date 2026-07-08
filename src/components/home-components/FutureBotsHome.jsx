import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function FutureBotsHome() {
  // Color Palette Reference Mapping from "Blue Palette Inspo.webp"
  const colors = {
    c01: '#7096d1', // Universe (Mid Blue / Accents)
    c02: '#081f5c', // Galaxy (Deep Midnight Blue / Heavy Text & Dark Blocks)
    c03: '#f7f2eb', // Meteor (Off-White Canvas Base)
    c04: '#bad6eb', // Venus (Soft Light Blue Highlight)
    c05: '#334eac', // Planetary (Vibrant Royal Blue / Core CTAs)
  };

  // Mouse tracking for interactive 3D parallax background elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Parallax transform calculations
  const floatX1 = useTransform(mouseX, [-400, 400], [-30, 30]);
  const floatY1 = useTransform(mouseY, [-400, 400], [-30, 30]);
  const floatX2 = useTransform(mouseX, [-400, 400], [40, -40]);
  const floatY2 = useTransform(mouseY, [-400, 400], [40, -40]);

  return (
    <main 
      className="relative min-h-screen w-full overflow-x-hidden py-16 px-6 sm:px-12 lg:px-24 flex flex-col justify-center select-none pt-20"
      style={{ backgroundColor: colors.c03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* --- BACKGROUND MOTION ELEMENTS (Abstract 3D Canvas Layer) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft, glowing atmospheric distortion */}
        <div 
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-all duration-700"
          style={{ backgroundColor: colors.c01 }}
        />
        <div 
          className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-all duration-700"
          style={{ backgroundColor: colors.c04 }}
        />

        {/* Floating 3D Geometric Nodes simulating intelligent technology */}
        <motion.div 
          style={{ x: floatX1, y: floatY1, borderColor: colors.c01, rotate: 45 }}
          className="absolute top-1/3 left-10 md:left-20 w-16 h-16 border-4 border-dashed rounded-2xl opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          style={{ x: floatX2, y: floatY2, backgroundColor: colors.c05 }}
          className="absolute bottom-1/3 right-12 md:right-32 w-24 h-24 rounded-3xl opacity-10 shadow-2xl backdrop-blur-sm"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* --- SECTION 1: HERO IMPACT & CORE MISSION --- */}
      <section className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        
        {/* Main Headline & Primary Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border bg-white/60 backdrop-blur-md"
              style={{ color: colors.c02, borderColor: colors.c01 }}
            >
              FutureBots // Digital Transformation
            </span>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: colors.c02 }}
            >
              Transforming Businesses with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.c02}, ${colors.c05})` }}>
                Intelligent Technology
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl opacity-90"
            style={{ color: colors.c02 }}
          >
            FutureBots is a technology solutions company committed to helping organizations embrace digital
            transformation through innovative, secure, and scalable technology solutions.
          </motion.p>

          {/* High-Intent Strategic CTA Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* Primary Action Button (Navigates to Contact) */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 30px -10px rgba(51,78,172,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white tracking-wide transition-colors"
                style={{ backgroundColor: colors.c05 }}
              >
                Schedule a Consultation
              </motion.button>
            </Link>

            {/* Secondary Action Button (Navigates to Services) */}
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: colors.c02, color: '#ffffff' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border-2 transition-all tracking-wide bg-white/40 backdrop-blur-md"
                style={{ color: colors.c02, borderColor: colors.c02 }}
              >
                Explore Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Asymmetric Floating Card for Secondary Narrative */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 p-8 rounded-3xl border shadow-xl relative overflow-hidden bg-white/70 backdrop-blur-xl"
          style={{ borderColor: `${colors.c01}40` }}
        >
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: colors.c01 }} />
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stone-100 mb-6">
              <svg className="w-6 h-6" style={{ fill: colors.c05 }} viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: colors.c02 }}>
              We combine deep industry expertise with cutting-edge technologies to simplify
              business operations, enhance customer experiences, and enable sustainable growth.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE BENTO ECOSYSTEM GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Bento Block Left: Core Belief Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 p-8 sm:p-12 rounded-[2.5rem] flex flex-col justify-between group relative overflow-hidden border-2 bg-white"
            style={{ borderColor: `${colors.c01}30` }}
          >
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-light leading-relaxed tracking-tight" style={{ color: colors.c02 }}>
                Our solutions are designed with one core belief—technology should empower people, improve
                decision-making, and drive business success. From enterprise software
                development and intelligent automation to cloud transformation, cybersecurity,
                and data analytics, we deliver future-ready solutions that help organizations
                remain competitive in an ever-changing digital world.
              </p>
            </div>
            
            {/* Interactive animated accent block */}
            <div 
              className="w-12 h-2 rounded-full mt-8 transition-all duration-500 group-hover:w-24" 
              style={{ backgroundColor: colors.c05 }}
            />
          </motion.div>

          {/* Bento Block Right: Ecosystem Partnerships */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 p-8 sm:p-12 rounded-[2.5rem] flex flex-col justify-between text-white relative overflow-hidden"
            style={{ backgroundColor: colors.c02 }}
          >
            {/* Decorative background visual graphic matrix */}
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] p-6 overflow-hidden break-all select-none pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="leading-none mb-1">01010100 01010010 01000001 01001110 01010011 01000110 01001111 01010010 01001101</div>
              ))}
            </div>

            <div className="relative z-10 space-y-6">
              <p className="text-lg sm:text-xl font-normal leading-relaxed opacity-95">
                Whether you're a startup, SME, enterprise, or public sector organization, FutureBots partners
                with you to build intelligent digital ecosystems that improve productivity,
                streamline operations, and unlock new opportunities for innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}