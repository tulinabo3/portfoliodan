import React from 'react';

const Services = () => {
  const servicesData = [
    {
      icon: "cloud", // AWS & Infrastructure
      title: "Cloud & Infrastructure",
      desc: "Architectures AWS sécurisées, déploiement d'applications et optimisation de la disponibilité système pour garantir la continuité des services."
    },
    {
      icon: "shield", // Cybersecurity
      title: "CyberOps & Security",
      desc: "Audit de sécurité, sécurisation des environnements Linux et surveillance réseau (Cisco) pour protéger vos données contre les menaces."
    },
    {
      icon: "terminal", // Fullstack Dev
      title: "Fullstack Development",
      desc: "Développement d'applications critiques (React, Python, SQL) comme HGR Makala, focalisées sur l'automatisation et l'expérience utilisateur."
    },
    {
      icon: "video-camera", // Motion Design (Ta fibre artistique)
      title: "Digital & Motion Design",
      desc: "Création d'identités visuelles et motion design (After Effects/Photoshop) pour une communication digitale impactante."
    }
  ];

  return (
    <section id="services" className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 px-[7%] md:px-[14%] py-24 bg-bg-dark transition-colors duration-500">
      
      {/* Côté Gauche : Texte Stratégique */}
      <div className="services-left sticky top-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-main-gold/30 rounded-full text-main-gold mb-6 bg-main-gold/5">
          <i className="fa fa-lightbulb-o"></i>
          <span className="text-xs font-bold uppercase tracking-widest">Expertise Technique</span>
        </div>
        
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Solutions IT <br />
          <span className="bg-gold-gradient bg-clip-text text-transparent ">Haute Performance</span>
        </h2>
        
        <p className="text-other-gray leading-loose mb-10 text-lg max-w-md">
          Je combine mon expertise en <span className="text-white font-bold">Génie Informatique Appliqué</span> et mes certifications <span className="text-white font-bold">AWS/Cisco</span> pour offrir des solutions numériques sécurisées, scalables et esthétiques.
        </p>
        
        <div className="flex gap-5">
          <a 
            href="https://wa.me/243997786034" 
            className="px-8 py-4 bg-white text-bg-dark rounded-2xl font-bold hover:bg-main-gold hover:text-white transition-all shadow-xl flex items-center gap-3"
          >
            Démarrer un projet <i className="fa fa-whatsapp text-xl"></i>
          </a>
        </div>
      </div>

      {/* Côté Droit : Les Cartes de Services */}
      <div className="grid gap-6">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="group flex flex-col sm:flex-row items-start gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-main-gold/30 transition-all duration-500 cursor-default hover:-translate-y-2"
          >
            {/* Icône Stylisée */}
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gold-gradient text-bg-dark text-2xl rounded-2xl shadow-lg shadow-main-gold/20 group-hover:rotate-6 transition-transform">
              <i className={`fa fa-${service.icon}`}></i>
            </div>
            
            <div>
              <h5 className="text-2xl font-bold text-white mb-3 group-hover:text-main-gold transition-colors">
                {service.title}
              </h5>
              <p className="text-other-gray leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;