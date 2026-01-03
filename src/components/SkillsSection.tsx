import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      color: "bg-blue-400",
      items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      color: "bg-cyan-400",
      items: ["Node.js", "Express.js", "REST APIs", "Socket.io"]
    },
    {
      category: "Database",
      color: "bg-blue-500",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools & DevOps",
      color: "bg-sky-400",
      items: ["Git", "GitHub", "Jira", "Postman"]
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-6 font-sans relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I utilize to build scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <span className={`w-3 h-3 rounded-full ${skillGroup.color} shadow-lg shadow-${skillGroup.color}/50`}></span>
                <h3 className="text-xl font-bold text-slate-200">
                  {skillGroup.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400 font-medium hover:text-blue-400 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
