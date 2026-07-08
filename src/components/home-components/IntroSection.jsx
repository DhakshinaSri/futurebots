import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function IntroSection() {
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
      className="relative min-h-screen w-full overflow-x-hidden py-16 px-6 sm:px-12 lg:px-24 flex flex-col justify-center select-none"
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

      {/* --- NEW SECTION: WELCOME & STRATEGIC INNOVATION --- */}
      <section className="relative z-10 max-w-7xl mx-auto w-full mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Label / Side Title */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-8">
          <span 
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: colors.c01 }}
          >
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: colors.c02 }}>
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.c05}, ${colors.c01})` }}>
              FutureBots
            </span>
          </h2>
          <div className="h-[2px] w-16" style={{ backgroundColor: colors.c04 }} />
        </div>

        {/* Structural Interactive Information Sequence */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Beat 1: Strategic Innovation Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, borderColor: colors.c05 }}
            className="p-8 rounded-[2rem] bg-white border border-stone-200/60 shadow-lg flex flex-col justify-between group transition-colors duration-300"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold opacity-60" style={{ color: colors.c02 }}>
                THE IDENTITY
              </span>
              <p className="text-base leading-relaxed font-normal" style={{ color: colors.c02 }}>
                FutureBots is more than a technology company—we are a strategic innovation partner helping organizations transform ideas into impactful digital solutions.
              </p>
            </div>
            <div className="w-8 h-1 rounded-full mt-6 bg-stone-200 transition-colors group-hover:bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.c05}, ${colors.c01})` }} />
          </motion.div>

          {/* Beat 2: Capabilities Mapping */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, borderColor: colors.c05 }}
            className="p-8 rounded-[2rem] bg-white border border-stone-200/60 shadow-lg flex flex-col justify-between group transition-colors duration-300"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold opacity-60" style={{ color: colors.c02 }}>
                THE METHODOLOGY
              </span>
              <p className="text-base leading-relaxed font-normal" style={{ color: colors.c02 }}>
                By combining business consulting, software engineering, cloud technologies, intelligent automation, and data-driven insights, we help organizations overcome operational challenges and achieve long-term business excellence.
              </p>
            </div>
            <div className="w-8 h-1 rounded-full mt-6 bg-stone-200 transition-colors group-hover:bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.c05}, ${colors.c01})` }} />
          </motion.div>

          {/* Beat 3: Tailored Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, borderColor: colors.c05 }}
            className="p-8 rounded-[2rem] bg-white border border-stone-200/60 shadow-lg flex flex-col justify-between group transition-colors duration-300"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold opacity-60" style={{ color: colors.c02 }}>
                THE PROMISE
              </span>
              <p className="text-base leading-relaxed font-normal" style={{ color: colors.c02 }}>
                Every solution we create is tailored to our clients' unique business goals, ensuring measurable outcomes and lasting value.
              </p>
            </div>
            <div className="w-8 h-1 rounded-full mt-6 bg-stone-200 transition-colors group-hover:bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.c05}, ${colors.c01})` }} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
