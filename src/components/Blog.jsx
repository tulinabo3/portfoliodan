import { useEffect, useState } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour extraire l'image si thumbnail est absent
  const getImageUrl = (item) => {
    if (item.thumbnail && !item.thumbnail.includes("stat?event")) {
      return item.thumbnail;
    }
    // Si pas de thumbnail, on cherche une balise <img> dans la description
    const match = item.description.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : "/images/fallback-blog.jpg"; // Image par défaut si rien n'est trouvé
  };

  useEffect(() => {
    // REMPLACE "@ton-pseudo" par ton vrai pseudo Medium !
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tulinabochristophe3";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setArticles(data.items.slice(0, 3));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur Medium:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="text-center py-20">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-main-gold border-t-transparent rounded-full mb-4"></div>
      <p className="text-ann-color italic">Fetching Medium stories...</p>
    </div>
  );

  return (
    <section className="px-[14%] py-24 bg-bg-dark">
      <div className="text-center mb-16">
         <h2 className="text-4xl font-bold">
           Latest on <span className="text-main-gold">Medium</span>
         </h2>
         <div className="w-20 h-1 bg-gold-gradient mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, i) => (
          <div key={i} className="group bg-bg-second rounded-[2rem] border border-alt-color/50 overflow-hidden flex flex-col hover:border-main-gold transition-all duration-500 shadow-xl">
            {/* Image avec zoom au survol */}
            <div className="h-48 overflow-hidden">
              <img 
                src={getImageUrl(art)} 
                alt={art.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <p className="text-main-gold text-xs font-bold uppercase tracking-widest mb-3">Article</p>
              <h3 className="text-xl font-bold mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-main-gold transition-colors">
                {art.title}
              </h3>
              
              <div className="mt-auto pt-6 flex justify-between items-center border-t border-alt-color/20">
                <span className="text-ann-color text-xs italic">
                  {new Date(art.pubDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </span>
                <a 
                  href={art.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-main-gold transition-colors"
                >
                  Read More <i className="fa fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;