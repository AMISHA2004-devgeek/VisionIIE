import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Globe2, Handshake } from 'lucide-react';

const ImpactCard = ({ icon: Icon, count, text, delay }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5, 
      delay,
      type: "spring",
      stiffness: 100
    }}
  >
    <motion.div 
      className="flex justify-center items-center gap-1 mb-2 w-fit"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon className="w-8 h-8 text-gray-800" />
      <motion.div 
        className="font-serif text-3xl font-medium"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {count}
      </motion.div>
    </motion.div>
    <motion.p 
      className="text-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.3 }}
    >
      {text}
    </motion.p>
  </motion.div>
);

const OurMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission Statement */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
        >
          <motion.h2 
            className="font-serif text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
          >
            To transform rural economies by creating thriving startup ecosystems 
            that promote innovation, empower local entrepreneurs, and align with 
            India's vision of global partnerships.
          </motion.p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ImpactCard 
            icon={Building2}
            count="3+"
            text="Rural startups supported and empowered through our ecosystem"
            delay={0.2}
          />
          <ImpactCard 
            icon={Globe2}
            count="2+"
            text="Countries in the Global South where we've launched initiatives"
            delay={0.4}
          />
          <ImpactCard 
            icon={Handshake}
            count="7+"
            text="Partnerships driven by the Look East Policy"
            delay={0.6}
          />
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button 
            className="group inline-flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More About Our Impact
            <motion.div
              className="ml-2"
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurMission;