import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CertificationBadges from './components/CertificationBadges';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark font-montserrat text-white selection:bg-main-gold selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="px-[7%] md:px-[14%] pb-24 bg-bg-dark">
        <CertificationBadges />
      </div>
        <Services />
        <Portfolio />
        {/* SECTION MEDIUM (Le flux d'articles via API) */}
        <Blog />

        <Contact />
        {/* On ajoutera About et Contact après */}
      </main>
      
      <footer className="py-10 px-[14%] flex justify-between items-center border-t border-alt-color/30">
        <p className="text-ann-color text-sm">© 2026 Tulinabo @dan. All Rights Reserved.</p>
        <a href="#" className="w-12 h-12 flex items-center justify-center bg-gold-gradient text-bg-dark rounded-2xl">
          <i className="fa fa-arrow-up"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;