import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e3d59] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://onovem.com/akwlogo.png"
              alt="AKW Racing"
              className="h-12 mb-4"
            />
            <p className="text-gray-300">
              Developing champions in racing and in life through professional
              go-kart training.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/academy" className="text-gray-300 hover:text-white">
                  Academy
                </a>
              </li>
              <li>
                <a href="/racers" className="text-gray-300 hover:text-white">
                  Our Racers
                </a>
              </li>
              <li>
                <a
                  href="/facilities"
                  className="text-gray-300 hover:text-white"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Training Programs</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/programs/beginner"
                  className="text-gray-300 hover:text-white"
                >
                  Beginner Course
                </a>
              </li>
              <li>
                <a
                  href="/programs/advanced"
                  className="text-gray-300 hover:text-white"
                >
                  Advanced Training
                </a>
              </li>
              <li>
                <a
                  href="/programs/competition"
                  className="text-gray-300 hover:text-white"
                >
                  Competition Prep
                </a>
              </li>
              <li>
                <a
                  href="/programs/private"
                  className="text-gray-300 hover:text-white"
                >
                  Private Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300">
              Wellington, FL
              <br />
              contact@akwracing.com
              <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} AKW Racing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
