'use-client'

import Image from 'next/image'; // 1. Import the Image component

const interests = [
  {
    title: '1. math and physics',
    description: 'From a very young age I was drawn to the language of the universe: mathematics and physics. My love for these subjects led me to pursue an honors‑level “Série C” track where physics and math were my specialties. I love seeing how they deeply explain things. In fact, one of my favorite science quotes is Galileo’s quote “The universe is a book written in a mathematical langage”. I used to find myself solving physics and math problems on other subjects exam days simply because they were more engaging than the test itself. My father’s playful math riddles only deepened that curiosity, today I still set myself a new puzzle regularly, whether it’s a theoretical problem or an applied calculation.'
  },
  {
    title: '2. technology',
    description: 'I first laid hands on a computer at around 4, but my fascination with how things work began long before. Growing up in a household filled with generators, motorbikes, and DIY projects, I became the family go‑to technician, with my big brother (now an aerospace engineer) disassembling lamps, rewiring circuits, and watching mechanics bring broken gadgets back to life. That practical mindset carried over into coding when Harvard’s CS50 course at ADU opened a new realm of possibility for me. Since then I’ve built everything from custom scripts to full web applications (I even launched this very site on a Sunday after learning React, Next.js, and Tailwind in one night). If you’re curious about hardware, software, or AI, let’s chat.'
  },
  {
    title: '3. content creation',
    description: 'Creating is my creative outlet. Whether I’m drafting a blog post, designing an infographic, filming a video, or editing, I thrive on turning ideas into tangible artifacts that tell a story. My experience as a community manager and the launch of my personal blog, Sienkus, let me share insights on STEM, productivity, and well‑being with an audience eager to grow. Seeing readers engage with and benefit from my work is deeply rewarding. If you’re passionate about content or want to collaborate, I’m always open to fresh ideas, often co‑creating with my wife.'
  },
  {
    title: '4. culture',
    description: 'Language, history, and the tapestry of human expression have always captivated me. I speak 8 languages and continue adding more, while my travels, from Teotihuacan’s pyramids to quiet villages across Africa, fuel my curiosity about people’s customs, attire, and values. Exploring architecture, landscapes, and ancient traditions doesn’t just satisfy my wanderlust; it deepens the way I approach problem-solving and storytelling. I’m also drawn to play, whether learning local games or losing myself in dance. Afro dance is a special strength, though I love movement in all its forms. If you’re fascinated by cultures, civilizations, or eager to exchange linguistic insights, let’s connect.'
  }
];

const Interests = () => {
  return (
    <div className="interests-section w-full max-w-6xl mx-auto px-4 md:px-8 mt-20">
      <div className='text-center'>
        <div className="flex justify-center items-center mb-8">
            <Image 
                src="/interests-icon.png"
                alt='Interests Icon'
                width={98} // Adjust size as needed
                height={98} // Adjust size as needed
                className="mr-8" // Adds space between image and title
            />
        </div>
        <h2 className="font-montserrat text-2xl font-bold text-[var(--color-navy)]">my interests</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {interests.map((interest, index) => (
          <div key={index} className="interest-box p-6">
            <h3 className="font-montserrat text-3xl font-semibold text-[var(--color-navy)] mb-4 lowercase">
              {interest.title}
            </h3>
            <p className="font-noto-serif text-justify text-gray-700">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
