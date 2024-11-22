import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    racerAge: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Racing Journey</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to begin? Contact us today to learn more about our programs and how we can help your child succeed in racing.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#ff1e1e] mr-4" />
                <span className="text-gray-700">+1 (954) 242-6899</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#ff1e1e] mr-4" />
                <span className="text-gray-700">contact@akwracing.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#ff1e1e] mr-4" />
                <span className="text-gray-700">Wellington, FL</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
                  required
                />
              </div>
              <div>
                <label htmlFor="racerAge" className="block text-sm font-medium text-gray-700 mb-1">
                  Racer's Age
                </label>
                <input
                  type="number"
                  id="racerAge"
                  min="6"
                  max="18"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff1e1e] text-white py-3 rounded-md hover:bg-[#e01818] transition-colors font-medium wiggle"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;