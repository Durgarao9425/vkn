import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import VKNOffice1 from '../Assests/Images/VKNOffice1.jpg'

import VKNOffice2 from '../Assests/Images/VKNOffice2.webp'


const Location: React.FC = () => {
  const address = "5th Floor, Vertex Cute, 504, Jai Bharat Nagar, Nagarjuna Homes, Kukatpally, Hyderabad, Telangana 500090";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Address Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Visit Our Office</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {address}
              </p>
              
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Office Hours */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={VKNOffice2}
                  alt="VKN Office Front"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={VKNOffice1}
                  alt="VKN Office Meeting Room"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 