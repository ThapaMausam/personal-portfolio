import { ExternalLink, Code } from 'lucide-react';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Blog App",
      description: "A modern blog application that enables users to create, edit, view, and delete blog posts through a clean and intuitive interface.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "src/assets/home-page.png",
      link: "https://blog-project-six-ochre.vercel.app",
      github: "https://github.com/ThapaMausam/fullstack-blog-app"
    },
    {
      id: 2,
      title: "Realtime Todo WebSocket App",
      description: "A collaborative, real-time task management application. By utilizing WebSockets, this app ensures that any change—adding, deleting, or completing a task—is instantly synchronized across all connected users without a page refresh.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB", "Typescript"],
      image: "src/assets/system-screenshot.png",
      link: "https://github.com/ThapaMausam/realtime-todo-websocket",
      github: "https://github.com/ThapaMausam/realtime-todo-websocket"
    },
    {
      id: 3,
      title: "Sahara E-Commerce",
      description: "A full stack e-commerce website that enables user to buy products.",
      tags: ["React", "Node.js", "Typescript", "PostgreSQL"],
      image: "",
      link: "https://github.com/ThapaMausam/Student-Career-Counselor-Final-Year-Project",
      github: "https://github.com/ThapaMausam/Student-Career-Counselor-Final-Year-Project"
    },
  ];

return (
    <section className="bg-white py-16 px-4 font-sans antialiased text-[#3c4043]">
      <div className="max-w-6xl mx-auto">

        {/* Refined Minimalist Header Section */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#202124] mb-4">
          Projects
          </h2>
          <p className="max-w-2xl text-[#5f6368] text-base leading-relaxed mx-auto">
          A selection of projects I've built, showcasing my skills in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl border border-[#dadce0] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-44 overflow-hidden bg-[#f8f9fa] flex items-center justify-center border-b border-[#dadce0]">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="px-6 text-center">
                    <span className="text-xl md:text-2xl font-bold text-[#1d1d1f] leading-tight block">
                      In Progress
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col grow">
                <h3 className="text-base font-medium text-[#202124] mb-1">
                  {project.title}
                </h3>
                
                <p className="text-[#5f6368] text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-[#f1f3f4] text-[#5f6368] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions - Scaled down to match image */}
                <div className="flex items-center gap-2 mt-auto">
                  <a target='_blank'
                    href={project.github}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8eaed] text-[#202124] text-[13px] font-medium hover:bg-[#dadce0] transition-colors"
                  >
                    <Code size={14} />
                    <span>GitHub</span>
                  </a>
                  <a target='_blank'
                    href={project.link}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#9ca3af] text-[#c92a62] text-[13px] font-medium hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;