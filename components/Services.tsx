import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Printer, Coffee, Gift, Shirt, Briefcase, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    icon: <Shirt size={32} />,
    title: "Apparel Printing",
    description: "Premium DTF & Screen printing on T-shirts, hoodies, and uniforms. Vivid colors that last.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Coffee size={32} />,
    title: "Custom Mugs",
    description: "Magic mugs, frosted glass, and ceramic sublimation. Perfect for memories or branding.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Briefcase size={32} />,
    title: "Corporate Gifting",
    description: "Branded diaries, pens, bottles, and tech kits. Elevate your company culture.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Gift size={32} />,
    title: "Personalized Gifts",
    description: "Photo frames, keychains, and unique keepsakes designed just for your loved ones.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Printer size={32} />,
    title: "Marketing Materials",
    description: "Visiting cards, brochures, flyers, and banners with premium textures and finishes.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <ImageIcon size={32} />,
    title: "Wall Art & Decor",
    description: "Canvas prints, acrylic photo blocks, and posters to transform your space.",
    color: "from-fuchsia-500 to-purple-500"
  }
];

const TiltCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] group cursor-pointer"
    >
      <div className="relative h-full w-full rounded-xl bg-gray-900/90 backdrop-blur-xl p-8 flex flex-col gap-4 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        {/* Glow Effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />
        
        <div 
          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg mb-4`}
          style={{ transform: "translateZ(30px)" }}
        >
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white tracking-wide" style={{ transform: "translateZ(25px)" }}>{service.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed" style={{ transform: "translateZ(20px)" }}>{service.description}</p>
        
        <div className="mt-auto pt-4 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors" style={{ transform: "translateZ(15px)" }}>
          <span>Learn more</span>
          <motion.span 
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From single custom pieces to bulk corporate orders, we deliver excellence in every print.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
