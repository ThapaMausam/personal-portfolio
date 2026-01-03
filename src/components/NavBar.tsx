import { useState, useEffect } from "react";
import { Home, Folder, Sparkles, Mail, User } from "lucide-react";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("home");

    const navItems = [
        { name: "Home", icon: <Home size={20} />, id: "home" },
        { name: "Projects", icon: <Folder size={20} />, id: "projects" },
        { name: "Skills", icon: <Sparkles size={20} />, id: "skills" },
        { name: "About Me", icon: <User size={20} />, id: "about" },
        { name: "Contact", icon: <Mail size={20} />, id: "contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveTab(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveTab(section.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed left-1/2 -translate-x-1/2 z-50 bottom-8 md:top-8 md:bottom-auto w-fit max-w-[90vw]">
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 px-3 rounded-full border border-slate-700/50 backdrop-blur-xl shadow-2xl">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => scrollToSection(item.id)}
                        className={`group relative p-3 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden ${activeTab === item.id
                                ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        aria-label={item.name}
                    >
                        <span className="relative z-10">{item.icon}</span>

                        {activeTab === item.id && (
                            <span className="relative z-10 font-medium text-sm hidden sm:block animate-in fade-in slide-in-from-left-2 duration-300">
                                {item.name}
                            </span>
                        )}

                        {activeTab !== item.id && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg 
                                opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                                transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
                                {item.name}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NavBar;