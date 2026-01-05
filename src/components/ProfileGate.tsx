import { useState } from "react";

interface ProfileGateProps {
  onEnter: () => void;
  isHidden: boolean;
}

const ProfileGate = ({ onEnter, isHidden }: ProfileGateProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`profile-gate ${isHidden ? 'hidden' : ''}`}>
      <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide animate-fade-in-up opacity-0">
        Who's watching?
      </h1>
      
      <div 
        className="flex flex-col items-center cursor-pointer animate-fade-in-up opacity-0 animate-delay-2"
        onClick={onEnter}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`profile-avatar ${isHovered ? 'border-white' : ''}`}>
          V
        </div>
        <span className={`mt-4 text-lg tracking-wide transition-colors duration-300 ${isHovered ? 'text-white' : 'text-muted-foreground'}`}>
          Vedant
        </span>
      </div>
      
      <button className="mt-16 px-6 py-2 border border-muted-foreground text-muted-foreground text-sm tracking-[3px] uppercase hover:text-white hover:border-white transition-colors animate-fade-in-up opacity-0 animate-delay-4">
        Manage Profiles
      </button>
    </div>
  );
};

export default ProfileGate;
