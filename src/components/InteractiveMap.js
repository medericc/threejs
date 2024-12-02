import React, { useState } from "react";

const clubs = [
  {
    name: "Pôle Espoir",
    stats: { points: 10.2, rebounds: 5.1, assists: 3.5 },
    image: "/images/pole_espoir.jpg",
  },
  {
    name: "Charnay Basket",
    stats: { points: 12.8, rebounds: 6.2, assists: 4.0 },
    image: "/images/charnay.jpg",
  },
  {
    name: "Rhode Island",
    stats: { points: 15.3, rebounds: 7.0, assists: 5.4 },
    image: "/images/rhode_island.jpg",
  },
];

const InteractiveMap = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Clubs où Inès a joué</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedClub(club)}
          >
            <img src={club.image} alt={club.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{club.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedClub && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-4/5 max-w-md">
            <button
              className="mb-4 text-red-500 font-bold hover:underline"
              onClick={() => setSelectedClub(null)}
            >
              Fermer
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedClub.name}</h2>
            <p className="text-gray-700">Points : {selectedClub.stats.points}/match</p>
            <p className="text-gray-700">Rebonds : {selectedClub.stats.rebounds}/match</p>
            <p className="text-gray-700">Passes : {selectedClub.stats.assists}/match</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
