import React from 'react';

const CertificationBadges = () => {
  const certs = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      badge: "aws-certified-cloud-practitioner.png",
      pdf: "aws_cert.pdf",
      date: "Janv 2026"
    },
    {
      title: "AWS Re:Start Graduate",
      issuer: "Amazon Web Services",
      badge: "aws-re-start-graduate.png",
      pdf: "aws_re_start_graduate.pdf",
      date: "Janv 2026"
    },
    {
      title: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      badge: "cyberops-associate.png",
      pdf: "CyberOpsAssociateUpdate20260212-32-gbfy59.pdf",
      date: "Nov 2025"
    },
    {
      title: "Introduction to cybersecurity",
      issuer: "Cisco Networking Academy",
      badge: "introduction-to-cybersecurity.png",
      pdf: "IntroductionToCybersecurityUpdate20260212-31-78545.pdf",
      date: "Nov 2025"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      badge: "ccna-introduction-to-networks.png",
      pdf: "CCNAITNUpdated20260212-33-kcp2we.pdf",
      date: "Oct 2025"
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco / Python Institute",
      badge: "python-essentials.png",
      pdf: "PythonEssentials1Update20260212-29-czgnuq.pdf",
      date: "Oct 2025"
    },
    {
      title: "Linux Essentials",
      issuer: "Cisco / NDG",
      badge: "linux-essentials.png",
      pdf: "LinuxEssentialsUpdate20260212-30-tkaq9b.pdf",
      date: "Sept 2025"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      badge: "networking-basics.png",
      pdf: "NetworkingBasicsUpdate20260212-32-qwcx86.pdf",
      date: "Oct 2025"
    }
  ];

  return (
    <div className="mt-20">
      {/* Titre de la section avec ton style de ligne dorée */}
      <div className="flex items-center gap-5 mb-12">
        <h3 className="text-white font-bold text-xl uppercase tracking-[5px]">Technical Credentials</h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-main-gold to-transparent opacity-30"></div>
      </div>

      {/* Grille des badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((item, index) => (
          <div 
            key={index} 
            className="group p-6 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-white/10 hover:border-main-gold/40 transition-all duration-500 relative overflow-hidden"
          >
            {/* Lueur dorée au survol */}
            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-main-gold/5 rounded-full blur-2xl group-hover:bg-main-gold/20 transition-all"></div>

            <div className="flex items-center gap-6">
              {/* Conteneur du Badge PNG */}
              <div className="w-20 h-20 flex-shrink-0 bg-bg-dark rounded-2xl p-2 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={`/images/${item.badge}`} 
                  alt={item.title} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  onError={(e) => { e.target.src = "https://placehold.co/100x100?text=Badge"; }}
                />
              </div>

              {/* Textes et Lien */}
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-[13px] leading-tight mb-1 group-hover:text-main-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-other-gray text-[10px] uppercase font-medium mb-3">
                  {item.issuer} • {item.date}
                </p>
                <a 
                  href={`/images/${item.pdf}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[9px] font-black text-main-gold tracking-[2px] flex items-center gap-2 hover:translate-x-2 transition-transform uppercase"
                >
                  Verify Certificate <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationBadges;