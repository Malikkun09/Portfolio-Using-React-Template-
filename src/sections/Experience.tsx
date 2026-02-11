import { Trophy, Users, Code, Calendar } from 'lucide-react';

const experiences = [
  {
    icon: Trophy,
    title: 'Hackathon Participant',
    organization: 'National Hackathon',
    period: '2024',
    description: 'Participated in a team of 3 to create digital solutions for UMKM problems.',
    details: 'Hackathon focused on creating digital solutions for small businesses using modern technologies.',
  },
  {
    icon: Users,
    title: 'Online Project Collaboration',
    organization: 'Open Source Community',
    period: '2024',
    description: 'Collaborated with developers from other universities via GitHub.',
    details: 'Contributed to small open-source projects, learned team workflow and code review processes.',
  },
  {
    icon: Code,
    title: 'API Development',
    organization: 'Personal Project',
    period: '2024',
    description: 'Created RESTful API with JavaScript and NodeJS.',
    details: 'Built RESTful API with Node.js and Express for URL shortening service and authentication system.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experiences and achievements I've gained
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/20 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <exp.icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-cyan-400 text-sm font-medium mb-2">{exp.organization}</p>
                  <p className="text-gray-300 mb-2">{exp.description}</p>
                  <p className="text-gray-400 text-sm">{exp.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
