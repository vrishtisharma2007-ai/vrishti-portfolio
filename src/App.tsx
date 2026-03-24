/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Mic2, 
  Code2, 
  Network, 
  Database, 
  Cpu, 
  Eye, 
  Wrench, 
  Mail, 
  Linkedin, 
  Github,
  Terminal
} from "lucide-react";

export default function App() {
  const navItems = [
    { name: "Hero", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Distance Measurement & Lane Detection System",
      category: "Computer Vision",
      accent: "text-primary",
      description: "Enhancing road safety through real-time computer vision.",
      problem: "Manual driving often lacks consistent awareness of lane positioning and safe distances, especially in low-visibility conditions.",
      approach: "Developed a system using OpenCV to process live video feeds, detecting lane boundaries and estimating distance to obstacles.",
      result: "Successfully demonstrated robust lane tracking and proximity alerts in varying lighting environments.",
      tags: ["Python", "OpenCV", "Computer Vision"],
      image: "https://lh3.googleusercontent.com/aida/ADBb0uiDHNI1LL-k4DmoojUfKheSFIVXExNerX8AjV5-FngArFkTR5IzG4-EX8Y7tAVZG5m4qw5mf22keh_KGNLH6eqWeiUDcguJ_vXBiqkAbTEfymabeF2Ef4A-PhOGmdP3k6g4CI_4t90fNv37Chnyo1ZtuH05iLUcJvgaVmyy1dfCuJw_a-L3qxhHRhPvNhuuxHVpTxIxSGjkWVDt67iSUO0fGwmUFzlJH1UoHxnz5tx1bGj374U2zWQCLi2AQSeNRHaQ6TzQNW2DLQ",
      reverse: false
    },
    {
      title: "Driver Drowsiness Detection System",
      category: "Safety AI",
      accent: "text-secondary",
      description: "Detecting fatigue before it becomes dangerous.",
      problem: "Driver fatigue is a major cause of highway accidents globally, often going unnoticed by the driver themselves.",
      approach: "Leveraged facial landmark detection and eye-tracking algorithms to monitor Eye Aspect Ratio (EAR) in real-time.",
      result: "The system identifies closed eyes for a sustained period and triggers an immediate audio alert to wake the driver.",
      tags: ["Python", "OpenCV", "Dlib"],
      image: "https://lh3.googleusercontent.com/aida/ADBb0ui8965abKv_EbL0U0Qmd8RT7r3OlWV_aqHv7HKrd79upvc2P5cYt10rKKiIZRAvyzSCGTQaz99vzU_xc_op18NPOnrk2houEJw9Mx93jpuCpE9oM980duPY0jPT3novN3IyztepyFi9ArPXCc1osNiTJiWCCBKpNIhciuucBqdbJTpj-DEr6FfD6BaLfc9iVEk9P29wVv6Ah1EuawOtsZQbiZBplDgRlyyYfozZLVKwTHvqhqSRIcqSTzowqSbRshYQV-LPzH9KpA",
      reverse: true
    },
    {
      title: "Airbnb Website Redesign",
      category: "UI/UX Design",
      accent: "text-tertiary",
      description: "Redesigning user experience with a clean and intuitive interface.",
      problem: "Many booking interfaces suffer from information overload and cluttered navigation patterns.",
      approach: "Created high-fidelity wireframes focusing on visual hierarchy, accessibility, and streamlined search flows.",
      result: "A modern, user-friendly redesign that prioritizes imagery and ease of conversion.",
      tags: ["Figma", "UI Design", "Prototyping"],
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujHjKf1hNCOypQnvSUtk8-x27DInOiSGoxM1pF7q7IEigo1-xIZOvYQwJRfuumTml7IZ6C7Xvp5U3xSy9id2mIR9hxiCGtgA9Q2Fn6nFktU-kKLXCG7n1p6MV2VrcWnm6XQJHS4v9AKIRDE7Ufchlh_nvDXyj_bXFY7y7X2skfiYAktmgio0f7-K0DD6xjpMmfA4gbt68PgtF36xDrHojxX6je1RIXG3cV0oqBpfVObKbcbKNskigw93fbsLYO6blJepuhqGDTY4Q",
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-surface-container-highest font-headline antialiased tracking-tight">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-on-surface-variant hover:text-primary transition-all duration-200 active:scale-95"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label font-semibold hover:opacity-90 active:scale-95 transition-all">
            Resume
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[870px] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-container/40 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary-container/30 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant text-primary font-label text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for collaborations
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-tight tracking-tighter text-on-surface">
                Vrishti Sharma, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Computer Science Student</span> (AIML)
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Exploring the intersection of intelligent systems and real-world problem solving. Passionate about building practical solutions using AI, computer vision, and intuitive web design.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects"
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                >
                  View Projects <ArrowRight size={20} />
                </a>
                <button className="border border-outline px-8 py-4 rounded-xl font-semibold hover:bg-surface-container-low transition-all active:scale-95 text-on-surface">
                  Resume
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass-card p-4">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhCutRgZigBStnTfapRl5UyeU5E1tZ2cNwyqajBTgr-xfeW6pGsR1oa0fZB3xS36WX7YhVgf9yPx4-q6-HURhpPN3oX74WQoe2I7Ntuz1srURmlPAGQnBMLTfkZOkLQ-jPdwqBvK1yztwTc_UHjKiH_-eHzT658Ytv482RBVp_Q6_6b01LJ6sO-i0hgnh-Pawg7k2RdNimbNTLRkiGhzgIkwz_ts61tu81mS3-OXrXzz_OAqLCBXDl87DzstTILWg0xliqJ2S3iRQ" 
                  alt="Vrishti Sharma" 
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-sm text-on-surface-variant">Specialization</div>
                  <div className="font-bold text-on-surface">AIML & Computer Vision</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-on-surface">Featured Projects</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${project.reverse ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-10 group-hover:opacity-25 transition duration-1000`}></div>
                    <div className="relative glass-card rounded-2xl overflow-hidden aspect-video border border-outline-variant/30 shadow-sm">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 space-y-6 ${project.reverse ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <span className={`${project.accent} font-label tracking-widest uppercase text-sm font-bold`}>{project.category}</span>
                  <h3 className="text-3xl font-bold font-headline text-on-surface">{project.title}</h3>
                  <p className={`${project.accent} font-medium`}>{project.description}</p>
                  <div className="space-y-4 text-on-surface-variant">
                    <p><strong className="text-on-surface">Problem:</strong> {project.problem}</p>
                    <p><strong className="text-on-surface">Approach:</strong> {project.approach}</p>
                    <p><strong className="text-on-surface">Result:</strong> {project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-highest rounded-full text-xs font-label text-on-surface">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-surface-container-low px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiWe4pluFJF6aAUFkp8JhOYVtdMuTuWYnVhNro-eYup1a4JUNZgkMKqT4EUN7uGBCzHPVjBS1eFkWEDUD_DsF_IIQR8XvSIaOsYvfqCtxcAALiTo_9va20JtS-uw6p1cjymgyVTHDQuAaW3Jdp-gkLWigg53AKDU4ShI5Wg3o53pXsitQIcpvTu0ucKJgOIEKrxQD9NI2eNSSnpM-NrDh8h7rXK0hQLGlI88YuNFdmynovkf53Qnv1CLXopqqP3s3rsJf_S1bobgw" 
                  alt="Vrishti Sharma portrait" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold text-on-surface">About Me</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                I am a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning. My journey is driven by a curiosity to understand how intelligent algorithms can solve complex, real-world problems—from road safety to user interface optimization.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Beyond the world of code and mathematical models, I am a passionate singer. Singing serves as my creative outlet, allowing me to find balance and express a different facet of my personality. This blend of technical rigor and artistic expression shapes my approach to building intuitive and aesthetically pleasing tech solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
                  <Brain className="text-primary mb-2" size={24} />
                  <h4 className="font-bold text-on-surface">Logic</h4>
                  <p className="text-sm text-on-surface-variant">Structured thinking and AIML research.</p>
                </div>
                <div className="p-4 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
                  <Mic2 className="text-secondary mb-2" size={24} />
                  <h4 className="font-bold text-on-surface">Creativity</h4>
                  <p className="text-sm text-on-surface-variant">Singing and UI/UX design exploration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-on-surface">Technical Proficiency</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">A matrix of my core competencies across programming, domain expertise, and professional tools.</p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Languages */}
            <div className="col-span-12 md:col-span-4 glass-card p-8 rounded-3xl space-y-6 shadow-sm border border-outline-variant">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold font-headline text-on-surface">Languages</h3>
              <ul className="space-y-4">
                {[
                  { name: "Python", level: "Advanced" },
                  { name: "C++", level: "Proficient" },
                  { name: "C", level: "Proficient" }
                ].map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high/40">
                    <span className="font-medium text-on-surface">{lang.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Core Areas */}
            <div className="col-span-12 md:col-span-8 glass-card p-8 rounded-3xl space-y-6 shadow-sm border border-outline-variant">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
                <Network size={24} />
              </div>
              <h3 className="text-2xl font-bold font-headline text-on-surface">Core Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: "DSA", desc: "Data Structures & Algorithms", icon: <Database size={20} /> },
                  { name: "AIML", desc: "Intelligent System Design", icon: <Cpu size={20} /> },
                  { name: "CV", desc: "Computer Vision processing", icon: <Eye size={20} /> }
                ].map((area) => (
                  <div key={area.name} className="p-4 rounded-xl bg-surface-container-high/40 border border-outline-variant hover:border-secondary transition-colors group">
                    <div className="text-secondary block mb-2 group-hover:scale-110 transition-transform">
                      {area.icon}
                    </div>
                    <div className="font-bold text-on-surface">{area.name}</div>
                    <p className="text-xs text-on-surface-variant mt-1">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Tools */}
            <div className="col-span-12 glass-card p-8 rounded-3xl shadow-sm border border-outline-variant">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/40 flex items-center justify-center text-tertiary">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-headline text-on-surface">Tools & Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["OpenCV", "Dlib", "Figma", "Git/GitHub", "PyTorch"].map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-full border border-outline-variant text-sm font-label text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">Let’s connect and build something meaningful.</h2>
              <p className="text-on-surface-variant text-lg">Open to discussions about AI/ML opportunities, creative projects, or just a friendly tech chat.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a className="group flex flex-col items-center gap-3" href="mailto:vrishtisharma2007@gmail.com">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border border-outline-variant group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm">
                  <Mail size={32} />
                </div>
                <span className="font-label text-sm font-medium text-on-surface">Email</span>
              </a>
              <a className="group flex flex-col items-center gap-3" href="https://www.linkedin.com/in/vrishti-sharma-21st042007" target="_blank" rel="noreferrer">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border border-outline-variant group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm">
                  <Linkedin size={32} />
                </div>
                <span className="font-label text-sm font-medium text-on-surface">LinkedIn</span>
              </a>
              <a className="group flex flex-col items-center gap-3" href="https://github.com/vrishtisharma2007-ai" target="_blank" rel="noreferrer">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border border-outline-variant group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm">
                  <Github size={32} />
                </div>
                <span className="font-label text-sm font-medium text-on-surface">GitHub</span>
              </a>
            </div>
            <div className="pt-12">
              <div className="glass-card p-1 rounded-full inline-flex items-center pr-6 gap-4 border border-outline-variant shadow-sm">
                <div className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold">Latest Update</div>
                <span className="text-sm font-medium text-on-surface">Currently refining computer vision models for road safety.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-12 mt-auto border-t border-surface-container-highest font-body text-sm text-on-surface-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto">
          <p className="mb-6 md:mb-0">© 2024 AI/ML Specialist. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/vrishti-sharma-21st042007">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/vrishtisharma2007-ai">GitHub</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:vrishtisharma2007@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
