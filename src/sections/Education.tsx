import { School, BookOpen, GraduationCap } from 'lucide-react';

const educationTimeline = [
  {
    level: 'Kindergarten',
    school: 'Your Kindergarten',
    type: 'Private',
    period: '2014 - 2016',
    icon: BookOpen,
  },
  {
    level: 'Elementary School',
    school: 'Your Elementary School',
    type: 'Private',
    period: '2016 - 2022',
    icon: School,
  },
  {
    level: 'Junior High School',
    school: 'Your Junior High School',
    type: 'Private',
    period: '2022 - 2024',
    icon: School,
  },
  {
    level: 'Vocational High School',
    school: 'Your Vocational School',
    type: 'Private',
    period: '2024 - Present',
    icon: GraduationCap,
    current: true,
    details: ['Web Programming', 'Algorithms', 'Discrete Math', 'UI/UX Design'],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Education */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Current Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-white">Your Vocational School</p>
                <p className="text-cyan-400">Software Development (RPL/PPLG)</p>
                <p className="text-gray-400 text-sm mt-1">2024 - Present</p>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-gray-400 text-sm mb-3">Subjects:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Web Programming', 'Algorithms', 'Discrete Math', 'WordPress', 'Unity', 'UI/UX Design'].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm rounded-md text-center"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Education Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-gray-800" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {educationTimeline.map((edu, index) => (
                  <div
                    key={edu.school}
                    className="relative flex gap-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      edu.current ? 'bg-cyan-500' : 'bg-gray-800'
                    }`}>
                      <edu.icon className={`w-5 h-5 ${edu.current ? 'text-white' : 'text-gray-400'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-grow pb-6">
                      <div className="glass-card rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <p className={`font-semibold ${edu.current ? 'text-cyan-400' : 'text-white'}`}>
                            {edu.level}
                          </p>
                          <span className="text-gray-500 text-xs">{edu.period}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{edu.school}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded">
                          {edu.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
