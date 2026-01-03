import { useState } from "react";
import { Home, Folder, Sparkles, Mail, User } from "lucide-react";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const navItems = [
        { name: "Home", icon: <Home size={20} /> },
        { name: "Projects", icon: <Folder size={20} /> },
        { name: "Skills", icon: <Sparkles size={20} /> },
        { name: "About Me", icon: <User size={20} /> },
        { name: "Contact", icon: <Mail size={20} /> },
    ];

    return (
        // Positioning the whole bar
        <div className="fixed left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 
            /* Mobile: bottom */ 
            bottom-8 
            /* Tablet/Desktop: top */ 
            md:top-8 md:bottom-auto">

            {/* 1. Main Pill Container */}
            <div className="flex items-center gap-1 bg-gray-100/80 p-2 px-4 rounded-full border border-gray-200 backdrop-blur-md shadow-lg">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        // ADDED 'group' HERE: This allows the tooltip to react to the button hover
                        className={`group p-3 rounded-full transition-all duration-300 relative flex items-center gap-2 ${
                            activeTab === item.name 
                                ? "bg-white text-blue-600 shadow-sm px-4"  // Active Styles (slightly wider)
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50" // Inactive Styles
                        }`}
                        aria-label={item.name}
                    >
                        {/* Icon Wrapper */}
                        <span>{item.icon}</span>

                        {/* Only the active tab name shows */}
                        {activeTab === item.name && (
                            <span className="font-medium text-sm transition-opacity duration-300">
                                {item.name}
                            </span>
                        )}

                        {/* Tooltip for non-active tabs */}
                        {activeTab !== item.name && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-md 
                                opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                                transition-all duration-200 pointer-events-none whitespace-nowrap hidden md:block shadow-xl">
                                {item.name}
                                {/* Small Triangle Arrow for the tooltip */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* 2. Dark Mode Toggle
            <button className="p-3 rounded-full bg-gray-100/80 border border-gray-200 shadow-lg hover:bg-gray-200 transition-colors">
                <Moon size={20} />
            </button> */}

        </div>
    );
};

export default NavBar;