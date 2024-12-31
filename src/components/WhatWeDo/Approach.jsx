import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, LibraryBig, Sprout, HeartHandshake, GraduationCap, Zap } from 'lucide-react';

const InitiativeCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        delay: delay + 0.2
      }}
    >
      <Icon className="w-8 h-8 text-gray-800 mb-4" />
    </motion.div>
    <motion.h3 
      className="font-serif text-xl mb-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay + 0.3 }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-gray-600 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay + 0.4 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const PillarSection = ({ title, items, delay = 0 }) => (
  <motion.div 
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <motion.h3 
      className="font-serif text-2xl mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay + 0.2 }}
    >
      {title}
    </motion.h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.3 + (index * 0.1) }}
        >
          <motion.div 
            className="mt-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: delay + 0.4 + (index * 0.1) }}
          >
            <div className="w-2 h-2 bg-black rounded-full" />
          </motion.div>
          <p className="text-gray-700">{item}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Approach = () => {
  return (
    <section id="approach" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our comprehensive approach combines local innovation with global collaboration
            to create sustainable impact across rural India and the Global South.
          </motion.p>
        </motion.div>

        {/* Key Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <InitiativeCard
            icon={Building}
            title="Rural Innovation Hubs"
            description="Creating incubation platforms in Tier II, Tier III cities, and rural regions to foster local entrepreneurship and innovation."
            delay={0.2}
          />
          <InitiativeCard
            icon={Globe}
            title="Global South Collaborations"
            description="Facilitating cross-border partnerships for technology transfer and market expansion, connecting rural India with global opportunities."
            delay={0.4}
          />
          <InitiativeCard
            icon={LibraryBig}
            title="Policy Advocacy"
            description="Aligning initiatives with India's Look East Policy and influencing policies to create a conducive environment for startups and incubation centers."
            delay={0.6}
          />
        </div>

        {/* Three Pillars */}
        <motion.div 
          className="bg-gray-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3 
            className="font-serif text-2xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Approach Pillars
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <PillarSection
                title="Startup Support for Rural India"
                items={[
                  "Providing comprehensive incubation support and funding opportunities",
                  "Offering dedicated mentorship programs",
                  "Driving innovation in agriculture, healthcare, education, and energy sectors",
                  "Building sustainable entrepreneurial ecosystems"
                ]}
                delay={0.6}
              />
              
              {/* Sector Icons */}
              <motion.div 
                className="flex gap-6 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[Sprout, HeartHandshake, GraduationCap, Zap].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.9 + (index * 0.1)
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon className="w-6 h-6 text-gray-600" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <PillarSection
                title="Global South Collaboration"
                items={[
                  "Facilitating partnerships between Indian startups and Global South counterparts",
                  "Encouraging knowledge sharing and joint ventures",
                  "Creating platforms for cross-border innovation",
                  "Building sustainable international networks"
                ]}
                delay={0.8}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;