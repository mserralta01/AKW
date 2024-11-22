import React from 'react';
import { Gauge, Users, Wrench, Dumbbell, ArrowRight, Shield, Trophy, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Professional Sodi Chassis',
    description: 'Train on championship-winning Sodi karts, known for superior handling and safety standards.'
  },
  {
    icon: Gauge,
    title: 'Rotax Engine Excellence',
    description: 'Experience reliable, high-performance Rotax engines that are cost-effective and easy to maintain.'
  },
  {
    icon: Wrench,
    title: 'Expert Maintenance',
    description: 'Factory-certified mechanics ensure your equipment is always race-ready with genuine parts.'
  },
  {
    icon: Trophy,
    title: 'Championship Training',
    description: 'Learn advanced racing techniques on equipment trusted by champions worldwide.'
  }
];

const Academy = () => {
  return (
    <section className="py-20 bg-[#1e3d59] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            AKW Racing Academy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Train like champions on professional Sodi-Rotax karts, combining European engineering excellence with world-class instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 p-3 inline-block rounded-lg bg-[#ff1e1e]/10 group-hover:bg-[#ff1e1e]/20 transition-colors">
                <feature.icon className="h-12 w-12 text-[#ff1e1e]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Equipment Advantage</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-[#ff1e1e] mr-3" />
                  <span>European-engineered Sodi chassis for optimal performance</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-5 w-5 text-[#ff1e1e] mr-3" />
                  <span>Reliable Rotax engines with proven track record</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-[#ff1e1e] mr-3" />
                  <span>Regular maintenance by certified technicians</span>
                </li>
                <li className="flex items-center">
                  <Trophy className="h-5 w-5 text-[#ff1e1e] mr-3" />
                  <span>Championship-winning equipment configuration</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://www.sodikart.com/content/images/kart-sodi.jpg"
                alt="Sodi Racing Kart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center bg-[#ff1e1e] text-white px-8 py-3 rounded-md hover:bg-[#e01818] transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule a Tour <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Academy;