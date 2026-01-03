const Hero = () => {
  return (
    <section className="min-h-screen bg-[#f8f9fc] px-6 sm:px-12 lg:px-[8vw] pt-24 sm:pt-28 lg:pt-0">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] lg:min-h-screen">
        
        {/* Hero Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          {/* Available for work badge */}
          <div className="inline-flex items-center gap-2 bg-[#e8f0fe] px-5 py-2.5 rounded-full">
            <div className="w-2.5 h-2.5 bg-[#ec4899] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#1f1f1f]">
              Available for work
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#1f1f1f]">
            Hi, I'm <span className="text-[#ec4899]">Mausam</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f1f1f]">
            MERN Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-[#444] max-w-180">
            I build scalable, performant web applications with React, Node.js, Express, and MongoDB. Passionate about clean code and great user experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="bg-[#4285F4] text-white px-7 py-3.5 rounded-full font-semibold shadow-[0_8px_20px_rgba(66,133,244,0.3)] hover:shadow-[0_12px_28px_rgba(66,133,244,0.35)] hover:-translate-y-0.5 transition-all duration-200 text-center"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="bg-[#e8f0fe] text-[#4285F4] px-7 py-3.5 rounded-full font-semibold hover:bg-[#d2e3fc] transition-colors duration-200 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="relative flex justify-center items-center mt-12 lg:mt-0">
          {/* Gradient Blob */}
          <div 
            className="absolute w-65 h-65 sm:w-95 sm:h-95 opacity-90 blur-2xl sm:blur-[50px] z-0"
            style={{
              background: 'radial-gradient(circle at top left, #8ab4f8, #4285f4)',
              borderRadius: '50% 40% 60% 45% / 55% 45% 55% 45%'
            }}
          />
          
          {/* Profile Image Card */}
          <div className="relative z-10 bg-white rounded-full w-full max-w-100 aspect-square shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            {/* Large Profile Image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-br from-[#4285F4] to-[#8ab4f8]">
              <img 
                src="src/assets/cropped_circle_image.png" 
                alt="Mausam Thapa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;