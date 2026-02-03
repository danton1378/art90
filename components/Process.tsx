import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Printer, Truck } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: "Consult",
    desc: "Chat with us via WhatsApp or visit our studio to share your idea."
  },
  {
    icon: <PenTool size={24} />,
    title: "Design",
    desc: "We create a digital preview for your approval before printing."
  },
  {
    icon: <Printer size={24} />,
    title: "Print",
    desc: "Using high-end machinery, we bring the design to life."
  },
  {
    icon: <Truck size={24} />,
    title: "Deliver",
    desc: "Pick up from Kothrud or get it delivered to your doorstep."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-purple/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm">Workflow</span>
          <h2 className="text-4xl font-serif text-white font-bold mt-2">How It Works</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-white/10 flex items-center justify-center text-white mb-6 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
