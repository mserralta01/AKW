import React from 'react';
import { CheckCircle, Shield, Wrench, Trophy, Gauge, Heart } from 'lucide-react';

const Partnership = () => {
  const benefits = [
    {
      title: 'Sodi Excellence',
      icon: Shield,
      points: [
        'Pioneer in European racing championships',
        'Exceeds all safety standards',
        'Meticulous attention to construction detail',
        "World's largest leisure karting manufacturer"
      ]
    },
    {
      title: 'Rotax Power',
      icon: Gauge,
      points: [
        'Exceptional durability',
        'Easy maintenance',
        'Cost-effective operation',
        'Reliable performance'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#1e3d59]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Official SODIKART Partner
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the perfect combination of Sodi chassis excellence and Rotax engine reliability
            in our professional racing program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://www.sodikart.com/content/images/sodikart-blanc.png"
              alt="SODIKART Racing Kart"
              className="rounded-lg mb-8"
            />
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                As an authorized SODIKART distributor, we provide our racers with world-class equipment
                that dominates European championships. Our karts combine Sodi's renowned chassis design
                with powerful Rotax engines, delivering the perfect balance of performance, safety, and
                reliability.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {benefits.map((section, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <section.icon className="h-6 w-6 text-[#ff1e1e] mr-3" />
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.points.map((point, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ff1e1e] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Trophy,
              title: 'Championship Heritage',
              description: 'Built on decades of European racing excellence'
            },
            {
              icon: Wrench,
              title: 'Professional Maintenance',
              description: 'Factory-certified service and genuine parts'
            },
            {
              icon: Heart,
              title: 'Proven Reliability',
              description: 'Trusted by racing academies worldwide'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 text-center">
              <feature.icon className="h-8 w-8 text-[#ff1e1e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;