import React from "react";
import { ChevronRight } from "lucide-react";

// Define Card and CardContent components
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

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
    <div id="aboutus" className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <div id="hero" className="py-16 px-4 text-center">
        <h1 className="text-6xl font-serif">ABOUT US</h1>
        <h2 className="text-4xl font-serif mt-4">Together we can empower rural innovation</h2>
        <p className="text-xl mt-8 leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Vision IIE is dedicated to fostering an inclusive and dynamic entrepreneurial landscape.
          We focus on empowering startups in Rural India and the Global South, supporting
          government policies like the Look East Policy, and connecting entrepreneurs to
          opportunities for global growth.
        </p>
      </div>

      {/* Mission Section */}
      <div id="mission" className="bg-black py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-serif">Our Mission</h2>
        <p className="text-xl mt-4 leading-relaxed max-w-3xl mx-auto">
          Vision IIE is a transformative platform dedicated to building a robust startup and
          incubation ecosystem in rural India and the Global South. By aligning with India's Look
          East Policy and the principles of the Global South, we foster innovation, entrepreneurship,
          and sustainable development.
        </p>
      </div>

      {/* What Drives Us Section */}
      <div id="drives" className="py-16 px-4">
        <h2 className="text-3xl font-serif mb-12 text-center">What Drives Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drives.map((drive, index) => (
            <Card key={index} className="p-6">
              <CardContent>
                <h3 className="text-xl font-bold mb-4">{drive.title}</h3>
                <p className="text-gray-600">{drive.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div id="partners" className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-serif mb-12 text-center">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">{partner.type[0]}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{partner.type}</h3>
                <p className="text-gray-600">{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats" className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-6xl font-serif mb-2">{stat.number}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div id="join" className="bg-black text-white py-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h3 className="text-4xl font-serif md:w-1/2">
            Join us in transforming rural entrepreneurship
          </h3>
          <div className="md:w-1/2">
            <p className="text-lg mb-8">
              Be part of our mission to create an inclusive and dynamic entrepreneurial landscape
              across the Global South. Together, we can bridge divides and foster sustainable
              innovation.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
              Join Our Network
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Newsletter */}
      <div id="newsletter" className="py-16 px-4 text-center">
        <h3 className="text-xl font-serif mb-4">Stay Connected</h3>
        <p className="text-gray-600 mb-4">
          Get the latest updates on rural innovation and entrepreneurship initiatives.
        </p>
        <button className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
