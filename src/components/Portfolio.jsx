const Portfolio = () => {
  const projects = [
    { 
      title: "Visit my GitHub", 
      category: "All Projects", 
      img: "/images/img1dan.jpg",
      github: "https://github.com/tulinabo3/",
      live: "https://ton-site-live.com"
    },
    { 
      title: "Connect Print", 
      category: "Management Print house System", 
      img: "/images/connect.jpg",
      github: "https://github.com/tulinabo3/connect_print", // Si c'est du design pur, tu peux mettre ton lien Behance ici
      live: "#" 
    },
    { 
      title: "Full Gospel Blog", 
      category: "Blog & Content Creation", 
      img: "/images/fg.jpg",
      github: "https://github.com/tulinabo3/fullgospelBlog",
      live: "#" 
    },
    { 
      title: "Gtinte Auto", 
      category: "Managenent Training Center System", 
      img: "/images/gtinteauto.jpg",
      github: "https://github.com/tulinabo3/gtinteAuto",
      live: "#" 
    }
  ];

  return (
    <section id="portfolio" className="bg-bg-second px-[14%] py-24">
      <div className="text-center mb-16">
        <a href="#portfolio" className="inline-flex items-center gap-2 px-4 py-2 border border-alt-color rounded-full text-other-gray mb-6">
          <i className="fa fa-lightbulb-o"></i>
          <span>My Portfolio</span>
        </a>
        <h2 className="text-5xl font-bold">My latest <span className="text-main-gold">projects</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-bg-dark rounded-[2rem] overflow-hidden group border border-transparent hover:border-alt-color transition-all shadow-xl">
            {/* Image avec Overlay au survol */}
            <div className="overflow-hidden h-64 relative">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
              {/* Overlay qui apparaît au hover pour les liens rapides */}
              <div className="absolute inset-0 bg-bg-dark/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-bg-dark flex items-center justify-center rounded-full hover:bg-main-gold transition-colors">
                  <i className="fa fa-github text-xl"></i>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-bg-dark flex items-center justify-center rounded-full hover:bg-main-gold transition-colors">
                  <i className="fa fa-external-link text-xl"></i>
                </a>
              </div>
            </div>

            {/* Contenu Texte */}
            <div className="p-8 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <h5 className="text-ann-color text-sm uppercase tracking-widest">{project.category}</h5>
              </div>
              
              {/* Bouton flèche classique qui pointe vers le lien Live */}
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gold-gradient text-bg-dark rounded-2xl hover:scale-90 transition-all shadow-lg"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;