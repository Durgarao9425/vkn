import React from 'react';
import { Calculator, FileText, TrendingUp, Shield, Building, Users, Clipboard, PieChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calculator className="text-blue-600" size={32} />,
      title: "Accounting Services",
      description: "Complete bookkeeping, financial statements preparation, and accounting software implementation.",
      features: ["Financial Statement Preparation", "Bookkeeping & Reconciliation", "Cash Flow Management", "Accounting Software Setup"]
    },
    {
      icon: <FileText className="text-green-600" size={32} />,
      title: "Tax Planning & Filing",
      description: "Comprehensive tax services including planning, preparation, and filing for individuals and businesses.",
      features: ["Income Tax Returns", "Tax Planning Strategies", "TDS Compliance", "Tax Advisory Services"]
    },
    {
      icon: <Shield className="text-purple-600" size={32} />,
      title: "GST Services",
      description: "Complete GST compliance including registration, filing, and advisory services.",
      features: ["GST Registration", "Monthly/Quarterly Returns", "GST Audit & Compliance", "Input Tax Credit Optimization"]
    },
    {
      icon: <TrendingUp className="text-orange-600" size={32} />,
      title: "Audit & Assurance",
      description: "Professional audit services ensuring compliance and providing valuable business insights.",
      features: ["Statutory Audits", "Internal Audits", "Tax Audits", "Due Diligence"]
    },
    {
      icon: <Building className="text-red-600" size={32} />,
      title: "Company Formation",
      description: "End-to-end company incorporation services including documentation and compliance setup.",
      features: ["Private Limited Company", "LLP Registration", "Partnership Firms", "Sole Proprietorship"]
    },
    {
      icon: <Users className="text-teal-600" size={32} />,
      title: "Payroll Management",
      description: "Complete payroll processing, compliance, and employee benefit administration.",
      features: ["Salary Processing", "PF & ESI Compliance", "TDS on Salary", "Payroll Software Implementation"]
    },
    {
      icon: <Clipboard className="text-indigo-600" size={32} />,
      title: "Compliance Services",
      description: "Ensuring your business stays compliant with all regulatory requirements.",
      features: ["ROC Compliance", "FEMA Compliance", "Labour Law Compliance", "Regulatory Filings"]
    },
    {
      icon: <PieChart className="text-pink-600" size={32} />,
      title: "Financial Advisory",
      description: "Strategic financial advice to help your business grow and optimize performance.",
      features: ["Business Planning", "Financial Analysis", "Investment Advisory", "Risk Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of accounting, tax, and business advisory services 
            to help individuals and businesses achieve their financial goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Let us create a tailored 
            financial solution that meets your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;