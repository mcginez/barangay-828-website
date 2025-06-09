import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold">Barangay 828</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Services
              </Link>
              <Link href="/announcements" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Announcements
              </Link>
              <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/services" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/announcements" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Announcements
            </Link>
            <Link href="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 