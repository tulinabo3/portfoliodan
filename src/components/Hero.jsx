

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation de flottement pour l'image
  const imageFloating = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-bg-dark px-6 sm:px-[10%] md:px-[14%] py-20 transition-colors duration-500">
      
      {/* --- L'ORB ANIMÉE (Inspirée de la vidéo - S'adapte au mode) --- */}
      <div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full opacity-40 dark:opacity-60"
        >
          <div className="absolute inset-0 bg-main-gold/30 blur-[100px] rounded-full"></div>
          <div className="absolute inset-10 bg-purple-500/10 dark:bg-purple-600/20 blur-[80px] rounded-full"></div>
        </motion.div>
      </div>

      {/* --- BLOC IMAGE (Côté Droit - Correction de la coupure basse) --- */}
      <div className="absolute right-[-5%] lg:right-[0%] bottom-0 w-[100%] md:w-[60%] lg:w-[50%] h-[80%] md:h-[90%] z-[1] pointer-events-none flex items-end">
        <motion.div 
          animate={imageFloating}
          className="relative w-full h-full flex items-end"
        >
          <img 
            src="./images/backimageColor.png" 
            alt="Hero Visual" 
            className="w-full h-full object-contain object-bottom opacity-70 md:opacity-100 transition-opacity duration-700"
            style={{
              // DOUBLE MASQUE : Fond l'image à gauche ET en bas pour éviter l'effet "coupé"
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%), linear-gradient(to left, black 60%, transparent 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 15%), linear-gradient(to left, black 60%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect'
            }}
          />
        </motion.div>
      </div>

      {/* --- CONTENU TEXTE --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-main-gold/30 rounded-full bg-white/5 backdrop-blur-md mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute h-full w-full rounded-full bg-main-gold opacity-75"></span>
            <span className="relative rounded-full h-2 w-2 bg-main-gold"></span>
          </span>
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-white/80 transition-colors">
            Available for Cloud & IT Projects
          </p>
        </div>

        {/* Titre */}
       <h1 className="text-5xl sm:text-8xl md:text-6xl font-bold text-white leading-[0.99] tracking-tighter mb-10">
          Applied Computer <br />
          <span className="bg-gold-gradient bg-clip-text text-transparent animate-gradient-x inline-block">
            Science Engineer
          </span>
        </h1>

        {/* Spécialisations (Version Cartes Glass) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 w-full max-w-lg md:max-w-none">
          {[
            { icon: 'cloud', title: 'Cloud', desc: 'AWS Certified' },
            { icon: 'shield', title: 'Security', desc: 'CyberOps' },
            { icon: 'code', title: 'Dev', desc: 'Fullstack' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm transition-all"
            >
              <i className={`fa fa-${item.icon} text-2xl text-main-gold`}></i>
              <div className="text-left">
                <p className="text-gray-900 dark:text-white font-bold text-sm leading-none transition-colors">{item.title}</p>
                <p className="text-gray-500 dark:text-other-gray text-xs transition-colors">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boutons */}
       <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a href="#portfolio" className="group relative px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden text-center transition-transform active:scale-95">
            <div className="absolute inset-0 bg-main-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 group-hover:text-white transition-colors">EXPLORE WORK</span>
          </a>
          
          <a href="/cv.pdf" className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:border-main-gold transition-all text-center flex items-center justify-center gap-3 group">
            DOWNLOAD CV 
            <i className="fa fa-download group-hover:animate-bounce"></i>
          </a>
        </div>



      </motion.div>

      {/* Déco Scroll */}
      <div className="absolute left-6 bottom-10 hidden md:flex flex-col items-center gap-4">
        <div className="w-[1px] h-24 bg-gradient-to-t from-main-gold to-transparent"></div>
        <span className="rotate-90 text-[10px] tracking-[0.5em] text-main-gold font-bold origin-left">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;