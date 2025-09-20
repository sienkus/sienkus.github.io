'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image'; // 1. Import the Image component

type JourneyStage = {
  title: string;
  description: string;
  year: string;
};

const journeyStages: JourneyStage[] = [
    {
        title: 'Stage 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
        year: '2016'
    },
    {
        title: 'Stage 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
        year: '2017'
    },
    {
        title: 'Stage 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
        year: '2018'
    },
    {
        title: 'Stage 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
        year: '2019'
    },
    {
        title: 'Stage 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
        year: '2020'
    },
    {
        title: 'Stage 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
        year: '2021'
    },
];

const Journey = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleWheel = (e: WheelEvent) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    container.scrollLeft += e.deltaY;
                }
            };
            container.addEventListener('wheel', handleWheel);
            return () => {
                container.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    return (
        <div className="journey-container-wrapper w-full max-w-6xl mx-auto px-4 md:px-8 mt-20">
            <div className="text-center mb-12">
              {/* 2. Add a flex container for the image and title */}
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/journey-icon.png" // 3. Add your image here
                  alt="Journey Icon"
                  width={98} // Adjust size as needed
                  height={98} // Adjust size as needed
                  className="mr-4" // Adds space between image and title
                />
              </div>
              <h2 className="font-montserrat text-2xl font-bold text-[var(--color-navy)] mb-25">my journey</h2>
              {/* <p className="text-lg text-gray-600">A timeline of my personal and professional growth.</p> */}
            </div>
            <div ref={containerRef} className="journey-container overflow-x-auto">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-16 text-[var(--color-navy)]">
                    <div className="flex flex-col md:flex-row justify-between min-w-max md:min-w-max relative pt-12 md:pt-0 md:items-center md:h-80" style={{ width: `${Math.max(journeyStages.length * 300, 1200)}px` }}>
                        {journeyStages.map((stage, index) => (
                            <div key={index} className="journey-stage w-full md:w-64 flex flex-col items-center md:justify-center relative mb-8 md:mb-0">
                                {/* Top content - positioned absolutely on desktop */}
                                <div className="text-center md:absolute md:bottom-full md:mb-4 md:z-10">
                                    <h3 className="font-montserrat font-bold text-lg">{stage.title}</h3>
                                    <p className="font-sans-serrif text-sm">{stage.description}</p>
                                </div>
                                {/* Timeline dot - this is now the central anchor for alignment */}
                                <div className="journey-dot-container relative my-4 md:my-0">
                                    <div className="journey-dot bg-[var(--color-navy)] w-5 h-5 rounded-full border-2 border-white journey-pulse">
                                    </div>
                                </div>
                                {/* Bottom content - positioned absolutely on desktop */}
                                <div className="text-center md:absolute md:top-full md:mt-4 md:z-10">
                                    <p className="font-montserrat text-lg font-bold">{stage.year}</p>
                                </div>
                            </div>
                        ))}
                        {/* Timeline line */}
                        <div className="journey-line absolute bg-[var(--color-navy)]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;
