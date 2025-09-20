'use-client'

import Image from 'next/image'; // 1. Import the Image component

const interests = [
  {
    title: '1. math and physics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.'
  },
  {
    title: '2. technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.'
  },
  {
    title: '3. content creation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.'
  },
  {
    title: '4. culture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel.'
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
