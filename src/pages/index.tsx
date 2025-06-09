import Layout from '../components/Layout';

import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Barangay 828
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Serving our community with dedication and excellence
            </p>
            <Link href="/services" className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Announcements</h3>
            <p className="text-gray-600 mb-4">Stay updated with the latest news and events in our barangay.</p>
            <Link href="/announcements" className="text-blue-600 hover:text-blue-800">
              View Announcements →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <p className="text-gray-600 mb-4">Access our various barangay services and requirements.</p>
            <Link href="/services" className="text-blue-600 hover:text-blue-800">
              View Services →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">Get in touch with our barangay officials and staff.</p>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">About Our Barangay</h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn more about our community and its rich history
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Barangay 828 is committed to providing excellent public service and maintaining a safe, 
                peaceful, and progressive community for all its residents.
              </p>
              <Link href="/about" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Learn More
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              {/* Add your barangay image here */}
              <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
