import { Shield, Code, Palette, Atom } from 'lucide-react';

const learningTopics = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Fundamental pentesting, network security, and ethical hacking. Target: basic certification.',
    progress: 35,
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Code,
    title: 'Advanced JavaScript',
    description: 'Async/await, promises, modules, and ES6+ features. Building complex applications.',
    progress: 60,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma advanced, user research, prototyping, and design systems.',
    progress: 45,
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Atom,
    title: 'Physics & Math',
    description: 'Physics concepts for programming logic & problem solving. University preparation.',
    progress: 50,
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Learning() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Currently <span className="text-cyan-400">Learning</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Topics and skills I'm currently studying
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/20 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${topic.color}`}>
                <topic.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{topic.description}</p>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs text-cyan-400 font-medium">{topic.progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${topic.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
