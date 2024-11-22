import React from 'react';
import { Target, Users, Brain, Trophy, Shield, Gauge, Heart, Sparkles, Wrench } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Cognitive Development',
    description: 'Enhance focus, spatial awareness, and strategic thinking through high-speed decision making.'
  },
  {
    icon: Shield,
    title: 'Professional Equipment',
    description: 'Train with Sodi chassis and Rotax engines - the gold standard in karting excellence.'
  },
  {
    icon: Users,
    title: 'Social Growth',
    description: 'Build confidence, leadership skills, and lasting friendships within our racing community.'
  },
  {
    icon: Heart,
    title: 'Physical Fitness',
    description: 'Improve strength, reflexes, and coordination through specialized racing training.'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Learn to set, track, and achieve progressive racing objectives and personal milestones.'
  },
  {
    icon: Sparkles,
    title: 'Future Opportunities',
    description: 'Open doors to professional racing careers, from NASCAR to Formula 1.'
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforming Young Lives Through Racing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go-karting cultivates essential life skills that extend far beyond the track, shaping tomorrow's leaders through the excitement of motorsport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 p-3 inline-block rounded-lg bg-[#1e3d59]/5 group-hover:bg-[#1e3d59]/10 transition-colors">
                <benefit.icon className="h-8 w-8 text-[#ff1e1e]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3d59] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/academy"
            className="inline-flex items-center px-8 py-3 bg-[#1e3d59] text-white rounded-md hover:bg-[#162f45] transition-colors text-lg font-medium"
          >
            Discover Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;