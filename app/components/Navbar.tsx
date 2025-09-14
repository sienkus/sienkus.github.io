'use client'; // Add this at the top of the file to mark the component as a Client Component

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // This replaces `useRouter()`

  const getLinkClassNames = (href: string) => {
    const isActive = pathname === href;
    return `text-lg font-semibold text-foreground hover:text-vivid-sky-blue lowercase ${
      isActive ? 'border-b-3 border-foreground' : ''
    }`;
  };

  return (
    <header className="px-5 py-3 bg-[var(--color-background)]">
      {/* Navbar container with consistent class names */}
      <div className="bg-white p-3 rounded-3xl shadow-md inline-flex mx-auto">
        <nav className="flex justify-center">
          <div className="flex space-x-6"> {/* Ensure the same space-x-6 class here */}
            <Link href="/" className={getLinkClassNames('/')}>
              about me
            </Link>
            <Link href="/projects" className={getLinkClassNames('/projects')}>
              my projects
            </Link>
            <Link href="/blog" className={getLinkClassNames('/blog')}>
              blog posts
            </Link>
            <Link href="/contact" className={getLinkClassNames('/contact')}>
              contact me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;