import { Target, Rocket, GraduationCap, Sparkles } from 'lucide-react';

export default function Dreams() {
  return (
    <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">My Dreams</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Goals</span> & <span className="text-cyan-400">Dreams</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Main Goal Card */}
        <div className="glass-card rounded-3xl p-8 text-center border-cyan-500/20">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-cyan">
            <Target className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Enter Dream University!
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            My main goal is to be accepted into my dream university to study 
            Computer Science or Informatics Engineering, focusing on 
            Artificial Intelligence and Software Development.
          </p>

          {/* Target Universities */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Top University 1', 'Top University 2', 'Top University 3'].map((uni) => (
              <div
                key={uni}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{uni}</span>
              </div>
            ))}
          </div>

          {/* Motivation Quote */}
          <div className="border-t border-white/10 pt-6">
            <blockquote className="text-gray-400 italic">
              "The future belongs to those who believe in the beauty of their dreams."
            </blockquote>
            <p className="text-cyan-400 text-sm mt-2">— Eleanor Roosevelt</p>
          </div>
        </div>

        {/* Mini Goals */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: Rocket, title: 'Master AI/ML', desc: 'Deep learning & neural networks' },
            { icon: GraduationCap, title: 'Get Certified', desc: 'Professional certifications' },
            { icon: Target, title: 'Build Products', desc: 'Launch successful projects' },
          ].map((goal, index) => (
            <div
              key={goal.title}
              className="glass-card rounded-xl p-4 text-center hover:border-cyan-500/20 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <goal.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <h4 className="text-white font-medium mb-1">{goal.title}</h4>
              <p className="text-gray-400 text-sm">{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
