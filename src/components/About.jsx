import React from 'react';

const About = () => {
  // Compétences basées sur ton CV et tes certifications [cite: 28, 30, 39]
  const skills = [
    { name: 'Cloud & Infrastructure (AWS Certified)', level: 75 },
    { name: 'Software Dev & automatisation (React/Php/Python/SQL)', level: 75 },
    { name: 'Cybersecurity & Networking (Cisco)', level: 65 },
    { name: 'Data analyst (Python, Power BI, SQL)', level: 70 },
    { name: 'Graphic & Motion Design', level: 70 }
  ];

  return (
    <section id="about" className="px-[7%] md:px-[14%] py-24 bg-bg-dark transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Côté Gauche : Ta Photo Signature */}
        <div className="flex justify-center relative">
          <div className="w-[320px] h-[450px] md:w-[380px] md:h-[520px] bg-[#c19a8a] rounded-[100px_40px_100px_40px] overflow-hidden border-8 border-white/5 shadow-2xl relative z-10">
            <img 
              src="/images/about2.png" 
              alt="Tulinabo Christophe Dan" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          {/* Décoration géométrique pro */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-main-gold/30 rounded-bl-[40px] hidden md:block"></div>
        </div>

        {/* Côté Droit : Contenu Expert */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-white/20 rounded-full text-xs mb-6 bg-white/5">
            <i className="fa fa-certificate text-main-gold"></i>
            <span className="text-white font-bold tracking-widest uppercase">AWS Certified Cloud Practitioner</span>
          </div>
          
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-8">
            More <span className="bg-gold-gradient bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <div className="space-y-6 text-lg">
            <p className="text-white font-medium leading-relaxed">
              Hello! I'm <span className="text-main-gold font-bold">Tulinabo Christophe Dan</span>, an Applied Computer Science Engineer, 
            <span className="text-main-gold"> AWS Certified Cloud Practitioner</span> and <span className="text-main-gold">Cybersecurity</span>, 
              I bridge the gap between secure infrastructures and high-end digital experiences.
            </p>
            
            {/* Skill Chart : Visualisation des compétences [cite: 30, 35, 36] */}
            <div className="py-6 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{skill.name}</span>
                    <span className="text-main-gold text-xs font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold-gradient transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(193,154,138,0.4)]" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grille de Certifications Rapide [cite: 28] */}
          <div className="grid grid-cols-4 gap-4 py-6 border-y border-white/5 my-8">
            {['AWS', 'Cisco', 'Linux', 'React'].map((cert) => (
              <div key={cert} className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <i className={`fa ${cert === 'AWS' ? 'fa-cloud' : cert === 'Cisco' ? 'fa-shield' : cert === 'Linux' ? 'fa-linux' : 'fa-code'} text-main-gold text-xl`}></i>
                <span className="text-[9px] text-white font-bold uppercase">{cert}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-5">
            <a 
              href="https://wa.me/243997786034" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 bg-white dark:bg-white text-bg-dark font-bold rounded-2xl flex items-center gap-3 hover:bg-main-gold hover:text-white transition-all shadow-xl"
            >
              Hire Me <i className="fa fa-arrow-right"></i>
            </a>

            <a 
              href="/cv_2026.pdf" 
              download="CV_Tulinabo_Dan.pdf" 
              className="px-8 py-4 border border-main-gold text-main-gold font-bold rounded-2xl flex items-center gap-3 hover:bg-main-gold/10 transition-all"
            >
              Download CV <i className="fa fa-download"></i>
            </a>
          </div>

          {/* LinkedIn Match [cite: 49] */}
          <div className="mt-8">
            <a 
              href="https://www.linkedin.com/in/tulinabo-christophe-393ba4202/" 
              target="_blank" 
              rel="noreferrer"
              className="text-other-gray hover:text-[#0077b5] flex items-center gap-2 text-sm transition-colors group"
            >
              <i className="fa fa-linkedin-square text-xl group-hover:scale-110 transition-transform"></i>
              <span className="italic">Connect on LinkedIn for professional network</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;