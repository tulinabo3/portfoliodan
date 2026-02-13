const Contact = () => {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-[14%] py-24">
      <div className="contact-main">
        <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-alt-color rounded-full text-other-gray mb-6">
          <i className="fa fa-lightbulb-o"></i>
          <span>Contact</span>
        </a>
        <h2 className="text-5xl font-bold mb-8">
          Got a project? <br />
          <span className="text-main-gold">Let's talk</span>
        </h2>

        <div className="space-y-6 mb-10">
          <div className="group cursor-pointer">
            <p className="text-ann-color text-sm mb-1 uppercase tracking-widest">Email</p>
            <h6 className="text-2xl font-semibold group-hover:text-main-gold transition-colors">tulinabodan3@gmail.com</h6>
          </div>
          <div className="group cursor-pointer">
            <p className="text-ann-color text-sm mb-1 uppercase tracking-widest">Call / WhatsApp</p>
            <h6 className="text-2xl font-semibold group-hover:text-main-gold transition-colors">+243 997786034</h6>
          </div>
        </div>

        {/* Liens Sociaux - Le Hub */}
        <div className="flex flex-wrap gap-4">
          {[
            { icon: 'linkedin', url: 'https://www.linkedin.com/in/tulinabo-christophe-393ba4202/' },
            { icon: 'github', url: 'https://github.com/tulinabo3/' },
            { icon: 'medium', url: 'https://medium.com/@tulinabochristophe3' },
            { icon: 'instagram', url: 'https://instagram.com/tulinabo_dan' }
          ].map((social) => (
            <a 
              key={social.icon} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border border-alt-color rounded-2xl text-ann-color text-xl hover:text-white hover:border-main-gold hover:-translate-y-2 transition-all duration-300"
            >
              <i className={`fa fa-${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Formulaire de contact */}
      <form className="bg-bg-second p-10 rounded-[2.5rem] border border-alt-color/50 flex flex-col gap-5">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="bg-bg-dark p-4 rounded-xl border border-transparent focus:border-main-gold outline-none transition-all"
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="bg-bg-dark p-4 rounded-xl border border-transparent focus:border-main-gold outline-none transition-all"
          required 
        />
        <textarea 
          placeholder="Write Message Here" 
          rows="5" 
          className="bg-bg-dark p-4 rounded-xl border border-transparent focus:border-main-gold outline-none transition-all resize-none"
          required
        ></textarea>
        <button 
          type="submit" 
          className="w-full md:w-max px-10 py-4 bg-gold-gradient text-bg-dark font-bold rounded-2xl hover:scale-105 transition-transform cursor-pointer"
        >
          Submit Now
        </button>
      </form>
    </section>
  );
};

export default Contact;