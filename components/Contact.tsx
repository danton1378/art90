import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Phone, MapPin, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: false, phone: false, message: false });

  const nameControls = useAnimation();
  const phoneControls = useAnimation();
  const messageControls = useAnimation();

  const shakeAnimation = {
    x: [0, -10, 10, -5, 5, 0],
    transition: { duration: 0.4 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;
    const newErrors = { name: false, phone: false, message: false };

    if (!formState.name.trim()) {
      nameControls.start(shakeAnimation);
      newErrors.name = true;
      hasError = true;
    }
    if (!formState.phone.trim()) {
      phoneControls.start(shakeAnimation);
      newErrors.phone = true;
      hasError = true;
    }
    if (!formState.message.trim()) {
      messageControls.start(shakeAnimation);
      newErrors.message = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    // Simulate send
    alert('Thank you! We will contact you shortly.');
    setFormState({ name: '', phone: '', message: '' });
    setErrors({ name: false, phone: false, message: false });
  };

  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-serif font-bold text-white mb-6">Let's Create <br/>Something <span className="text-gradient">Unique</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              Visit our studio in Kothrud or drop us a message. We are ready to bring your ideas to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Phone / WhatsApp</h4>
                  <p className="text-gray-400 mt-1">+91 97628 60860</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Studio Location</h4>
                  <p className="text-gray-400 mt-1">
                    Art of Customization, Kothrud,<br/>
                    Pune, Maharashtra 411038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <p className="text-gray-400 mt-1">hello@artofcustomization.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Quick Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <motion.div animate={nameControls} className="relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className={`peer w-full bg-black/20 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors placeholder-transparent ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/10 focus:border-brand-pink'
                  }`}
                  placeholder="John Doe"
                />
                <label 
                  htmlFor="name"
                  className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm 
                  peer-focus:-top-6 peer-focus:text-xs peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs
                  ${errors.name 
                    ? 'text-red-500 peer-placeholder-shown:text-red-500 peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:text-red-500' 
                    : 'text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-brand-pink peer-[:not(:placeholder-shown)]:text-gray-400'
                  }`}
                >
                  Your Name
                </label>
              </motion.div>

              <motion.div animate={phoneControls} className="relative group">
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formState.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  className={`peer w-full bg-black/20 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors placeholder-transparent ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/10 focus:border-brand-pink'
                  }`}
                  placeholder="+91 90000 00000"
                />
                <label 
                  htmlFor="phone"
                  className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm 
                  peer-focus:-top-6 peer-focus:text-xs peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs
                  ${errors.phone
                    ? 'text-red-500 peer-placeholder-shown:text-red-500 peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:text-red-500' 
                    : 'text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-brand-pink peer-[:not(:placeholder-shown)]:text-gray-400'
                  }`}
                >
                  Phone Number
                </label>
              </motion.div>

              <motion.div animate={messageControls} className="relative group">
                <textarea 
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className={`peer w-full bg-black/20 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors resize-none placeholder-transparent ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/10 focus:border-brand-pink'
                  }`}
                  placeholder="I need 50 custom t-shirts for..."
                ></textarea>
                <label 
                  htmlFor="message"
                  className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm 
                  peer-focus:-top-6 peer-focus:text-xs peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs
                  ${errors.message
                    ? 'text-red-500 peer-placeholder-shown:text-red-500 peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:text-red-500' 
                    : 'text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-brand-pink peer-[:not(:placeholder-shown)]:text-gray-400'
                  }`}
                >
                  Project Details
                </label>
              </motion.div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-purple to-brand-pink py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-brand-pink/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                Send Request <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
