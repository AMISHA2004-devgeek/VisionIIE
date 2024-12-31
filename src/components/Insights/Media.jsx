import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Newspaper, Video, BookText } from 'lucide-react';

// Custom Card Component
const CustomCard = ({ children, className = '', hover = true, id }) => (
  <div
    id={id}
    className={`
      bg-white rounded-lg shadow-lg p-6
      ${hover ? 'transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
      ${className}
    `}
  >
    {children}
  </div>
);

// Custom Video Card Component
const VideoCard = ({ title, thumbnail, isActive, id }) => (
  <div
    id={id}
    className={`
      relative overflow-hidden rounded-lg
      ${isActive ? 'scale-100' : 'scale-95 opacity-70'}
      transition-all duration-300
    `}
  >
    <img 
      src={thumbnail}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3">
      <h3 className="text-white text-sm truncate">{title}</h3>
    </div>
  </div>
);

// Custom Press Release Card Component
const PressReleaseCard = ({ title, date, isSelected, onClick, id }) => (
  <div
    id={id}
    onClick={onClick}
    className={`
      cursor-pointer transform transition-all duration-300
      ${isSelected ? 'scale-150 z-50' : 'hover:scale-105'}
    `}
    style={{ transformOrigin: 'top center' }}
  >
    <div className="bg-white p-4 rounded shadow-lg rotate-1">
      <div className="w-4 h-4 bg-red-500 rounded-full mx-auto -mt-6 mb-2" />
      <h3 className="text-gray-900 font-semibold text-sm">{title}</h3>
      <p className="text-gray-600 text-xs">{date}</p>
    </div>
  </div>
);

// Main Component
const Media = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const videos = [
    { id: 1, title: "Product Launch 2024", thumbnail: "/api/placeholder/640/360" },
    { id: 2, title: "Customer Success Story", thumbnail: "/api/placeholder/640/360" },
    { id: 3, title: "Tech Innovation Summit", thumbnail: "/api/placeholder/640/360" },
    { id: 4, title: "Behind the Scenes", thumbnail: "/api/placeholder/640/360" },
    { id: 5, title: "Team Spotlight", thumbnail: "/api/placeholder/640/360" },
    { id: 6, title: "Vision IIE Overview", thumbnail: "/api/placeholder/640/360" }
  ];

  const pressReleases = [
    { id: 1, title: "Q4 Financial Results", date: "Dec 15, 2024" },
    { id: 2, title: "New Partnership Announcement", date: "Dec 10, 2024" },
    { id: 3, title: "Product Innovation Award", date: "Dec 5, 2024" },
    { id: 4, title: "Global Expansion News", date: "Nov 30, 2024" }
  ];

  const leadershipArticles = [
    { id: 1, title: "Future of AI", author: "Dr. Sarah Chen" },
    { id: 2, title: "Innovation Trends 2025", author: "Michael Roberts" },
    { id: 3, title: "Digital Transformation", author: "Emma Watson" }
  ];

  const reelMovies = [
    "Vision 2024", "Tech Insights", "AI Future", "Innovation Hub", 
    "Digital Era", "Next Gen", "Future Tech", "Smart Solutions"
  ];

  const nextVideo = () => setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div id="media" className="min-h-screen bg-gray-100">
      {/* Featured Videos Section */}
      <section id="featured-videos" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Videos</h2>
          
          <div className="relative mb-8">
            <CustomCard hover={false} className="p-0" id="video-card">
              <div className="relative">
                <img 
                  src={videos[currentVideoIndex].thumbnail}
                  alt={videos[currentVideoIndex].title}
                  className="w-full object-cover h-[400px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-between px-4">
                  <button 
                    onClick={prevVideo}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transform transition hover:scale-110"
                  >
                    <ChevronLeft className="w-8 h-8 text-gray-900" />
                  </button>
                  <button 
                    onClick={nextVideo}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transform transition hover:scale-110"
                  >
                    <ChevronRight className="w-8 h-8 text-gray-900" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <h3 className="text-white text-xl">{videos[currentVideoIndex].title}</h3>
                </div>
              </div>
            </CustomCard>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.map((video, index) => (
              <div key={video.id} onClick={() => setCurrentVideoIndex(index)}>
                <VideoCard
                  id={`video-card-${video.id}`}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  isActive={currentVideoIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section id="press-releases" className="bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Press Releases</h2>
          <CustomCard className="bg-gray-800" id="press-release-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {pressReleases.map((press) => (
                <PressReleaseCard
                  key={press.id}
                  id={`press-release-${press.id}`}
                  title={press.title}
                  date={press.date}
                  isSelected={selectedPaper === press.id}
                  onClick={() => setSelectedPaper(selectedPaper === press.id ? null : press.id)}
                />
              ))}
            </div>
          </CustomCard>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Thought Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipArticles.map((article) => (
              <CustomCard
                key={article.id}
                id={`leadership-article-${article.id}`}
                className={`
                  transition-all duration-500
                  ${isHovered === article.id ? 'bg-gray-900 text-white' : 'bg-gray-100'}
                `}
                hover={false}
              >
                <div
                  onMouseEnter={() => setIsHovered(article.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="opacity-75">{article.author}</p>
                  <div className={`h-1 bg-gray-900 mt-4 transition-all duration-500
                    ${isHovered === article.id ? 'w-full bg-white' : 'w-1/4'}`} />
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Reel Section */}
      <section id="movie-reels" className="bg-black py-8 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-flex gap-8">
            {[...reelMovies, ...reelMovies].map((movie, index) => (
              <CustomCard
                key={index}
                id={`movie-reel-${index}`}
                className="w-48 bg-gray-800 text-white"
                hover={false}
              >
                <div className="h-24 flex items-center justify-center">
                  <span className="text-sm font-medium">{movie}</span>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Media;
