import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Palette, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 78 },
      { name: 'ReactJS', level: 30 },
      { name: 'TypeScript', level: 45 },
    ],
  },
  {
    icon: Terminal,
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'NodeJS', level: 60 },
      { name: 'PHP', level: 43 },
      { name: 'C / C++', level: 25 },
    ],
  },
  {
    icon: Database,
    title: 'Database & API',
    skills: [
      { name: 'SQL / Database', level: 75 },
      { name: 'MongoDB', level: 50 },
      { name: 'REST API', level: 65 },
      { name: 'JSON', level: 55 },
    ],
  },
  {
    icon: Palette,
    title: 'Design & Tools',
    skills: [
      { name: 'UI/UX Design', level: 70 },
      { name: 'Figma', level: 60 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-cyan-400 text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I've learned and worked with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-white mb-6">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'VS Code', 'Linux', 'Docker', 'Firebase', 'Vercel', 'Netlify', 'Canva'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
