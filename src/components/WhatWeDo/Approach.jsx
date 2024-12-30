import React from 'react';
import { Building, Globe, LibraryBig, Sprout, HeartHandshake, GraduationCap, Zap } from 'lucide-react';

const InitiativeCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all">
    <Icon className="w-8 h-8 text-gray-800 mb-4" />
    <h3 className="font-serif text-xl mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const PillarSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="font-serif text-2xl mb-4">{title}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          <p className="text-gray-700">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const Approach = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl mb-6">What We Do</h2>
          <p className="text-xl text-gray-700">
            Our comprehensive approach combines local innovation with global collaboration
            to create sustainable impact across rural India and the Global South.
          </p>
        </div>

        {/* Key Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <InitiativeCard
            icon={Building}
            title="Rural Innovation Hubs"
            description="Creating incubation platforms in Tier II, Tier III cities, and rural regions to foster local entrepreneurship and innovation."
          />
          <InitiativeCard
            icon={Globe}
            title="Global South Collaborations"
            description="Facilitating cross-border partnerships for technology transfer and market expansion, connecting rural India with global opportunities."
          />
          <InitiativeCard
            icon={LibraryBig}
            title="Policy Advocacy"
            description="Aligning initiatives with India's Look East Policy and influencing policies to create a conducive environment for startups and incubation centers."
          />
        </div>

        {/* Three Pillars */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="font-serif text-2xl mb-8">Our Approach Pillars</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Startup Support */}
            <div>
              <PillarSection
                title="Startup Support for Rural India"
                items={[
                  "Providing comprehensive incubation support and funding opportunities",
                  "Offering dedicated mentorship programs",
                  "Driving innovation in agriculture, healthcare, education, and energy sectors",
                  "Building sustainable entrepreneurial ecosystems"
                ]}
              />
              
              {/* Sector Icons */}
              <div className="flex gap-6 mt-6">
                <Sprout className="w-6 h-6 text-gray-600" />
                <HeartHandshake className="w-6 h-6 text-gray-600" />
                <GraduationCap className="w-6 h-6 text-gray-600" />
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
            </div>

            {/* Global South Collaboration */}
            <div>
              <PillarSection
                title="Global South Collaboration"
                items={[
                  "Facilitating partnerships between Indian startups and Global South counterparts",
                  "Encouraging knowledge sharing and joint ventures",
                  "Creating platforms for cross-border innovation",
                  "Building sustainable international networks"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;