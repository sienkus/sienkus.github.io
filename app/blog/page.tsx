import React from 'react'

const BlogPage = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component.',
      date: 'June 15, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'A comparison between CSS Grid and Flexbox for modern layouts.',
      date: 'July 22, 2023',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'The Power of NextJS',
      excerpt: 'Why NextJS is becoming the go-to framework for React applications.',
      date: 'August 10, 2023',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Responsive Design Principles',
      excerpt: 'Key principles to follow when creating responsive web designs.',
      date: 'September 5, 2023',
      readTime: '7 min read'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-montserrat font-bold mb-4">Blog Posts</h1>
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
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage