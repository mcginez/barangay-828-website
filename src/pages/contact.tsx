import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                      [Complete Barangay Address]<br />
                      [City], [Province]<br />
                      Philippines
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Numbers</h3>
                    <p className="text-gray-600">
                      Office: [Phone Number]<br />
                      Mobile: [Mobile Number]
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">[Email Address]</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Location Map</h2>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 rounded-lg">
                  {/* Add your map component or iframe here */}
                  <p className="text-center text-gray-600 py-40">
                    Map will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 