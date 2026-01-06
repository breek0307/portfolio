import { useRef } from "react";
import RevealOnScroll from "./RevealOnScroll";

const journeyPoints = [
    "Build-first approach to learning web development",
    "Focus on real projects and deployments",
    "Continuous improvement through iteration",
    "Currently building production-ready skills",
];

const JourneySection = () => {
    return (
        <section id="journey" className="content-section py-16 relative overflow-hidden">
            <h2 className="row-title mb-12 px-4 md:px-0">My Journey</h2>

            <div className="relative max-w-3xl mx-auto px-6">
                {/* Vertical Red Line */}
                <div className="absolute left-[39px] md:left-[47px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>

                <div className="space-y-12">
                    {journeyPoints.map((point, index) => (
                        <RevealOnScroll key={index} delay={index * 150} threshold={0.2}>
                            <div className="flex gap-8 group">
                                <div className="relative z-10 flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-black border-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                                </div>

                                <div className="flex-1 -mt-1 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors duration-500">
                                    <h3 className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-display tracking-wide">
                                        {point}
                                    </h3>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
