'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const videos = [
  {
    title: 'Introduction to Quantum Physics',
    thumbnail: '/videos-icon.png', // Placeholder
    url: '#'
  },
  {
    title: 'Building Modern Web Apps',
    thumbnail: '/videos-icon.png',
    url: '#'
  },
  {
    title: 'Cultural Insights from Around the World',
    thumbnail: '/videos-icon.png',
    url: '#'
  },
  {
    title: 'Content Creation Tips',
    thumbnail: '/videos-icon.png',
    url: '#'
  },
  {
    title: 'Math Concepts Explained',
    thumbnail: '/videos-icon.png',
    url: '#'
  },
  {
    title: 'Tech Trends 2024',
    thumbnail: '/videos-icon.png',
    url: '#'
  }
];

const Videos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };

      const handleScroll = () => {
        const atStart = container.scrollLeft === 0;
        const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1; // small tolerance
        setShowLeft(!atStart);
        setShowRight(!atEnd);
      };

      container.addEventListener('wheel', handleWheel);
      container.addEventListener('scroll', handleScroll);

      // Initial check
      handleScroll();

      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="videos-section w-full max-w-6xl mx-auto px-4 md:px-8 mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/videos-icon.png"
            alt="Videos Icon"
            width={98}
            height={98}
            className="mr-4"
          />
        </div>
        <h2 className="font-montserrat text-2xl font-bold text-[var(--color-navy)]">my videos</h2>
      </div>
      <div className="relative">
        <div ref={containerRef} className="videos-container overflow-x-auto">
          <div className="flex space-x-12 px-4 pb-4">
            {videos.map((video, index) => (
              <div key={index} className="video-item flex flex-col items-center min-w-[320px] flex-shrink-0">
                <div className="thumbnail-container relative">
                  <div className="muon-container">
                    <div className="muon-particle"></div>
                    <div className="muon-particle"></div>
                    <div className="muon-particle"></div>
                    <div className="muon-particle"></div>
                    <div className="muon-particle"></div>
                  </div>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={320}
                      height={180}
                      className="rounded-lg object-cover"
                    />
                  </a>
                </div>
                <div className="title-container mt-12">
                  <h3 className="font-montserrat text-lg font-semibold text-[var(--color-navy)] text-center">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showLeft && (
          <button
            onClick={() => containerRef.current?.scrollBy({ left: -368, behavior: 'smooth' })}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-navy)] text-white p-3 rounded-full hover:bg-opacity-80 transition z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {showRight && (
          <button
            onClick={() => containerRef.current?.scrollBy({ left: 368, behavior: 'smooth' })}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-navy)] text-white p-3 rounded-full hover:bg-opacity-80 transition z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Videos;
