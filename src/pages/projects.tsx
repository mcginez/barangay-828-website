import Layout from '../components/Layout';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Youth Leadership Training",
      description: "A comprehensive training program for young leaders in the community, focusing on leadership skills, community service, and civic engagement.",
      image: "/sk-logo.png",
      status: "Ongoing",
      date: "January 2024 - Present",
      category: "Education"
    },
    {
      title: "Community Garden Initiative",
      description: "Establishing and maintaining community gardens to promote sustainable living and provide fresh produce for residents.",
      image: "/sk-logo.png",
      status: "Completed",
      date: "December 2023",
      category: "Environment"
    },
    {
      title: "Digital Literacy Program",
      description: "Free computer and internet training sessions for youth and senior citizens to bridge the digital divide.",
      image: "/sk-logo.png",
      status: "Ongoing",
      date: "February 2024 - Present",
      category: "Technology"
    },
    {
      title: "Sports Development Program",
      description: "Regular sports activities and tournaments to promote physical fitness and community bonding among youth.",
      image: "/sk-logo.png",
      status: "Ongoing",
      date: "January 2024 - Present",
      category: "Sports"
    },
    {
      title: "Arts and Culture Festival",
      description: "Annual celebration of local arts and culture, featuring performances, workshops, and exhibitions.",
      image: "/sk-logo.png",
      status: "Upcoming",
      date: "April 2024",
      category: "Culture"
    },
    {
      title: "Environmental Awareness Campaign",
      description: "Educational programs and activities focused on waste management, recycling, and environmental conservation.",
      image: "/sk-logo.png",
      status: "Ongoing",
      date: "March 2024 - Present",
      category: "Environment"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">SK Projects & Initiatives</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                    project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Get Involved?</h2>
          <p className="text-gray-600 mb-8">
            Join us in making a difference in our community. There are many ways to participate in our projects and initiatives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contact Us to Volunteer
          </a>
        </div>
      </div>
    </Layout>
  );
} 