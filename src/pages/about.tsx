import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">About Barangay 828</h1>
          
          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-900">
                To provide efficient and effective public service to all residents, 
                ensuring a safe, peaceful, and progressive community through good governance 
                and active citizen participation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-900">
                To be a model barangay that promotes sustainable development, 
                social justice, and the well-being of all its residents through 
                innovative programs and responsive leadership.
              </p>
            </div>
          </div>

          {/* Barangay Officials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Barangay Officials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Barangay Captain</h3>
                  <p className="text-gray-900">[Name]</p>
                </div>
              </div>
              {/* Add more officials as needed */}
            </div>
          </div>

          {/* History */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our History</h2>
            <div className="prose max-w-none">
              <p className="text-gray-900 mb-4">
                Barangay 828 has a rich history that dates back to [year]. 
                Originally established as a small community, it has grown into 
                a vibrant and progressive barangay that serves thousands of residents.
              </p>
              <p className="text-gray-900">
                Over the years, the barangay has undergone significant development 
                and transformation, becoming a model of good governance and community 
                service in the city.
              </p>
            </div>
          </div>

          {/* Location and Contact */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Location and Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Address</h3>
                <p className="text-gray-900">
                  [Complete Barangay Address]<br />
                  [City], [Province]<br />
                  Philippines
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
                <p className="text-gray-900">
                  Phone: [Phone Number]<br />
                  Email: [Email Address]<br />
                  Office Hours: Monday to Friday, 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 