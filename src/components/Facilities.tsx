import React from 'react';
import { Wrench, MapPin, Timer, Shield, Trophy, Users } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: 'Professional Garage',
      description:
        'State-of-the-art maintenance facility equipped with professional tools and SODIKART parts.',
      image: 'https://images.unsplash.com/photo-1630825478961-3017ac789912',
      features: [
        'Professional Tools',
        'Expert Mechanics',
        'Regular Maintenance',
        'Safety Checks',
      ],
    },
    {
      title: 'Training Simulators',
      description:
        'Advanced racing simulators for skill development and track familiarization.',
      image: 'https://onovem.com/sim.webp',
      features: [
        'Real Track Data',
        'Performance Analysis',
        'Virtual Training',
        'Race Scenarios',
      ],
    },
    {
      title: 'Piquet Race Park',
      description:
        'Our primary racing facility featuring professional-grade karting tracks.',
      image: 'https://onovem.com/piquet.png',
      features: [
        'Professional Track',
        'Safety Barriers',
        'Timing System',
        'Pit Area',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Train with the best equipment in a professional environment designed
            for champion development.
          </p>
        </div>

        <div className="space-y-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {facility.title}
                </h3>
                <p className="text-lg text-gray-600">{facility.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {facility.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <Shield className="h-5 w-5 text-[#ff1e1e]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#1e3d59] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Visit Our Facilities</h3>
          <p className="text-lg mb-6">
            Schedule a tour to experience our world-class facilities firsthand.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#ff1e1e] text-white px-8 py-3 rounded-md hover:bg-[#e01818] transition-colors"
          >
            Book a Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
