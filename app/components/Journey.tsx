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
        title: 'Stage 0',
        description: 'Born in the heart of Africa to a royal family, yeah my father is currently a King , I spent my first years in Chad, surrounded by tradition yet battling the invisible challenges of ADHD and Autism. My restless curiosity turned into countless scraped knees, broken bones, and many more that I need to write an entire book about.',
        year: 'early years'
    },
    {
        title: 'Stage 1',
        description: 'I entered school earlier than most, quickly rising to the top of my class year after year. My love of reading was relentless. The home and public libraries became my favorite places, where I absorbed a world of ideas that would later fuel both my academic record, and my lifelong thirst for knowledge.',
        year: '2006 - 2017'
    },
    {
        title: 'Stage 2',
        description: 'At 17 I left Chad to pursue banking and finance at the African Development University (ADU) in Niger, thanks to a scholarship that recognized my national exam performance. A partial offer from Turkey’s Karabük University fell through because of family constraints, so I focused on accounting at ADU.',
        year: '2018 - 2019'
    },
    {
        title: 'Stage 3',
        description: 'A Harvard CS50 class at ADU introduced me to programming in 2019, sparking a nightly devotion to code and collaboration with an experienced friend (thanks Soul50). I stayed up until midnight, sometimes sleeping on campus, to master new concepts. During this period I learned to mask my autism (not diagnosed at the time).',
        year: '2019 - 2021'
    },
    {
        title: 'Stage 4',
        description: 'Google Africa Developer Program awarded me a scholarship that turned curiosity into cloud engineering skills. I served as an IT assistant at ADU, and I interned with Niger’s first payment‑aggregator startup, handling API testing and web development. I then returned to ADU as a technical support coordinator.',
        year: '2021 - 2022'
    },
    {
        title: 'Stage 5',
        description: 'While still working at ADU, my father’s farming legacy inspired a home lab where I began experimenting with AI for precision agriculture, and had a lot of small successes. A chance meeting in late 2021 introduced me to Effective Altruism and the existential risks of AI, steering my focus toward mitigation.',
        year: '2022 - 2023'
    },
    {
        title: 'Stage 6',
        description: 'In mid 2022 I earned a place among the top 3 % of applicants at an AI summer school in Benin, winning 3rd prize for a project that used NASA satellite data to optimize crop irrigation. Mid‑2023, I left full‑time work to concentrate on AI/ML risk research and was selected as a fellow at ILINA (Kenya).',
        year: '2023 - 2024'
    },
    {
        title: 'Stage 7',
        description: 'In early 2024 after being a fellow at the AI Futures Fellowship (Mexico), I secured a grant to study deception in large language models. My team we won 2nd prize in an Apart Research hackathon, joined their lab as a fellow, and began working as an AI Safety Content Associate while continuing to mentor and research in my free time.',
        year: '2024 - now'
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
                    <div className="flex flex-col md:flex-row justify-between min-w-max md:min-w-max relative pt-12 md:pt-0 md:items-center md:h-100" style={{ width: `${Math.max(journeyStages.length * 500, 1200)}px` }}>
                        {journeyStages.map((stage, index) => (
                            <div key={index} className="journey-stage w-full md:w-100 flex flex-col items-center md:justify-center relative mb-8 md:mb-0">
                                {/* Top content - positioned absolutely on desktop */}
                                <div className="text-center md:absolute md:bottom-full md:mb-4 md:z-10">
                                    <h3 className="font-montserrat font-bold text-lg">{stage.title}</h3>
                                    <p className="font-sans-serrif text-sm text-justify">{stage.description}</p>
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
