import React from "react";
import { motion } from "framer-motion";

const milestones = [
    {
        year: 2019,
        event: "Rentre au Pole",
        details: "Meilleure marqueuse avec 18,2 points/match.",
      },
      {
        year: 2021,
        event: "Rentre a Charnay",
        details: "Meilleure marqueuse avec 18,2 points/match.",
      },
  {
    year: 2021,
    event: "Gagne l'Eurochallengers avec l'équipe de France U18",
    details: "Meilleure marqueuse avec 18,2 points/match.",
  },
  {
    year: 2022,
    event: "Rentre a Rhody",
    details: "Meilleure marqueuse avec 18,2 points/match.",
  },
  {
    year: 2023,
    event: "Championne universitaire avec Rhode Island",
    details: "MVP avec une moyenne de 22 points/match.",
  },
  {
    year: 2023,
    event: "Championne d’Europe U20 avec la France",
    details: "Triple-double en finale : 20 points, 11 rebonds, 10 passes.",
  },
];

const Timeline = () => {
    return (
        <section id="timeline">
      <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 px-8 overflow-hidden">
        {/* Texte défilant en arrière-plan */}
        <div className="absolute left-0 top-[-5.25%] whitespace-nowrap z-1 text-[15rem] uppercase font-bold text-gray-500 opacity-20 animate-scrollTexty">
          <span>INES ACHIEVEMENTS</span>
          <span className="ml-[100vw]">INES ACHIEVEMENTS</span>
        </div>
  
        {/* Contenu principal */}
        <div className="relative mx-auto max-w-6xl mt-20">
          <div className="relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ amount: 0.3, once: false }} 
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } mb-12`}
              >
                {/* Timeline connector */}
                {index !== milestones.length - 1 && ( // Affiche la tige verte sauf pour la dernière carte
                  <div className="w-2 h-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2" />
                )}
  
                {/* Contenu */}
                <div className="relative md:w-[45%] bg-gray-800 shadow-xl rounded-lg p-6 text-center md:text-left">
                  <h4 className="text-xl font-semibold text-blue-500">{milestone.event}</h4>
                  <p className="text-gray-300 mt-2">{milestone.details}</p>
                  <div className="absolute -top-6 -left-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-black font-bold text-lg border-4 border-gray-800">
                    {milestone.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div></section>
    );
  };
  
  // Animation keyframes pour le texte défilant en arrière-plan
  const keyframesStyley = `
    @keyframes scrollTexty {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-scrollTexty {
      animation: scrollTexty 10s linear infinite;
    }
  `;
  
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.innerHTML = keyframesStyley;
    document.head.appendChild(style);
  }
  
  export default Timeline;