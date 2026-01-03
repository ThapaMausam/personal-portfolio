import { motion } from "framer-motion";
import ProfileImage from "../assets/cropped_circle_image.png";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[#0f172a]" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
        >
          {/* Available for work badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Mausam</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400">
              MERN Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-2xl">
            I build scalable, performant web applications with React, Node.js, Express, and MongoDB.
            Passionate about clean code and great user experiences.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-white/25 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-center backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Abstract Shapes */}
          <div className="absolute w-[80%] h-[80%] border-2 border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-[60%] h-[60%] border-2 border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          {/* Profile Image Card */}
          <div className="relative z-10 p-4 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl skew-y-0 hover:skew-y-1 transition-transform duration-500">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <img
                src={ProfileImage}
                alt="Mausam Thapa"
                className="w-full h-full object-cover rounded-full filter hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;