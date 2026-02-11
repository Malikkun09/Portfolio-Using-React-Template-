import { MapPin, GraduationCap, Briefcase, Target, Lightbulb } from 'lucide-react';

const quickInfo = [
  { icon: MapPin, label: 'Location', value: 'Indonesia' },
  { icon: GraduationCap, label: 'School', value: 'Your School Name' },
  { icon: Briefcase, label: 'Status', value: 'Student' },
  { icon: Target, label: 'Goal', value: 'Dream University' },
  { icon: Lightbulb, label: 'Interests', value: 'Web Dev, UI/UX, AI' },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate student with a strong interest in technology. 
                I love creating practical solutions through web development and 
                designing attractive UIs.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                My main focus right now is improving my programming skills, 
                learning about AI and machine learning, and preparing myself 
                to enter my dream university.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Outside of coding, I enjoy learning mathematics, reading tech articles, 
                and contributing to small open-source projects.
              </p>
            </div>

            {/* Personal Details */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                </span>
                Personal Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Full Name</span>
                  <span className="text-white font-medium">Your Full Name</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">School</span>
                  <span className="text-white font-medium">Your School</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Major</span>
                  <span className="text-white font-medium">Your Major</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Year</span>
                  <span className="text-white font-medium">2024 - Present</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Info</h3>
            {quickInfo.map((item, index) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-cyan-500/30 transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-cyan-400">5+</p>
                <p className="text-gray-400 text-sm mt-1">Projects</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-cyan-400">10+</p>
                <p className="text-gray-400 text-sm mt-1">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
