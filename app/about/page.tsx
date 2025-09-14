import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-montserrat font-bold mb-4">About Me</h1>
        <p className="font-noto-serif mb-4">
          Learn more about my background, skills, and interests.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="bg-[var(--color-turquoise)] p-6 rounded-lg shadow-md">
            <div className="relative w-full h-64 mb-6">
              <Image 
                src="/profile-image.svg" 
                alt="Profile Image"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-2xl font-montserrat font-bold text-white mb-4">Skills</h2>
            <ul className="space-y-2 text-white font-noto-serif">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>JavaScript & TypeScript</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">My Story</h2>
            <div className="space-y-4 font-noto-serif text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel. Morbi non est vitae velit facilisis faucibus. In a justo odio. Quisque quis hendrerit lacus. Ut viverra sed urna in venenatis.
              </p>
              <p>
                Mauris condimentum molestie urna non pharetra. Aenean dignissim dignissim dui, quis efficitur ipsum euismod sed. Pellentesque in tortor blandit, facilisis ipsum non, tempus urna. Duis fermentum lacus eu elementum pulvinar.
              </p>
              <p>
                In blandit lorem lectus, sit amet euismod libero malesuada et. Ut id faucibus diam, a dapibus enim. Sed dapibus, metus quis viverra tincidunt, mi ipsum sollicitudin dui, at blandit lorem dui sed magna.
              </p>
              <p>
                Morbi consequat nunc nec nisl ultricies, eget vulputate urna efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet sapien pretium sapien ullamcorper tristique. Maecenas placerat lectus non sodales commodo.
              </p>
            </div>

            <h2 className="text-2xl font-montserrat font-bold text-gray-800 mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-800">Master's in Computer Science</h3>
                <p className="font-noto-serif text-gray-600">University of Technology, 2018-2020</p>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-800">Bachelor's in Software Engineering</h3>
                <p className="font-noto-serif text-gray-600">State University, 2014-2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage