import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import Modal from "react-modal";

const accomplishments = [
  {
    title: "Championne d'Europe U20",
    club: "France",
    details: "Victoire contre l'Espagne (Finale U20)",
    competition: "Championnat d'Europe U20",
    link: "#",
    texture: "/images/ccc.jpg",
  },
  {
    title: "MVP avec Rhode Island",
    club: "Rhode Island",
    details: "Match clé : 35 points contre UMass",
    competition: "Championnat NCAA",
    link: "#",
    texture: "/images/ddd.jpg",
  },
  {
    title: "Meilleure marqueuse Pôle Espoir",
    club: "Pôle Espoir",
    details: "Statistiques : 25 points de moyenne",
    competition: "Compétitions jeunes",
    link: "#",
    texture: "/images/eee.jpg",
  },
  {
    title: "Meilleure joueuse LF2",
    club: "Charnay",
    details: "32 points en finale contre Landerneau",
    competition: "Finale LF2",
    link: "#",
    texture: "/images/fff.jpg",
  },
];

const AccomplishmentCard = ({ accomplishment, onClick }) => {
    const texture = useTexture(accomplishment.texture); // Utilisation correcte à l'intérieur d'un composant enfant Canvas
  
    return (
      <mesh onClick={onClick} scale={1.5} position={[Math.random() * 5 - 2, Math.random() * 3, 0]}>
         <boxGeometry args={[1.5, 2, 0.2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };
  
  const Achievements = () => {
    const [selectedClub, setSelectedClub] = useState("All");
    const [selectedAccomplishment, setSelectedAccomplishment] = useState(null);
  
    const filteredAccomplishments =
      selectedClub === "All"
        ? accomplishments
        : accomplishments.filter((a) => a.club === selectedClub);
  
    return (
      <div className="relative bg-black text-white min-h-screen flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-6">
          <h2 className="text-xl font-bold mb-4">Filtrer par Club</h2>
          <ul className="space-y-4">
            {["All", "France", "Rhode Island", "Pôle Espoir", "Charnay"].map((club) => (
              <li
                key={club}
                className={`cursor-pointer hover:text-green-400 ${
                  selectedClub === club ? "text-green-400" : ""
                }`}
                onClick={() => setSelectedClub(club)}
              >
                {club}
              </li>
            ))}
          </ul>
        </div>
  
        {/* 3D Gallery */}
        <div className="w-3/4">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
            <OrbitControls />
            {filteredAccomplishments.map((accomplishment, index) => (
              <AccomplishmentCard
                key={index}
                accomplishment={accomplishment}
                onClick={() => setSelectedAccomplishment(accomplishment)}
              />
            ))}
          </Canvas>
        </div>
  
        {/* Modal */}
        {selectedAccomplishment && (
          <Modal
            isOpen={!!selectedAccomplishment}
            onRequestClose={() => setSelectedAccomplishment(null)}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-lg mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          >
            <h2 className="text-xl font-bold mb-4">{selectedAccomplishment.title}</h2>
            <p className="mb-2">
              <strong>Club : </strong>
              {selectedAccomplishment.club}
            </p>
            <p className="mb-2">
              <strong>Compétition : </strong>
              {selectedAccomplishment.competition}
            </p>
            <p className="mb-4">{selectedAccomplishment.details}</p>
            <a
              href={selectedAccomplishment.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Voir le match
            </a>
            <button
              onClick={() => setSelectedAccomplishment(null)}
              className="mt-4 text-red-500 font-bold"
            >
              Fermer
            </button>
          </Modal>
        )}
      </div>
    );
  };
  

export default Achievements;
