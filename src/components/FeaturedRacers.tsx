import React from 'react';
import { Trophy, Instagram } from 'lucide-react';

const racers = [
  {
    name: 'Kai Johnson',
    image: 'https://onovem.com/Kai1.png',
    achievements: ['Multiple Karting Championships', 'Rising Star Award'],
    instagram: 'kaikarting',
  },
  {
    name: 'Alessio Tosti',
    image: 'https://onovem.com/Alessio.png',
    achievements: ['National Series Champion', 'Track Record Holder'],
    instagram: 'alessiogtosti',
  },
  {
    name: 'Collin Lloyd',
    image: 'Collin.png',
    achievements: ['Junior Championship Winner', 'Most Improved Driver 2023'],
    instagram: 'clloyd27803',
  },
];

const FeaturedRacers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Champions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our racers represent the future of motorsport, trained by the best
            and driven by passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {racers.map((racer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={racer.image}
                  alt={racer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {racer.name}
                </h3>
                <div className="mb-4">
                  {racer.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-600 mb-1"
                    >
                      <Trophy className="h-4 w-4 mr-2 text-[#ff1e1e]" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://instagram.com/${racer.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1e3d59] hover:text-[#ff1e1e] transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRacers;
