import React from 'react'
import Image from 'next/image'

const ProjectsPage = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one and its features.',
      imageUrl: '/file.svg',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two and its technologies.',
      imageUrl: '/globe.svg',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of project three and its implementation.',
      imageUrl: '/window.svg',
      link: '#'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-montserrat font-bold mb-4">My Projects</h1>
        <p className="font-noto-serif mb-4">
          Here are some of the projects I've been working on. Each project represents different skills and technologies I've mastered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[var(--color-turquoise)] h-48 relative">
              <Image 
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-montserrat font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 font-noto-serif mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block bg-[linear-gradient(90deg,#212738,#235160)] text-white py-2 px-4 rounded hover:opacity-90 transition-opacity duration-300 font-montserrat"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage