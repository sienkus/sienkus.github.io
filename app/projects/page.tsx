"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import FilterBox from '../components/FilterBox'

const ProjectsPage = () => {
  const [filters, setFilters] = useState({ search: '', domain: '', duration: '' })

  // Project data
  const projects = [
    {
      id: 'how-i-built-this-website',
      title: 'how I built this website',
      description: 'A personal project showcasing the creation of this website using free tools, Next.js, and Tailwind CSS — from Sunday idea to deployed site.',
      imageUrl: '/this-website.png',
      link: '/projects/how-i-built-this-website'
    }
  ]

  const handleFilter = (newFilters: { search: string; domain: string; duration: string }) => {
    setFilters(newFilters)
    // TODO: Implement filtering logic
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <FilterBox onFilter={handleFilter} />
        </div>
        <div className="lg:w-3/4">
          <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-3xl shadow-lg mb-8">
            <h1 className="text-3xl font-montserrat font-bold mb-4">my projects</h1>
            <p className="font-noto-serif mb-4">
              Here are some of the projects I've been working on. Each project represents different skills and technologies I've mastered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[var(--color-turquoise)] h-48 relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain p-4 rounded-2xl"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-montserrat font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-700 font-noto-serif mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-[linear-gradient(90deg,#212738,#235160)] text-white py-2 px-4 rounded-3xl hover:opacity-90 transition-opacity duration-300 font-montserrat"
                  >
                    view project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
