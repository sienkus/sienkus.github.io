"use client"

import React, { useState } from 'react'
import FilterBox from '../components/FilterBox'

const BlogPage = () => {
  const [filters, setFilters] = useState({ search: '', domain: '', duration: '' })

  // Blog post data
  const blogPosts = [
    {
      id: 'why-i-built-this-website',
      title: 'why i decided to build this website',
      excerpt: 'Exploring the personal reasons behind creating this space: from telling my own story to sharing knowledge and holding myself accountable.',
      date: 'september 21, 2025',
      readTime: '8 min read'
    },
    {
      id: 'why-ai-safety',
      title: 'why I decided to work on AI safety (and why you might too)',
      excerpt: 'A personal journey from Chad to AI safety, exploring the reasons behind dedicating my work to ensuring AI benefits humanity.',
      date: 'september 21, 2025',
      readTime: '10 min read'
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
            <h1 className="text-3xl font-montserrat font-bold mb-4">blog posts</h1>
            <p className="font-noto-serif mb-4">
              Welcome to my blog, where I share my thoughts and experiences on various topics, no matter how big or small, as long as I think they’re important to me.
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                    className="inline-block bg-[linear-gradient(90deg,#212738,#235160)] text-white py-2 px-4 rounded-3xl hover:opacity-90 transition-opacity duration-300 font-montserrat"
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
