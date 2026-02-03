import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-[#020617] z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-brand-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
             <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-orange text-xs font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md">
               <Sparkles size={12} /> Pune's Finest Custom Studio
             </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white leading-[1.1] font-serif">
            Design Your <br />
            <span className="text-gradient">Imagination</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Premium custom printing and personalized gifting in Kothrud. 
            We turn your ideas into tangible masterpieces with vivid colors and luxury finishes.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/portfolio" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                View Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
              <span className="absolute z-10 inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Our Work <ArrowRight className="translate-x-1" />
              </span>
            </Link>
            
            <Link to="/contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all hover:border-white/40">
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </motion.div>
    </section>
  );
};

export default Hero;