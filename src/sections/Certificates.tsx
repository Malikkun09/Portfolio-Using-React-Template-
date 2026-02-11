import { Award, ExternalLink, Calendar } from 'lucide-react';

const certificates = [
  {
    title: 'Introduction to Programming',
    organization: 'Online Learning Platform',
    date: 'Jan 2025',
    description: 'Basic programming concepts and problem-solving fundamentals.',
    link: '#',
  },
  {
    title: 'Web Development Fundamentals',
    organization: 'Coding Platform',
    date: 'Dec 2024',
    description: 'HTML, CSS, and JavaScript basics for web development.',
    link: '#',
  },
  {
    title: 'Hackathon Participant Certificate',
    organization: 'Tech Organization',
    date: 'Nov 2024',
    description: 'Participated in hackathon with theme "Digital Solutions for UMKM".',
    link: '#',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications and achievements I've earned
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/20 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Award className="w-7 h-7 text-cyan-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-cyan-400 text-sm font-medium mb-2">{cert.organization}</p>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* More Coming */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-gray-400 text-sm">More certificates coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
