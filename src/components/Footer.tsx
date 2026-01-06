import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-[4%]">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: CTA Section (Span 5 cols) */}
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-sm">
              Sign up for updates or just say hello. I'm always open to discussing new projects and opportunities.
            </p>

            <div className="flex flex-col gap-4 max-w-sm mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-gray-500">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition-colors text-white placeholder-gray-700"
                />
              </div>
              <button className="w-full py-3 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors mt-4">
                Subscribe
              </button>
            </div>

            <p className="text-[10px] text-gray-500 max-w-sm leading-relaxed mb-8">
              * By signing up, you agree to receive updates about my work. I respect your inbox and will never spam.
            </p>

            {/* Social Icons - Circle Style */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/vedant-srivastava-b299b9364" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/breek0307" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://x.com/breek0307" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/_.vedaant_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:vedaaant0307@gmail.com" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Right Columns (Links) */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold tracking-widest uppercase text-sm mb-2">Navigation</h3>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a>
              <a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors">Experience</a>
            </div>

            {/* Socials Text */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold tracking-widest uppercase text-sm mb-2">Socials</h3>
              <a href="https://www.linkedin.com/in/vedant-srivastava-b299b9364" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a>
              <a href="https://github.com/breek0307" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a>
              <a href="https://instagram.com/_.vedaant_" className="text-gray-400 hover:text-white text-sm transition-colors">Instagram</a>
              <a href="https://x.com/breek0307" className="text-gray-400 hover:text-white text-sm transition-colors">Twitter/X</a>
            </div>

            {/* Latest Projects */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold tracking-widest uppercase text-sm mb-2">Latest Work</h3>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AI Startup</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Gym Platform</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Tech Club</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Roadmap Tool</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-[10px] tracking-widest uppercase text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">&copy; 2024 Vedant Portfolio</span>
            <button onClick={scrollToTop} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest hover:text-red-600 transition-colors ml-4">
              Back to Top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
