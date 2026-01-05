import { Github, Linkedin, Mail, MessageCircle, Send, Instagram } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    platform: "LinkedIn",
    purpose: "Professional profile • Connect",
    cta: "Connect",
    icon: Linkedin,
    color: "bg-[#0077b5]",
    link: "https://linkedin.com",
    gradient: "from-blue-600 to-blue-900"
  },
  {
    platform: "Gmail",
    purpose: "Email me directly • Fast reply",
    cta: "Send Email",
    icon: Mail,
    color: "bg-[#EA4335]",
    link: "mailto:hello@vedant.dev",
    gradient: "from-red-600 to-red-900"
  },
  {
    platform: "Instagram",
    purpose: "Creative updates",
    cta: "Follow",
    icon: Instagram,
    color: "bg-[#E4405F]",
    link: "https://instagram.com",
    gradient: "from-pink-600 to-pink-900"
  },
  {
    platform: "WhatsApp",
    purpose: "Quick conversation",
    cta: "Chat",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    link: "https://whatsapp.com",
    gradient: "from-green-600 to-green-900"
  },
  {
    platform: "GitHub",
    purpose: "Projects & source code",
    cta: "View Code",
    icon: Github,
    color: "bg-[#333]",
    link: "https://github.com",
    gradient: "from-gray-600 to-gray-900"
  },
  {
    platform: "Telegram",
    purpose: "Direct messages",
    cta: "Message",
    icon: Send,
    color: "bg-[#0088cc]",
    link: "https://telegram.org",
    gradient: "from-sky-600 to-sky-900"
  }
];

const ContactCard = ({ contact }: { contact: typeof contacts[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = contact.icon;

  return (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[200px] h-[300px] flex-shrink-0 transition-all duration-300 md:w-[220px] md:h-[330px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-[#141414] rounded-md overflow-hidden transition-all duration-300 ease-in-out border border-transparent ${isHovered
            ? "z-50 scale-110 shadow-[0_0_20px_rgba(229,9,20,0.4)] border-red-600/50"
            : "z-10 scale-100 border-white/10"
          }`}
      >
        {/* Background Gradient / Poster Style */}
        <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

        {/* Large Centered Icon (Poster Art) */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? "-translate-y-8 scale-75 opacity-20" : "scale-100 opacity-100"}`}>
          <Icon className="w-20 h-20 text-white drop-shadow-2xl" />
        </div>

        {/* Hover Overlay Content */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-5 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>

          <div className="transform translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
              {contact.platform}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400 text-xs font-bold">98% Match</span>
              <span className="text-gray-400 text-[10px] border border-gray-500 px-1 rounded">HD</span>
            </div>

            <p className="text-gray-300 text-xs mb-4 line-clamp-2">
              {contact.purpose}
            </p>

            <button className="w-full py-2 bg-white text-black font-bold text-sm rounded flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-colors">
              <Icon className="w-4 h-4" />
              {contact.cta}
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="content-section py-12 mb-20">
      <h2 className="row-title mb-4 px-4 md:px-0">Connect with Vedant</h2>

      {/* Netflix-style horizontal row */}
      <div className="row-scroller flex gap-2 overflow-x-auto px-[4%] py-12 -mx-[4%] scrollbar-hide pb-20">
        {contacts.map((contact) => (
          <ContactCard key={contact.platform} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
