'use client'; // Add this at the top of the file to mark the component as a Client Component

import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // This replaces `useRouter()`
  const [searchOpen, setSearchOpen] = useState(false);

  const getLinkClassNames = (href: string) => {
    const isActive = pathname === href;
    return `text-sm sm:text-lg font-semibold lowercase font-montserrat ${      isActive ? 'border-b-2 border-[var(--color-background)]' : ''    }`;
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    // Simple search through blog posts and projects
    if (lowerQuery.includes('ai safety') || lowerQuery.includes('why i decided to work on ai safety')) {
      window.location.href = '/blog/why-ai-safety';
    } else if (lowerQuery.includes('website') || lowerQuery.includes('why i built this website') || lowerQuery.includes('how i built this website')) {
      window.location.href = '/projects/how-i-built-this-website';
    } else if (lowerQuery.includes('blog') || lowerQuery.includes('why i decided to build this website')) {
      window.location.href = '/blog/why-i-built-this-website';
    } else {
      alert('No results found for: ' + query);
    }
    setSearchOpen(false);
  };

  return (
    <header className="px-2 sm:px-5 py-3 bg-[var(--color-background)] flex justify-center">
      {/* Navbar container with dark navy background and rounded corners */}
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] px-4 sm:px-6 py-3 rounded-2xl sm:rounded-4xl shadow-md inline-flex mx-auto w-full max-w-4xl">
        <nav className="flex justify-center items-center w-full">
          <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-6"> {/* Responsive spacing */}
            <Link href="/" className={`${getLinkClassNames('/')} text-sm sm:text-lg font-semibold lowercase font-montserrat text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              about me
            </Link>
            <Link href="/projects" className={`${getLinkClassNames('/projects')} text-sm sm:text-lg font-semibold lowercase font-montserrat text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              my projects
            </Link>
            <Link href="/blog" className={`${getLinkClassNames('/blog')} text-sm sm:text-lg font-semibold lowercase font-montserrat text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              blog posts
            </Link>
            <Link href="/contact" className={`${getLinkClassNames('/contact')} text-sm sm:text-lg font-semibold lowercase font-montserrat text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              my contact
            </Link>
            {searchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 sm:ml-4 px-2 py-1 rounded-md text-[var(--color-background)] border border-[var(--color-background)] text-sm bg-transparent"
                autoFocus
                onBlur={() => setSearchOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch((e.target as HTMLInputElement).value);
                  }
                }}
              />
            ) : (
              <button
                onClick={toggleSearch}
                className="ml-2 sm:ml-4 text-[var(--color-background)] hover:text-[var(--color-turquoise)]"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
