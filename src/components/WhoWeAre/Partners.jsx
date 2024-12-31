import React from 'react';

const Partners = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider mb-4">Partnerships</p>
            <h1 className="text-5xl font-serif mb-8">Connecting visionaries, driving change</h1>
            <p className="text-lg max-w-2xl">
              Real change requires true collaboration. We work with leaders in politics,
              technology, business, philanthropy, research and academia to create lasting change
              around the world.
            </p>
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
      <section id="how-to-get-involved" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">How to get involved</h2>
          <p className="text-lg mb-12 max-w-2xl">
            There are two ways to partner with us. Join our network of changemakers or work with us to roll out and co-create solutions that deliver impact at scale.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inspire Change */}
            <div>
              <div className="mb-6 h-64 bg-gray-100"></div>
              <h3 className="text-2xl font-serif mb-4">Inspire change</h3>
              <p className="mb-6">Join our network of changemakers to share insights and big ideas, and help to create scalable solutions.</p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                Join our network →
              </button>
            </div>

            {/* Deliver Change */}
            <div>
              <div className="mb-6 h-64 bg-gray-100"></div>
              <h3 className="text-2xl font-serif mb-4">Deliver change</h3>
              <p className="mb-6">Roll out and co-create solutions with our partners and government clients to unlock the power of technology for all, turning bold ambitions into big impact.</p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                Deliver with us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners List Section */}
      <section id="partners-list" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">We collaborate with:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              'Government agencies: Advocating for rural-focused and regional policies',
              'Academic Institutions: Building entrepreneurial capacity in rural areas',
              'Incubators: Partnering with innovation hubs in the Global South',
              'Academic Institutions',
              'NGO'
            ].map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
