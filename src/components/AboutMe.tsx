

const AboutMe = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          About <span className="text-cyan-500">Me</span>
        </h2>

        {/* Main Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              I'm a passionate <span className="font-bold text-slate-900">MERN Stack Developer</span> with a strong focus on building scalable backend systems and intuitive user interfaces. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a deep commitment to writing clean, maintainable code.
            </p>
            
            <p>
              I specialize in creating full-stack applications using <span className="font-bold text-slate-900">MongoDB, Express.js, React, and Node.js.</span> I'm constantly learning and staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects. I believe in the power of collaboration and continuous improvement.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-200 my-10"></div>

          {/* Footer Info */}
          <div className="flex flex-wrap gap-y-4 gap-x-12 text-sm md:text-base">
            <div className="flex gap-2">
              <span className="text-slate-400 font-medium">Location:</span>
              <span className="text-slate-800 font-semibold">India</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400 font-medium">Experience:</span>
              <span className="text-slate-800 font-semibold">Student</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400 font-medium">Focus:</span>
              <span className="text-slate-800 font-semibold">Full-Stack Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;