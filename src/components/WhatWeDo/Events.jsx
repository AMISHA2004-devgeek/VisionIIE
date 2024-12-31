import React from 'react';
import { Calendar, Users, ArrowRight, Globe } from 'lucide-react';

const EventCard = ({ title, description, icon: Icon }) => (
  <div className="group relative bg-white p-8 border border-gray-100 hover:shadow-lg transition-all" id={`event-${title.replace(/\s+/g, '-').toLowerCase()}`}>
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <Icon className="w-8 h-8 text-gray-700" />
      </div>
      <div>
        <h3 className="font-serif text-xl mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <button className="inline-flex items-center text-sm text-gray-700 hover:text-black">
          Learn more
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
    <section className="pt-20 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12" id="events-header">
          <h2 className="font-serif text-4xl mb-6">Events</h2>
          <p className="text-xl text-gray-700">
            Showcase of key events that drive impact across rural innovation and global collaboration.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="events-grid">
          <EventCard
            icon={Globe}
            title="Global South Startup Summit 2024"
            description="A flagship event highlighting collaboration between Indian and Global South startups. Join us for networking, knowledge sharing, and partnership opportunities."
          />
          <EventCard
            icon={Users}
            title="Rural Incubation Conclave"
            description="Interactive workshops and mentorship programs tailored for rural entrepreneurs, focusing on building sustainable businesses and scaling impact."
          />
        </div>

        {/* Upcoming Events Calendar */}
        <div className="mt-16 text-center" id="calendar-section">
          <button className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
            <Calendar className="w-5 h-5" />
            View All Events
          </button>
        </div>
      </div>

      {/* Optional Bottom Banner */}
      <div className="mt-20 bg-black text-white py-12" id="bottom-banner">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl mb-6">
            Want to stay updated on our upcoming events?
          </p>
          <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
            Subscribe to Our Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
