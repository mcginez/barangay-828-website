import Layout from '../components/Layout';
import Link from 'next/link';

export default function Transparency() {
  const laws = [
    {
      title: "Republic Act No. 10742",
      description: "Sangguniang Kabataan Reform Act of 2015",
      keyPoints: [
        "Mandates transparency in all SK activities and financial transactions",
        "Requires regular reporting of projects and programs",
        "Establishes the SK Development Fund",
        "Sets guidelines for SK budget allocation and utilization"
      ]
    },
    {
      title: "Local Government Code of 1991",
      description: "Book III, Title I, Chapter 7",
      keyPoints: [
        "Defines the powers and functions of the SK",
        "Establishes the SK as a youth development council",
        "Outlines the SK's role in local governance",
        "Sets guidelines for SK elections and organization"
      ]
    }
  ];

  const financialReports = [
    {
      title: "SK Development Fund 2024",
      period: "January - March 2024",
      amount: "₱100,000.00",
      status: "Active",
      details: [
        "Youth Development Programs: ₱40,000",
        "Community Projects: ₱35,000",
        "Administrative Expenses: ₱15,000",
        "Emergency Fund: ₱10,000"
      ]
    },
    {
      title: "SK Development Fund 2023",
      period: "October - December 2023",
      amount: "₱100,000.00",
      status: "Completed",
      details: [
        "Youth Leadership Training: ₱30,000",
        "Community Clean-up Drive: ₱25,000",
        "Sports Development: ₱25,000",
        "Administrative Expenses: ₱20,000"
      ]
    }
  ];

  const projects = [
    {
      title: "Youth Leadership Training",
      budget: "₱30,000.00",
      status: "Completed",
      date: "December 2023",
      beneficiaries: "50 youth leaders",
      impact: "Enhanced leadership skills and community engagement"
    },
    {
      title: "Community Clean-up Drive",
      budget: "₱25,000.00",
      status: "Completed",
      date: "January 2024",
      beneficiaries: "200 residents",
      impact: "Improved community cleanliness and environmental awareness"
    },
    {
      title: "Digital Literacy Program",
      budget: "₱40,000.00",
      status: "Ongoing",
      date: "February 2024 - Present",
      beneficiaries: "100 youth and seniors",
      impact: "Enhanced digital skills and internet literacy"
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">Transparency Portal</h1>

          {/* Laws and Mandates Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-black">SK Laws and Mandates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {laws.map((law, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{law.title}</h3>
                  <p className="text-gray-600 mb-4">{law.description}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {law.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Reports Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Financial Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {financialReports.map((report, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{report.title}</h3>
                      <p className="text-gray-600">{report.period}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{report.amount}</p>
                  <ul className="space-y-2">
                    {report.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects and Impact Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Projects and Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{project.budget}</p>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Date:</span> {project.date}</p>
                    <p><span className="font-semibold">Beneficiaries:</span> {project.beneficiaries}</p>
                    <p><span className="font-semibold">Impact:</span> {project.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">For More Information</h2>
            <p className="text-gray-600 mb-6">
              For detailed information about our projects, financial reports, or to request specific documents,
              please contact our SK Secretary or visit the Barangay Hall during office hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 