import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import IntakeForm from './IntakeForm';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1652703747774-558deb4e1f9b"
        >
          <source
            src="https://www.sodikart.com/content/files/home/sodikart-home-v2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your Racing Journey Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join AKW Racing Academy and give your child the opportunity to learn, grow, and excel in the exciting world of go-kart racing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-[#ff1e1e] text-white rounded-md hover:bg-[#e01818] transition-colors text-lg font-medium"
              >
                Start Racing <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors text-lg font-medium"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <IntakeForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Hero;