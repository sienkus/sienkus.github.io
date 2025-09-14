import Image from "next/image";
import Journey from "../components/Journey";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-16 px-4 max-w-6xl mx-auto">
      {/* Profile and Quote Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 bg-[var(--color-turquoise)] rounded-lg overflow-hidden">
            <Image 
              src="/profile-image.svg" 
              alt="Profile Image"
              width={300}
              height={300}
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
            
            <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-[var(--color-background)] p-8 rounded-3xl shadow-lg relative z-10">
              <p className="mb-6 font-noto-serif text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus lectus, a pellentesque felis egestas vel. Morbi non est vitae velit facilisis faucibus. In a justo odio. Quisque quis hendrerit lacus. Ut viverra sed urna in venenatis. Mauris condimentum molestie urna non pharetra. Aenean dignissim dignissim dui, quis efficitur ipsum euismod sed. Pellentesque in tortor blandit, facilisis ipsum non, tempus urna. Duis fermentum lacus eu elementum pulvinar.
              </p>
              <p className="mb-6 font-noto-serif text-justify">
                In blandit lorem lectus, sit amet euismod libero malesuada et. Ut id faucibus diam, a dapibus enim. Sed dapibus, metus quis viverra tincidunt, mi ipsum sollicitudin dui, at blandit lorem dui sed magna. Morbi consequat nunc nec nisl ultricies, eget vulputate urna efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet sapien pretium sapien ullamcorper tristique. Maecenas placerat lectus non sodales commodo.
              </p>
              <div>
                <p className="text-right italic font-noto-serif text-[var(--color-background)]">~Albert Einstein</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Journey Timeline Section */}
      <Journey />
    </div>
  );
}