import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      title: "Barangay Clearance",
      description: "Official document certifying residency and good standing in the barangay.",
      requirements: [
        "Valid ID",
        "Proof of Residency",
        "Recent 2x2 ID Picture"
      ]
    },
    {
      title: "Indigency Certificate",
      description: "Document certifying financial status for social services and assistance.",
      requirements: [
        "Valid ID",
        "Proof of Income",
        "Recent 2x2 ID Picture"
      ]
    },
    {
      title: "Business Permit",
      description: "Required for operating businesses within the barangay.",
      requirements: [
        "DTI/SEC Registration",
        "Valid ID",
        "Proof of Business Location"
      ]
    },
    {
      title: "Community Tax Certificate",
      description: "Required for various government transactions.",
      requirements: [
        "Valid ID",
        "Proof of Income"
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Barangay Services</h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div>
                <h3 className="text-lg font-semibold mb-3">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {service.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Avail Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prepare Requirements</h3>
              <p className="text-gray-600">Gather all necessary documents for your requested service.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Barangay Hall</h3>
              <p className="text-gray-600">Submit your requirements at the barangay office during office hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Claim Document</h3>
              <p className="text-gray-600">Return on the specified date to claim your processed document.</p>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Office Hours</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Weekdays</h3>
                <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Saturday</h3>
                <p className="text-gray-600">8:00 AM - 12:00 PM</p>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-600">
              Note: The office is closed on Sundays and holidays.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 