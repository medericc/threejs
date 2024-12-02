import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Model } from '../Model';
import dataImg from '../assets/concrete-wall-2.png';

const Travel = () => (
  <div className="mx-auto mt-8 md:mt-16 px-4 md:px-0 container">
    <div className="flex md:flex-row flex-col">
      {/* Section gauche */}
      <div className="mb-8 md:mb-0 w-full md:w-1/2">
        <div className="flex flex-col justify-center">
          <h1 className="relative mb-4 font-bold text-4xl md:text-5xl">
            <span className="block title-line">Découvrez le parcours{' '}</span>
            <span className="block title-line">
              <span className="text-green-400">dévoué</span>
            </span>
            <span className="block title-line">de la meneuse</span>
            <span className="block title-line">
              et capitaine de <span className="text-green-400">Rhody</span>.
            </span>
          </h1>
          <p className="mb-8 w-full md:w-[90%] text-gray-300 text-lg md:text-xl description ">
            De son entrée au Pole Espoir à son titre de MVP de la finale de l'EuroBasket en
            2023, en continuant d'évoluer à Rhode Island.
          </p>
          <div className="flex md:flex-row flex-col space-y-4 md:space-x-9 md:space-y-0">
            <button className="button relative bg-green-400 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300">
              En savoir plus
            </button>
            <button className="button relative border-2 border-green-400 hover:bg-green-400 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300">
              Contact
            </button>
          </div>
          <div className="hidden md:flex md:flex-row flex-col justify-around items-center border-[#808080] border-2 bg-[#808080]/50 backdrop-blur-xl mx-4 mt-10 mx-md:mr-0 p-4 md:p-2 rounded-lg instructions">
        <div className="mb-4 md:mb-0 text-left">
          <h3 className="mb-2 font-bold text-green-400 text-xl md:text-2xl">
            Suivez son ascension.
          </h3>
          <ul className="text-base text-white md:text-lg">
            <li>Survole les points</li>
            <li>Clique sur les points pour voir les détails</li>
            <li>Explore son parcours jusqu'en NCAA</li>
          </ul>
        </div>
        <img src={dataImg} alt="imgInfo" className="w-[100px] md:w-[150]" />
      </div>
    </div>
      </div>

      {/* Section droite */}
      <div className="relative right-section w-full md:w-1/2 h-[400px] md:h-[600px]">
        <Canvas
          camera={{
            position: [0, 0, 3],
            fov: 50,
          }}
          style={{
            background: 'transparent',
            height: '100%',
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls enableZoom={false} autoRotate={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  </div>
);

export default Travel;
