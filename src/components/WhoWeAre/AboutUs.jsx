import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FadeInView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Card = ({ children, className, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ y: -5 }}
    className={`bg-white shadow-md rounded-lg transform transition-all ${className}`}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const StatCounter = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.h2
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-6xl font-serif mb-2"
      >
        {number}
      </motion.h2>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  const stats = [
    { number: "100+", label: "startups incubated" },
    { number: "15+", label: "countries impacted" },
    { number: "25+", label: "innovation partners" },
  ];

  const partners = [
    { type: "Government Agencies", desc: "Advocating for rural-focused and regional policies" },
    { type: "Academic Institutions", desc: "Building entrepreneurial capacity in rural areas" },
    { type: "Incubators", desc: "Partnering with innovation hubs in the Global South" },
    { type: "NGOs", desc: "Collaborating for sustainable development" },
  ];

  const drives = [
    {
      title: "Rural Innovation",
      description: "Bridging the urban-rural divide by supporting rural entrepreneurs.",
    },
    {
      title: "Global South Collaboration",
      description: "Strengthening partnerships across nations in Asia, Africa, and Latin America.",
    },
    {
      title: "Look East Policy Alignment",
      description: "Leveraging India's focus on regional collaboration to support cross-border innovations.",
    },
  ];
  
  return (
    <div id="aboutus" className="w-full mx-auto">
      {/* Hero Section with Parallax */}
      <motion.div 
        id="hero" 
        className="py-24 px-4 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-7xl font-serif mb-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ABOUT US
        </motion.h1>
        <motion.h2 
          className="text-4xl font-serif mt-4 mb-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Together we can empower rural innovation
        </motion.h2>
        <motion.p 
          className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Vision IIE is dedicated to fostering an inclusive and dynamic entrepreneurial landscape.
          We focus on empowering startups in Rural India and the Global South, supporting
          government policies like the Look East Policy, and connecting entrepreneurs to
          opportunities for global growth.
        </motion.p>
      </motion.div>

      {/* Mission Section with Reveal */}
      <div id="mission" className="bg-black py-24 px-4 text-white text-center">
        <FadeInView>
          <h2 className="text-4xl font-serif mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Vision IIE is a transformative platform dedicated to building a robust startup and
            incubation ecosystem in rural India and the Global South. By aligning with India's Look
            East Policy and the principles of the Global South, we foster innovation, entrepreneurship,
            and sustainable development.
          </p>
        </FadeInView>
      </div>

      {/* What Drives Us Section with Staggered Cards */}
      <div id="drives" className="py-24 px-4 max-w-7xl mx-auto">
        <FadeInView>
          <h2 className="text-4xl font-serif mb-16 text-center">What Drives Us</h2>
        </FadeInView>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drives.map((drive, index) => (
            <Card key={index} index={index} className="p-8 hover:shadow-xl">
              <CardContent>
                <h3 className="text-2xl font-serif mb-4">{drive.title}</h3>
                <p className="text-gray-600 leading-relaxed">{drive.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners Section with Animated Icons */}
      <div id="partners" className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-serif mb-16 text-center">Our Partners</h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-white text-2xl">{partner.type[0]}</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">{partner.type}</h3>
                  <p className="text-gray-600 leading-relaxed">{partner.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Counter Animation */}
      <div id="stats" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatCounter key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>

      {/* Join Us Section with Hover Effects */}
      <div id="join" className="bg-black text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-serif md:w-1/2"
            >
              Join us in transforming rural entrepreneurship
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <p className="text-xl mb-8 leading-relaxed">
                Be part of our mission to create an inclusive and dynamic entrepreneurial landscape
                across the Global South. Together, we can bridge divides and foster sustainable
                innovation.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-200 transition group"
              >
                Join Our Network
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section with Subtle Animation */}
      <div id="newsletter" className="py-24 px-4 text-center max-w-7xl mx-auto">
        <FadeInView>
          <h3 className="text-2xl font-serif mb-6">Stay Connected</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Get the latest updates on rural innovation and entrepreneurship initiatives.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Subscribe to Newsletter
          </motion.button>
        </FadeInView>
      </div>
    </div>
  );
};

export default AboutUs;