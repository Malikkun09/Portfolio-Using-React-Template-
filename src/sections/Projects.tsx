import { Github, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Website with AI System',
    problem: 'UMKM needs a website and AI to help their business.',
    solution: 'Web app with food menu, dashboard, and AI system to describe menus.',
    tech: ['ReactJS', 'MySQL', 'Tailwind', 'CSS3'],
    role: 'Designer & Front-end',
    github: 'https://github.com',
    demo: 'https://demo.com',
    status: 'online',
  },
  {
    title: 'Portfolio Glassmorphism',
    problem: 'Need a modern portfolio website with trendy design.',
    solution: 'Single-page portfolio with glassmorphism effects, smooth animations, and fully responsive.',
    tech: ['HTML5', 'CSS3', 'Vanilla JS'],
    role: 'All',
    github: 'https://github.com',
    demo: null,
    status: 'offline',
  },
  {
    title: 'API for WhatsApp Bot',
    problem: 'Need API for WhatsApp bot to download videos, audio, and media.',
    solution: 'API endpoint providing download URLs with API keys for authentication.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    role: 'Backend Developer',
    github: 'https://github.com',
    demo: null,
    status: 'offline',
  },
];

const featuredProject = {
  title: 'Chat Live - Real-time Chat Platform',
  status: 'In Development',
  description: 'Real-time messaging, user authentication, rooms, media sharing, and more!',
  tech: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'WebSocket'],
  role: 'Full Stack Developer',
  github: 'https://github.com',
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects I've worked on to improve my skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-6 flex flex-col hover:border-cyan-500/20 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.status === 'online' ? (
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <CheckCircle2 className="w-3 h-3" /> Online
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" /> Offline
                  </span>
                )}
              </div>

              {/* Problem & Solution */}
              <div className="space-y-3 mb-4 flex-grow">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Problem:</p>
                  <p className="text-gray-400 text-sm">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Solution:</p>
                  <p className="text-gray-300 text-sm">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Role */}
              <div className="mb-4">
                <span className="text-xs text-gray-500">Role: </span>
                <span className="text-gray-300 text-sm">{project.role}</span>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mt-12">
          <div className="glass-card rounded-2xl p-8 border-cyan-500/20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                  BIGGEST PROJECT
                </span>
                <span className="flex items-center gap-1 text-xs text-yellow-400">
                  <AlertCircle className="w-3 h-3" /> {featuredProject.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{featuredProject.title}</h3>
              
              <p className="text-gray-300 mb-4">{featuredProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">Role: </span>
                  <span className="text-white">{featuredProject.role}</span>
                </div>
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
