import { Github, Linkedin, Mail, MessageCircle, Send, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    platform: "LinkedIn",
    purpose: "Vedant Srivastava",
    cta: "Connect",
    icon: Linkedin,
    color: "bg-[#0077b5]",
    link: "https://www.linkedin.com/in/vedant-srivastava-b299b9364",
    gradient: "from-blue-600 to-blue-900"
  },
  {
    platform: "Twitter/X",
    purpose: "@breek0307",
    cta: "Follow",
    icon: Twitter,
    color: "bg-[#000000]",
    link: "https://x.com/breek0307",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    platform: "Gmail",
    purpose: "vedaaant0307@gmail.com",
    cta: "Send Email",
    icon: Mail,
    color: "bg-[#EA4335]",
    link: "mailto:vedaaant0307@gmail.com",
    gradient: "from-red-600 to-red-900"
  },
  {
    platform: "Instagram",
    purpose: "_.vedaant_",
    cta: "Follow",
    icon: Instagram,
    color: "bg-[#E4405F]",
    link: "https://instagram.com/_.vedaant_",
    gradient: "from-pink-600 to-pink-900"
  },
  {
    platform: "WhatsApp",
    purpose: "+91 73804 16747",
    cta: "Chat",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    link: "https://wa.me/917380416747",
    gradient: "from-green-600 to-green-900"
  },
  {
    platform: "GitHub",
    purpose: "breek0307",
    cta: "View Code",
    icon: Github,
    color: "bg-[#333]",
    link: "https://github.com/breek0307",
    gradient: "from-gray-600 to-gray-900"
  },
  {
    platform: "Telegram",
    purpose: "+91 73804 16747",
    cta: "Message",
    icon: Send,
    color: "bg-[#0088cc]",
    link: "https://t.me/+917380416747",
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
      className="relative w-[160px] h-[160px] flex-shrink-0 transition-all duration-300 md:w-[180px] md:h-[180px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-black rounded-md overflow-hidden transition-all duration-300 ease-in-out border border-transparent ${isHovered
          ? "z-50 scale-110 shadow-[0_0_20px_rgba(229,9,20,0.4)] border-red-600/50"
          : "z-10 scale-100 border-white/10"
          }`}
      >
        {/* Background Gradient / Poster Style */}
        {/* <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} /> */}

        {/* Large Centered Icon (Poster Art) */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? "-translate-y-4 scale-75 opacity-20" : "scale-100 opacity-100"}`}>
          <Icon className="w-16 h-16 text-white drop-shadow-2xl" />
        </div>

        {/* Hover Overlay Content */}
        <div className={`absolute inset-0 bg-black/90 flex flex-col justify-center items-center p-4 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>

          <div className="text-center transform translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg mb-2">
              {contact.platform}
            </h3>

            <button className="px-4 py-2 bg-white text-black font-bold text-xs rounded hover:bg-red-600 hover:text-white transition-colors">
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
