'use client';

import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! This is a demo form - in a real application, your message would be sent.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-montserrat font-bold mb-4">Contact Me</h1>
        <p className="font-noto-serif mb-4">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-montserrat font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-turquoise)] font-noto-serif"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-montserrat font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-turquoise)] font-noto-serif"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-montserrat font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-turquoise)] font-noto-serif"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[linear-gradient(90deg,#212738,#235160)] text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity duration-300 font-montserrat"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-[var(--color-turquoise)] p-6 rounded-lg shadow-md h-full flex flex-col justify-center">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-white">Contact Information</h2>
            
            <div className="space-y-4 text-white">
              <div>
                <h3 className="font-montserrat font-semibold">Email</h3>
                <p className="font-noto-serif">contact@example.com</p>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold">Location</h3>
                <p className="font-noto-serif">San Francisco, CA</p>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                    Twitter
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage