import React from "react";

const milestones = [
  {
    year: 2021,
    event: "Gagne l'Eurochallengers avec l'équipe de France U18",
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
      <div className="py-10 bg-black text-white">
        <h2 className="text-2xl font-bold text-center mb-8">Les Exploits d'Inès</h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="border-l-4 border-green-500">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-10 pl-10">
                <div className="absolute -left-5 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">
                  {milestone.year}
                </div>
                <div className="bg-gray-900 shadow-md p-4 rounded-lg">
                  <h4 className="text-lg font-bold">{milestone.event}</h4>
                  <p className="text-gray-400">{milestone.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Timeline;
