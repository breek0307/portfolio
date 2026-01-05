import { Play, Info, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

interface ProjectProps {
    title: string;
    tech: string;
    image?: string;
    link: string;
    gradient: string;
    description: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-[220px] h-[130px] flex-shrink-0 transition-all duration-300 md:w-[280px] md:h-[160px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute top-0 left-0 w-full bg-[#141414] rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isHovered
                    ? "z-50 scale-125 -translate-y-[20%] shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
                    : "z-10 scale-100"
                    }`}
            >
                {/* Image Section */}
                <div className="relative w-full aspect-video">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                    )}

                </div>

                {/* Expanded Info Section */}
                <div
                    className={`px-4 py-3 bg-[#181818] transition-opacity duration-300 ${isHovered ? "opacity-100 block" : "opacity-0 hidden"
                        }`}
                >
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mb-3">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:bg-gray-200 transition-colors"
                            title="View Project"
                        >
                            <Play className="w-4 h-4 fill-black text-black" />
                        </a>
                        <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full hover:border-white hover:bg-white/10 transition-colors">
                            <Plus className="w-4 h-4 text-white" />
                        </button>
                        <div className="flex-grow" />
                        <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full hover:border-white hover:bg-white/10 transition-colors ml-auto">
                            <ChevronDown className="w-4 h-4 text-white" />
                        </button>
                    </div>

                    {/* Metadata */}
                    <h3 className="text-white font-bold text-base mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-green-400 font-semibold mb-2">
                        <span>98% Match</span>
                        <span className="border border-gray-500 px-1 text-gray-400">HD</span>
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-300 mb-2">
                        {project.tech.split('•').slice(0, 3).map((tech, i) => (
                            <span key={i} className="flex items-center">
                                {i > 0 && <span className="text-gray-600 mr-2">•</span>}
                                {tech.trim()}
                            </span>
                        ))}
                    </div>

                    <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
