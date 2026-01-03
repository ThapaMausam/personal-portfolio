import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import HomePageImg from '../assets/home-page.png';
import SystemScreenshotImg from '../assets/system-screenshot.png';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Blog App",
      description: "A modern blog application that enables users to create, edit, view, and delete blog posts through a clean and intuitive interface.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: HomePageImg,
      link: "https://blog-project-six-ochre.vercel.app",
      github: "https://github.com/ThapaMausam/fullstack-blog-app"
    },
    {
      id: 2,
      title: "Realtime Todo WebSocket App",
      description: "A collaborative, real-time task management application. By utilizing WebSockets, this app ensures that any change—adding, deleting, or completing a task—is instantly synchronized across all connected users without a page refresh.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB", "Typescript"],
      image: SystemScreenshotImg,
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
    <section className="bg-slate-50 py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Refined Minimalist Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed mx-auto">
            A selection of projects I've built, showcasing my skills in full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="h-52 overflow-hidden bg-slate-100 relative">
                {project.image ? (
                  <>
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="px-6 text-center">
                      <span className="text-xl font-bold text-slate-300 uppercase tracking-widest">
                        In Progress
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <a target='_blank'
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-all flex-1 justify-center"
                  >
                    <Code size={16} />
                    <span>GitHub</span>
                  </a>
                  <a target='_blank'
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;