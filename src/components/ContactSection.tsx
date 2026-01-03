import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom SVG components to replace the deprecated Lucide brand icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mausamwork@gmail.com";
  };

  return (
    <section className="bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 max-w-3xl mx-auto"
        >
          <div className="flex flex-col gap-10">
            {/* Email */}
            <motion.a
              whileHover={{ x: 10 }}
              href="mailto:mausamwork@gmail.com"
              className="flex items-center gap-6 group p-4 -m-4 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Email</span>
                <span className="text-slate-900 text-lg md:text-xl font-bold group-hover:text-blue-600 transition-colors">mausamwork@gmail.com</span>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ x: 10 }}
              href="https://github.com/ThapaMausam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group p-4 -m-4 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 group-hover:scale-110 transition-all duration-300">
                <GithubIcon className="w-6 h-6 text-slate-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">GitHub</span>
                <span className="text-slate-900 text-lg md:text-xl font-bold group-hover:text-blue-600 transition-colors">github.com/ThapaMausam</span>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ x: 10 }}
              href="https://www.linkedin.com/in/mausamtmagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group p-4 -m-4 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <LinkedinIcon className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">LinkedIn</span>
                <span className="text-slate-900 text-lg md:text-xl font-bold group-hover:text-blue-600 transition-colors">linkedin.com/in/mausamtmagar</span>
              </div>
            </motion.a>
          </div>

          {/* Send Email Button */}
          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-200/50"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;