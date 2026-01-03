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
    <section className="bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Technical <span className="text-sky-500">Skills</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-3 h-3 rounded-full ${skillGroup.color}`}></span>
                <h3 className="text-xl font-bold text-slate-800">
                  {skillGroup.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="text-slate-600 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
