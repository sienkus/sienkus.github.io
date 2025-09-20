'use client'; // Add this at the top of the file to mark the component as a Client Component

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // This replaces `useRouter()`

  const getLinkClassNames = (href: string) => {
    const isActive = pathname === href;
    return `text-lg font-semibold lowercase font-montserrat ${      isActive ? 'border-b-2 border-[var(--color-background)]' : ''    }`;
  };

  return (
    <header className="px-5 py-3 bg-[var(--color-background)] flex justify-center">
      {/* Navbar container with dark navy background and rounded corners */}
      <div className="bg-[linear-gradient(90deg,#212738,#235160)] px-6 py-3 rounded-4xl shadow-md inline-flex mx-auto w-auto min-w-[500px]">
        <nav className="flex justify-center items-center">
          <div className="flex space-x-6 items-center"> {/* Ensure the same space-x-6 class here */}
            <Link href="/" className={`${getLinkClassNames('/')} text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              about me
            </Link>
            <Link href="/projects" className={`${getLinkClassNames('/projects')} text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              my projects
            </Link>
            <Link href="/blog" className={`${getLinkClassNames('/blog')} text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              blog posts
            </Link>
            <Link href="/contact" className={`${getLinkClassNames('/contact')} text-[var(--color-background)] hover:text-[var(--color-turquoise)]`}>
              my contact
            </Link>
            <button className="ml-4 text-[var(--color-background)] hover:text-[var(--color-turquoise)]">
              <svg
                className="w-6 h-6"
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
