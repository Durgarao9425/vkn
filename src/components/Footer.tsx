import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    "Accounting Services",
    "Tax Planning & Filing",
    "GST Services",
    "Audit & Assurance",
    "Company Formation",
    "Payroll Management"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">VKN & Associates</h3>
                <p className="text-gray-400 text-sm">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted financial partners in Hyderabad, providing comprehensive 
              accounting, tax, and business advisory services with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">Sanathnagar</p>
                  <p className="text-gray-300 text-sm">Hyderabad, Telangana</p>
                  <p className="text-gray-300 text-sm">India - 500018</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">+91-9090909090</p>
                  <p className="text-gray-300 text-sm">+91-6303359425</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">info@vknassociates.com</p>
                  <p className="text-gray-300 text-sm">contact@vknassociates.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 VKN & Associates. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Designed with ❤️ for businesses in Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;