import { Mail } from 'lucide-react';

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600 text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white border border-slate-200 rounded-[40px] p-10 md:p-16 shadow-sm max-w-2xl mx-auto">
          <div className="flex flex-col gap-10">
            {/* Email */}
            <a href="mailto:mausamwork@gmail.com" className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Mail className="w-5 h-5 text-blue-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-sm font-medium">Email</span>
                <span className="text-slate-900 text-lg font-semibold">mausamwork@gmail.com</span>
              </div>
            </a>

            {/* GitHub - Using Custom SVG */}
            <a href="https://github.com/ThapaMausam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <GithubIcon className="w-5 h-5 text-blue-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-sm font-medium">GitHub</span>
                <span className="text-slate-900 text-lg font-semibold">github.com/ThapaMausam</span>
              </div>
            </a>

            {/* LinkedIn - Using Custom SVG */}
            <a href="https://www.linkedin.com/in/mausamtmagar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-blue-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-sm font-medium">LinkedIn</span>
                <span className="text-slate-900 text-lg font-semibold">linkedin.com/in/mausamtmagar</span>
              </div>
            </a>
          </div>

          {/* Send Email Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-2 bg-[#d1417a] hover:bg-[#b83569] text-white px-8 py-4 rounded-full font-medium transition-all transform active:scale-95 shadow-lg shadow-pink-100"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;