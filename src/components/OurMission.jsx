import React from 'react';
import { ArrowUpRight, Building2, Globe2, Handshake } from 'lucide-react';

const ImpactCard = ({ icon: Icon, count, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className='flex justify-center items-center gap-1 mb-2 w-fit'>
    <Icon className="w-8 h-8 text-gray-800" />
    <div className="font-serif text-3xl font-medium">{count}</div>
    </div>
    <p className="text-gray-600">{text}</p>
  </div>
);

const OurMission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To transform rural economies by creating thriving startup ecosystems 
            that promote innovation, empower local entrepreneurs, and align with 
            India's vision of global partnerships.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ImpactCard 
            icon={Building2}
            count="3+"
            text="Rural startups supported and empowered through our ecosystem"
          />
          <ImpactCard 
            icon={Globe2}
            count="2+"
            text="Countries in the Global South where we've launched initiatives"
          />
          <ImpactCard 
            icon={Handshake}
            count="7+"
            text="Partnerships driven by the Look East Policy"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group inline-flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
            Learn More About Our Impact
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMission;