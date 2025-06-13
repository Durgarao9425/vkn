import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Clock, ChevronLeft, ChevronRight, AlertCircle, FileText, Newspaper, Calculator, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState<{ title: string; content: string } | null>(null);
  const [gstNews, setGstNews] = useState<any[]>([]);
  const [taxUpdates, setTaxUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GST news and updates
    const fetchNews = async () => {
      try {
        // Using NewsAPI for GST news (you'll need to replace with your API key)
        const response = await fetch('https://newsapi.org/v2/everything?q=GST+India&apiKey=YOUR_API_KEY');
        const data = await response.json();
        setGstNews(data.articles.slice(0, 3));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Fetch tax updates from government website
    const fetchTaxUpdates = async () => {
      try {
        // Using CBDT API (you'll need to replace with actual API endpoint)
        const response = await fetch('https://api.cbdt.gov.in/updates');
        const data = await response.json();
        setTaxUpdates(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching tax updates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    fetchTaxUpdates();
  }, []);

  const getCurrentQuarter = () => {
    const now = new Date();
    const quarter = Math.floor(now.getMonth() / 3) + 1;
    return `Q${quarter}`;
  };

  const getNextGSTDueDate = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // GSTR-1 due date is 11th of next month
    const gstr1Due = new Date(currentYear, currentMonth + 1, 11);
    // GSTR-3B due date is 20th of next month
    const gstr3bDue = new Date(currentYear, currentMonth + 1, 20);
    
    return {
      gstr1: gstr1Due.toLocaleDateString('en-IN'),
      gstr3b: gstr3bDue.toLocaleDateString('en-IN')
    };
  };

  const dashboardItems = [
    {
      title: "GST Returns",
      icon: <FileText className="text-blue-600" size={20} />,
      items: [
        { 
          text: `GSTR-1 Due: ${getNextGSTDueDate().gstr1}`, 
          status: "warning",
          info: "GSTR-1 is a monthly/quarterly return that contains details of all outward supplies of goods and services."
        },
        { 
          text: `GSTR-3B Due: ${getNextGSTDueDate().gstr3b}`, 
          status: "warning",
          info: "GSTR-3B is a monthly self-declaration to be filed by all registered taxpayers."
        },
        { 
          text: `GSTR-9 Due: 31st Dec 2024`, 
          status: "info",
          info: "GSTR-9 is an annual return to be filed by all regular taxpayers."
        }
      ]
    },
    {
      title: "Tax Deadlines",
      icon: <AlertCircle className="text-red-600" size={20} />,
      items: [
        { 
          text: "ITR Filing: 31st July 2024", 
          status: "info",
          info: "Income Tax Return filing deadline for FY 2023-24. Late filing attracts penalties."
        },
        { 
          text: `TDS ${getCurrentQuarter()} Filing: ${new Date(new Date().getFullYear(), new Date().getMonth() + 1, 31).toLocaleDateString('en-IN')}`, 
          status: "warning",
          info: "Quarterly TDS return filing deadline. Ensure all TDS certificates are collected."
        },
        { 
          text: "Tax Audit: 30th Sept 2024", 
          status: "info",
          info: "Tax audit report filing deadline for businesses with turnover exceeding ₹1 crore."
        }
      ]
    },
    {
      title: "Latest Updates",
      icon: <Newspaper className="text-green-600" size={20} />,
      items: loading ? [
        { text: "Loading updates...", status: "info" }
      ] : [
        ...gstNews.map(news => ({
          text: news.title,
          status: "info",
          info: news.description
        })),
        ...taxUpdates.map(update => ({
          text: update.title,
          status: "info",
          info: update.content
        }))
      ]
    },
    {
      title: "Financial Tools",
      icon: <Calculator className="text-purple-600" size={20} />,
      items: [
        { 
          text: "GST Calculator", 
          status: "tool",
          info: "Calculate GST amount, reverse GST, and GST rates for different goods and services."
        },
        { 
          text: "Income Tax Calculator", 
          status: "tool",
          info: "Calculate your income tax liability, deductions, and final tax payable for FY 2023-24."
        },
        { 
          text: "TDS Calculator", 
          status: "tool",
          info: "Calculate TDS on various payments like salary, rent, professional fees, etc."
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dashboardItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dashboardItems.length) % dashboardItems.length);
  };

  return (
    <section id="home" className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                  Financial Partners
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                VKN & Associates provides comprehensive accounting, auditing, and tax services in Hyderabad. 
                We help businesses and individuals navigate complex financial regulations with expertise and integrity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <Users className="text-green-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {dashboardItems[currentSlide].icon}
                    <h3 className="text-lg font-semibold text-gray-800">{dashboardItems[currentSlide].title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={prevSlide} className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button onClick={nextSlide} className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {dashboardItems[currentSlide].items.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                      onClick={() => item.info && setSelectedInfo({ title: item.text, content: item.info })}
                    >
                      <span className="text-sm text-gray-700">{item.text}</span>
                      {item.status === 'warning' && (
                        <span className="text-xs font-semibold text-yellow-600">⚠️ Due Soon</span>
                      )}
                      {item.status === 'info' && (
                        <span className="text-xs font-semibold text-blue-600">ℹ️ Info</span>
                      )}
                      {item.status === 'tool' && (
                        <span className="text-xs font-semibold text-purple-600">🛠️ Tool</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-1 mt-4">
                  {dashboardItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {selectedInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{selectedInfo.title}</h3>
              <button 
                onClick={() => setSelectedInfo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600">{selectedInfo.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;