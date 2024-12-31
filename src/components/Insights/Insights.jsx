import React, { useState, useEffect } from 'react';
import { ArrowUpRight, BookOpen, TrendingUp, BarChart3, Globe, Newspaper } from 'lucide-react';

const CardComponent = ({ category, title, description, details }) => (
  <div className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-4 border rounded-lg">
    <div className="flex justify-between items-start mb-2">
      {category && (
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-2" />
          <span className="text-sm text-gray-500">{category}</span>
        </div>
      )}
      <ArrowUpRight className="w-4 h-4 text-gray-400" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    {details && <div className="text-sm text-gray-500">{details}</div>}
  </div>
);

const Insights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlightArticles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const spotlightArticles = [
    { title: "The Future of Indian Startups: 2025 Outlook", image: "/api/placeholder/800/400", category: "Trends" },
    { title: "Sustainable Innovation in Emerging Markets", image: "/api/placeholder/800/400", category: "Sustainability" },
    { title: "Digital Transformation Success Stories", image: "/api/placeholder/800/400", category: "Technology" }
  ];

  const featuredArticles = [
    { title: "Reimagining Rural India Through Innovation", description: "Explore how technological innovations are transforming rural India's landscape, from agriculture to digital services.", category: "Innovation", details: "8 min read" },
    { title: "The Look East Policy: A Catalyst for Global Startup Ecosystems", description: "An in-depth analysis of how India's Look East Policy is fostering international startup collaboration and growth.", category: "Policy", details: "12 min read" },
    { title: "Building Bridges: Collaborations Between Indian and African Startups", description: "Discover the growing partnerships and opportunities emerging between Indian and African startup ecosystems.", category: "Global", details: "10 min read" }
  ];

  return (
    <div id="insights" className={`max-w-6xl mx-auto px-4 py-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Blog & Reports</h1>
        <p className="text-lg text-gray-600">Insights and analysis on the evolving startup ecosystem</p>
      </div>

      {/* Spotlight Slider */}
      <div className="mb-16 relative h-[400px] overflow-hidden rounded-xl">
        {spotlightArticles.map((article, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 transform ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="text-sm mb-2">{article.category}</div>
              <h2 className="text-2xl font-bold">{article.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Articles */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <TrendingUp className="mr-2" />
          <h2 className="text-2xl font-semibold">Featured Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <CardComponent 
              key={index}
              category={article.category}
              title={article.title}
              description={article.description}
              details={article.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
