
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 font-sans relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12 tracking-tight"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50"
        >
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg md:text-xl font-light">
            <p>
              I'm a passionate <span className="font-semibold text-slate-900">MERN Stack Developer</span> with a strong focus on building scalable backend systems and intuitive user interfaces. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a deep commitment to writing clean, maintainable code.
            </p>

            <p>
              I specialize in creating full-stack applications using <span className="font-semibold text-slate-900 border-b-2 border-blue-200 hover:border-blue-500 transition-colors">MongoDB, Express.js, React, and Node.js.</span> I'm constantly learning and staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects. I believe in the power of collaboration and continuous improvement.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-10"></div>

          {/* Footer Info */}
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">Location</span>
              <span className="text-slate-800 font-semibold">India</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">Experience</span>
              <span className="text-slate-800 font-semibold">Student</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">Focus</span>
              <span className="text-slate-800 font-semibold">Full-Stack Web Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;