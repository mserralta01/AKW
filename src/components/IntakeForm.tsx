import React, { useState } from 'react';
import { X } from 'lucide-react';

interface IntakeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntakeForm = ({ isOpen, onClose }: IntakeFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d59] focus:border-[#1e3d59]"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff1e1e] text-white py-3 rounded-md hover:bg-[#e01818] transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IntakeForm;