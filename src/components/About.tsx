import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import logo from "../Assests/Images/logo.png"
const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Precision",
      description: "We deliver accurate and meticulous financial services with attention to every detail."
    },
    {
      icon: <Eye className="text-green-600" size={24} />,
      title: "Transparency",
      description: "Clear communication and honest advice form the foundation of our client relationships."
    },
    {
      icon: <Heart className="text-purple-600" size={24} />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings."
    }
  ];

  const achievements = [
    "Certified Chartered Accountants",
    "2+ Years of Industry Experience",
    "Expertise in Latest Tax Regulations",
    "Digital-First Approach",
    "Personalized Client Service"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About VKN & Associates
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established as a leading Chartered Accountant firm in Sanathnagar, Hyderabad, 
                VKN & Associates has been serving businesses and individuals with comprehensive 
                financial solutions for over a decade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of qualified professionals combines deep expertise with modern technology 
                to deliver efficient, reliable, and cost-effective accounting, auditing, and tax services. 
                We pride ourselves on building long-term relationships with our clients by understanding 
                their unique needs and providing tailored solutions.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Us?</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Photo Placeholder */}
        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-6">
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4">
    
    {/* Logo & Title Row */}
    <div className="flex items-center space-x-4">
      <img
        src={logo}
        alt="VKN Logo"
        className="w-12 h-12 rounded-lg object-cover border border-gray-200"
      />
      <div>
        <h4 className="text-lg font-bold text-gray-900">VKN & Associates</h4>
        <p className="text-xs text-gray-500">Chartered Accountants</p>
      </div>
    </div>

    {/* Info Section */}
    <div className="text-center">
      <h4 className="text-md font-semibold text-gray-800 mb-1">Professional Team</h4>
      <p className="text-sm text-gray-600">
        Our experienced team of Chartered Accountants and financial experts.
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;