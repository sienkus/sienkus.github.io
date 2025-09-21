'use client';
import Image from 'next/image'
import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className='flex justify-center items-center mb-8'>
          <Image src='/icon-contact.png'
          alt='Contact Icon'
          width={90}
          height={90}
        />
      </div>
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-4xl shadow-lg mb-8">
        <h1 className="text-3xl font-montserrat font-bold mb-4">contact me</h1>
          <div className="h-full flex flex-col justify">
            <div className="text-justify  space-y-6">
              <p className="font-noto-serif leading-relaxed">
                If you're interested in collaborating, want to discuss something interesting, or think I could help with anything, feel free to shoot me an email at sienka[dot]dounia[at]gmail[dot]com.
              </p>
              
              <p className="font-noto-serif leading-relaxed">
                If you enjoy my content or find it helpful, consider following me, it's a great way to show support and help others discover it too. Let's stay connected! My socials are listed below.
              </p>
            </div>
          </div>
          {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-6">
                <a href="https://www.linkedin.com/in/sienka-dounia" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icon-linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="hover:opacity-75"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icon-youtube.png"
                    alt="YouTube"
                    width={32}
                    height={32}
                    className="hover:opacity-75"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icon-x.png"
                    alt="X (Twitter)"
                    width={32}
                    height={32}
                    className="hover:opacity-75"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icon-facebook.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="hover:opacity-75"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icon-instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="hover:opacity-75"
                  />
                </a>
              </div>
      </div>
    </div>
  )
}

export default ContactPage
