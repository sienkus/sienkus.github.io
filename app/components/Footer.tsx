import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Email Contact */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a
              href="mailto:sienka.dounia@gmail.com"
              className="hover:underline"
            >
              sienka[dot]dounia[at]gmail[dot]com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
              <a href="https://github.com/sienkus" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icon-github.png"
                  alt="GitHub"
                  width={28}
                  height={28}
                  className="hover:opacity-75"
                />
              </a>
            <a href="https://www.facebook.com/sienka.dounia" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icon-facebook.png"
                alt="Facebook"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </a>
            <a href="https://www.instagram.com/sienkus/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icon-instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </a>
            <a href="https://www.linkedin.com/in/sienka-dounia" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icon-linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </a>
            <a href="https://x.com/DouniaSienka" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icon-x.png"
                alt="X (Twitter)"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCh1Hq0HS39Yck5P2AyQvO2Q" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icon-youtube.png"
                alt="YouTube"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
