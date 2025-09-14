'use client';

import { useRef, useEffect } from 'react';

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
  {
    title: 'Stage 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
    year: '2022'
  },
  {
    title: 'Stage 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.',
    year: '2023'
  }
];

export default function Journey() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle horizontal scrolling with mouse wheel
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="my-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">my journey</h2>
        <div className="flex justify-center">
          <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 25C20 25 30 1 50 1C70 1 80 49 100 49C120 49 130 1 150 1C170 1 180 25 199 25" stroke="#333" strokeWidth="1" fill="none" />
            <path d="M199 25L190 20M199 25L190 30" stroke="#333" strokeWidth="1" fill="none" />
            <circle cx="1" cy="25" r="5" fill="#333" />
          </svg>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="journey-scroll-container overflow-x-auto md:overflow-x-auto overflow-y-auto pb-8 hide-scrollbar"
      >
        <div className="journey-timeline relative min-w-max md:min-w-max px-4 md:px-16">
          {/* Timeline stages */}
          <div className="flex flex-col md:flex-row justify-between min-w-max md:min-w-max relative pt-8 md:pt-0" style={{ width: `${Math.max(journeyStages.length * 300, 1200)}px` }}>
            {journeyStages.map((stage, index) => (
              <div key={index} className="journey-stage w-full md:w-64 flex flex-col items-center relative mb-8 md:mb-0">
                {/* Top content - displayed above the timeline */}
                <div className="mb-4 md:mb-8 text-center">
                  <h3 className="font-bold text-lg">{stage.title}</h3>
                  <p className="text-sm">{stage.description}</p>
                </div>

                {/* Timeline dot - positioned exactly on the line */}
                <div className="journey-dot-container relative">
                  <div className="journey-dot bg-[var(--color-bittersweet)] w-4 h-4 rounded-full relative z-20 border-2 border-[var(--color-background)] journey-pulse">
                  </div>
                </div>

                {/* Bottom content - displayed below the timeline */}
                <div className="text-center mt-4 md:mt-8">
                  <p className="text-lg font-bold">{stage.year}</p>
                </div>
              </div>
            ))}

            {/* Timeline line - positioned to go through the center of the dots */}
            <div className="journey-line absolute z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
