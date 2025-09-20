"use client"

import React, { useState } from 'react'
import FilterBox from '../components/FilterBox'

const BlogPage = () => {
  const [filters, setFilters] = useState({ search: '', domain: '', duration: '' })

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'getting started with React',
      excerpt: 'learn the basics of React and how to create your first component.',
      date: 'june 15, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'a comparison between CSS Grid and Flexbox for modern layouts.',
      date: 'july 22, 2023',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'the power of NextJS',
      excerpt: 'Why NextJS is becoming the go-to framework for React applications.',
      date: 'august 10, 2023',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'responsive design principles',
      excerpt: 'Key principles to follow when creating responsive web designs.',
      date: 'september 5, 2023',
      readTime: '7 min read'
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
          <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-lg shadow-lg mb-8">
            <h1 className="text-3xl font-montserrat font-bold mb-4">blog posts</h1>
            <p className="font-noto-serif mb-4">
              Welcome to my blog where I share my thoughts and experiences on web development, design, and technology.
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-2xl font-montserrat font-semibold mb-2">{post.title}</h2>
                  <div className="flex items-center text-gray-500 mb-4 font-montserrat text-sm">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-700 font-noto-serif mb-4">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-block bg-[linear-gradient(90deg,#212738,#235160)] text-white py-2 px-4 rounded hover:opacity-90 transition-opacity duration-300 font-montserrat"
                  >
                    read more
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

export default BlogPage
