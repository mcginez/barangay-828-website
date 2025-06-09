import Layout from '../components/Layout';

export default function Announcements() {
  const announcements = [
    {
      title: "Community Clean-up Drive",
      date: "March 15, 2024",
      description: "Join us for our monthly community clean-up drive. Meet at the barangay hall at 7:00 AM.",
      category: "Event"
    },
    {
      title: "Free Medical Check-up",
      date: "March 20, 2024",
      description: "Free medical check-up for senior citizens and PWDs. Bring your barangay ID.",
      category: "Health"
    },
    {
      title: "Road Closure Notice",
      date: "March 10, 2024",
      description: "Main street will be closed for maintenance from March 12-14. Please use alternate routes.",
      category: "Notice"
    },
    {
      title: "Vaccination Schedule",
      date: "March 5, 2024",
      description: "COVID-19 vaccination schedule for the month of March. Please check the schedule at the barangay hall.",
      category: "Health"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Announcements</h1>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{announcement.title}</h2>
                  <p className="text-gray-600">{announcement.description}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {announcement.category}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Posted on: {announcement.date}
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest announcements and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">Police</h3>
              <p className="text-gray-600">911</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">Fire Department</h3>
              <p className="text-gray-600">911</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">Barangay Emergency</h3>
              <p className="text-gray-600">[Emergency Number]</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 