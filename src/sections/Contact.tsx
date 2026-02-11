import { Phone, Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 8xx-xxxx-xxxx',
    href: 'https://wa.me/628xxxxxxxxxx',
    color: 'green',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@gmail.com',
    href: 'mailto:your.email@gmail.com',
    color: 'red',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    color: 'gray',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Your LinkedIn Profile',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'blue',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-cyan-500/30 transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-${link.color}-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors`}>
                    <link.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm">{link.label}</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              Send Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
