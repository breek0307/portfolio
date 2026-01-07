import { Github, Linkedin, Mail, MessageCircle, Send, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const contacts = [
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
    platform: "LinkedIn",
    purpose: "Vedant Srivastava",
    cta: "Connect",
    icon: Linkedin,
    color: "bg-[#0077b5]",
    link: "https://www.linkedin.com/in/vedant-srivastava-b299b9364",
    gradient: "from-blue-600 to-blue-900"
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
    platform: "Twitter",
    purpose: "@breek0307",
    cta: "Follow",
    icon: Twitter,
    color: "bg-[#000000]",
    link: "https://x.com/breek0307",
    gradient: "from-gray-700 to-gray-900"
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
    platform: "Instagram",
    purpose: "_.vedaant_",
    cta: "Follow",
    icon: Instagram,
    color: "bg-[#E4405F]",
    link: "https://instagram.com/_.vedaant_",
    gradient: "from-pink-600 to-pink-900"
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
    <div
      className="relative w-[160px] h-[160px] flex-shrink-0 transition-all duration-300 md:w-[180px] md:h-[180px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute top-0 left-0 w-full bg-[#141414] rounded-md overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-white/5 ${isHovered
          ? "z-50 scale-125 -translate-y-[20%] shadow-[0_20px_50px_rgba(220,38,38,0.3)] border-red-600/30"
          : "z-10 scale-100 shadow-none hover:border-white/20"
          }`}
      >
        {/* Icon / Cover Section - Fixed Height to prevent jumpiness */}
        <div className={`w-full h-[160px] md:h-[180px] flex items-center justify-center transition-all duration-500 ${isHovered ? "bg-black/80" : "bg-transparent"}`}>
          <Icon
            className={`text-white transition-all duration-500 drop-shadow-lg ${isHovered ? "w-8 h-8 -translate-y-4" : "w-16 h-16 scale-100"
              }`}
          />
        </div>

        {/* Revealed Info Section - Smooth Slide Down */}
        <div
          className={`bg-[#181818] w-full transition-all duration-500 ease-in-out overflow-hidden ${isHovered ? "max-h-[160px] opacity-100 py-3 px-3" : "max-h-0 opacity-0 py-0 px-3"
            }`}
        >
          {/* Action Row */}
          <div className="flex items-center justify-between mb-2">
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white text-black text-[10px] font-bold uppercase rounded hover:bg-red-600 hover:text-white transition-colors flex items-center gap-1 w-full justify-center"
            >
              <span className="truncate">{contact.cta}</span>
            </a>
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-2 text-[10px] text-green-400 font-semibold mb-1.5">
            <span>98% Match</span>
            <span className="border border-gray-500 px-1 text-gray-400 text-[8px] rounded-[2px]">HD</span>
            <span className="text-[8px] text-gray-500 border border-gray-600 px-1 rounded-[2px]">5.1</span>
          </div>

          <h3 className="text-white font-bold text-xs mb-0.5 truncate">{contact.platform}</h3>

          <p className="text-[10px] text-gray-400 line-clamp-1 font-medium">
            {contact.purpose}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="content-section py-0 mb-8">
      <h2 className="row-title mb-4 px-4 md:px-0">connect with vedant</h2>

      {/* Netflix-style horizontal row with extra padding for hover effects */}
      <div className="row-scroller flex gap-5 overflow-x-auto px-[4%] pt-24 pb-40 -mx-[4%] -mt-4 scrollbar-hide">
        {contacts.map((contact) => (
          <ContactCard key={contact.platform} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
