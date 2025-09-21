'use client';

import Image from "next/image";
import { useRef } from "react";
import Journey from "../components/Journey";
import Interests from "../components/Interests";
import Videos from "../components/Videos";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-16 px-4 max-w-6xl mx-auto">
      {/* Profile and Quote Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[var(--color-turquoise)] rounded-3xl overflow-hidden">
            <Image
              src="/profile-photo.png"
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-2/3">
          <div className="relative quote-container">
            <div className="muon-container">
              {/* Muon particles */}
              <div className="muon-particle"></div>
              <div className="muon-particle"></div>
              <div className="muon-particle"></div>
              <div className="muon-particle"></div>
              <div className="muon-particle"></div>
            </div>
            
            <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-[var(--color-background)] p-8 rounded-3xl shadow-lg relative z-10 ">
              <p className="mb-6 font-noto-serif text-justify">
                Hi, I'm Sienka (click on the emoji to listen to the correct pronunciation →
                <button
                  onClick={playAudio}
                  className="ml-1 text-[var(--color-turquoise)] hover:text-[var(--color-background)] transition-colors"
                  aria-label="Play pronunciation audio"
                >
                  [🔊]
                </button>)
              </p>
              <p className="mb-6 font-noto-serif text-justify">
                My name means &ldquo;do not discriminate against&rdquo; and &ldquo;don't neglect or ignore&rdquo; in Moundang, the language of my father's side.
              </p>
              <p className="mb-6 font-noto-serif text-justify">
                I live with both Autism and ADHD, which shape how I see the world and interact with it. Science, technology, engineering, and mathematics are my passions. I'm a self‑taught learner who spends most of my time exploring AI, especially how we can harness its power safely. I don't know everything, but I make it a point to expand my knowledge at every opportunity I get.
              </p>
              <p className="mb-6 font-noto-serif text-justify">
                This site is where I share those explorations: from personal growth and productivity hacks to AI/ML research, physics insights, content‑creation tips, and life in general. I love learning new things and would welcome your knowledge in return. If there's anything I can help you with, just let me know, using my skills to make the world a better place is what drives me.
              </p>
              <p className="mb-6 font-noto-serif text-justify">
                Last but not least, I would like to thank everyone who has contributed and continues to contribute to my journey (amazing people, amazing institutions, etc.). I will forever remain grateful.
              </p>
              <p className="mb-6 font-noto-serif text-justify">
                <a href="/blog/why-ai-safety" className="text-[var(--color-turquoise)] hover:text-[var(--color-background)] transition-colors underline">
                  Read my latest blog post on why I decided to work on AI safety →
                </a>
              </p>
              <div>
                <p className="text-right italic font-noto-serif text-[var(--color-background)]">~Sienka Dounia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Journey Timeline Section */}
      <Journey />

      {/* Interests Section */}
      <Interests />

      {/* Videos Section */}
      <Videos />

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/sienka.m4a" preload="none" />
    </div>
  );
}
