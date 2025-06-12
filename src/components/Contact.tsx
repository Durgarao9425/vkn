import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { sendEmail } from '../utils/emailService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      // Format phone number to remove any spaces or special characters
      const formattedData = {
        ...formData,
        phone: formData.phone.replace(/\D/g, ''),
        subject: formData.subject || 'New Contact Form Submission'
      };

      console.log('Submitting form data:', formattedData);

      // Send email
      const emailResult = await sendEmail(formattedData);
      
      if (emailResult.success) {
        toast.success('Message sent successfully! We will contact you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service: ''
        });
        setErrors({});
      } else {
        toast.error(emailResult.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      details: ["+91-9090909090", "+91-6303359425"],
      action: "Call Now"
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email",
      details: ["veeradurgarao840@gmail.com", "vknassociative@gmail.com"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Office Address",
      details: ["Sanathnagar", "Hyderabad, Telangana", "India - 500018"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 5:00 PM", "Sun: Closed"],
      action: "Schedule Visit"
    }
  ];

  const services = [
    "Accounting Services",
    "Tax Planning & Filing",
    "GST Services",
    "Audit & Assurance",
    "Company Formation",
    "Payroll Management",
    "Compliance Services",
    "Financial Advisory",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take control of your finances? Contact our expert team for a consultation 
            and discover how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors mt-2">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Ex: Durgarao Goriparthi"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="durgarao@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="+91-9090909090"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer aria-label="Notifications" />
    </section>
  );
};

export default Contact;