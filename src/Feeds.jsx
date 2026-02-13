const Feeds = () => {
  const articles = [
    { title: "Design Systems in 2026", platform: "Medium", link: "#" },
    { title: "My UI Process", platform: "LinkedIn", link: "#" }
  ];

  return (
    <section className="bg-bg-second py-20 px-[14%]">
      <h2 className="text-4xl font-bold mb-10">Latest <span className="text-main-gold">Articles</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((art, i) => (
          <div key={i} className="p-6 bg-bg-dark rounded-3xl border border-alt-color hover:border-main-gold transition-colors">
            <span className="text-sm text-main-gold uppercase">{art.platform}</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{art.title}</h3>
            <a href={art.link} className="text-ann-color hover:text-white flex items-center gap-2">
              Read more <i className="fa fa-external-link"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};