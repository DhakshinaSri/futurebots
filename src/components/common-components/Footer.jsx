import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Color Palette Mapping from "Blue Palette Inspo.webp"
  const colors = {
    planetary: '#334EAC', // Vibrant Royal Blue
    venus: '#BAD6EB',     // Soft Light Blue
    universe: '#7096D1',  // Muted Steel Blue
    meteor: '#F7F2EB',    // Warm Off-White
    milkyway: '#FFF9F0',  // Cream White
    galaxy: '#081F5C',    // Deep Midnight Blue (Footer Background Base)
    sky: '#D0E3FF',      // Airy Blue Accent
  };

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Enterprise Digital Transformation",
    "Custom Software Development",
    "Intelligent Business Automation",
    "Cloud Solutions",
    "Data Analytics & Business Intelligence",
    "Cybersecurity Solutions",
    "Enterprise Integration",
    "Technology Consulting"
  ];

  return (
    <footer 
      className="w-full relative z-20 pt-20 pb-12 px-6 sm:px-12 lg:px-24 select-none"
      style={{ backgroundColor: colors.galaxy, color: colors.meteor }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- TOP ROW: QUICK LINKS & SERVICES LIST --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand & Narrative Left Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                FutureBots
              </h2>
              <div className="h-[2px] w-12" style={{ backgroundColor: colors.planetary }} />
            </div>
            <p className="text-base font-light leading-relaxed opacity-80">
              Building Tomorrow's Digital Enterprises with intelligent, secure, and scalable modern technologies.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Quick Links
              </h3>
            </div>
            <nav className="flex flex-col space-y-3">
              {menus.map((menu, idx) => (
                <Link 
                  key={idx} 
                  to={menu.path}
                  className="text-base font-medium transition-all duration-300 transform hover:translate-x-1 hover:text-white"
                  style={{ color: colors.meteor }}
                >
                  {menu.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Clickable List of Services */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Our Services
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to="/services" 
                    className="flex items-start space-x-2 font-medium opacity-80 transition-all duration-300 hover:opacity-100 hover:text-white group"
                  >
                    <span className="text-xs font-mono font-bold pt-0.5 group-hover:scale-110" style={{ color: colors.planetary }}>/</span>
                    <span className="leading-tight">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="h-[1px] w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* --- BOTTOM ROW: CONTACT, ADDRESS & HOURS --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Corporate Office Address Section */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ color: colors.venus }}>
              Corporate Office
            </h4>
            <div className="space-y-1 text-sm font-light opacity-80 leading-relaxed">
              <p className="font-bold text-base text-white">FutureBots</p>
              <p>Office 4, 7th Floor Building #25</p>
              <p>Raheja Mind space, Cyberabad</p>
              <p>Madhapur, Telangana 500081</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ color: colors.venus }}>
              Business Hours
            </h4>
            <div className="space-y-2 text-sm font-light opacity-80 leading-relaxed">
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block opacity-50">Weekdays</span>
                <p>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
              </div>
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block opacity-50">Saturdays</span>
                <p>Saturday: 9:30 AM – 1:30 PM (IST)</p>
              </div>
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block opacity-50">Sundays</span>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Direct Channels & Copyright Section */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ color: colors.venus }}>
                Business Channels
              </h4>
              <p className="text-sm opacity-80 font-light">
                For project inquiries or partnership discussions:
              </p>
              <a 
                href="mailto:info@futurebots.co.in" 
                className="inline-block font-bold text-lg underline transition-colors hover:text-white"
                style={{ color: colors.universe }}
              >
                info@futurebots.co.in
              </a>
            </div>
            
            {/* Copyright tag line */}
            <p className="text-xs font-mono opacity-40">
              &copy; {new Date().getFullYear()} FutureBots. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}