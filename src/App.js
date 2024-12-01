
import { Suspense, useEffect, useState } from 'react';
import logo from './assets/logo.png'
import dataImg from './assets/concrete-wall-2.png'
import './App.css';
import { Model } from './Model'
import { Menu, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}})
        const isMobile = window.innerWidth < 768

        tl.from(".logo", {
          y: -100,
          opacity: 0,
          duration: 1,
        })
        .from(".nav-link", {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
        }, "-=0.5")
        .from(".title-line", {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
        }, "-=0.3")
        .from(".description", {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=0.5")
        .from(".button", {
          x: isMobile ? 0 : -50,
          y: isMobile ? 30 : 0,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        }, "-=0.5")
        .from(".right-section", {
          x: isMobile ? 0 : 100,
          y: isMobile ? 50 : 0,
          opacity: 0,
          duration: 1,
        }, "-=0.3")
        .from(".instructions", {
          y: 50,
          opacity: 0,
          duration: 0.8,
        }, "-=0.5");

        gsap.fromTo(".ambient-light", {
          opacity: 0,
          scale: 0.5,
        }, {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.3,
        });
        gsap.utils.toArray('.button').forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.05, duration: 0.3 });
          });
          button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.3 });
          });
        });
      })
      return () => ctx.revert()
    }, [])

    useEffect(() => {
      if(isMenuOpen){
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return () => {
        document.body.style.overflow = 'unset';
      }
    }, [isMenuOpen])

    return (
      <div className='relative bg-black min-h-screen text-white'>
        <div className='top-[5%] md:top-[10%] left-[-10%] absolute bg-green-400/20 blur-[120px] rounded-full w-[60%] md:w-[40%] h-[40%] pointer-events-none ambient-light'/>
        <div className='top-[20%] md:top-[30%] right-[10%] absolute bg-blue-400/20 blur-[100px] rounded-full w-[40%] md:w-[30%] h-[30%] pointer-events-none ambient-light'/>
        <div className='bottom-[10%] md:bottom-[20%] left-[50%] md:left-[20%] absolute bg-purple-400/20 blur-[150px] rounded-full w-[35%] md:w-[25%] h-[25%] pointer-events-none ambient-light'/>
        <nav className='relative z-50 p-4'>
          <div className='flex justify-between items-center mx-auto container'>
            <div className='z-50 font-bold logo'>
              <img src={logo} alt="logo" className='logo w-[150px] md:w-[200px]' />
            </div>
            <button
            className='z-50 md:hidden hover:bg-gray-800 p-2 rounded-lg transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className='flex flex-col justify-center items-center space-y-8 h-full text-2xl'>
                <a href='#' className='hover:text-green-400 nav-link' onClick={() => setIsMenuOpen(false)}>Accueil</a>
                <a href='#' className='hover:text-green-400 nav-link' onClick={() => setIsMenuOpen(false)}>Prix</a>
                <a href='#' className='hover:text-green-400 nav-link' onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href='#' className='hover:text-green-400 nav-link' onClick={() => setIsMenuOpen(false)}>A propos</a>
                <a href='#' className='hover:text-green-400 nav-link' onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
            <div className='md:flex space-x-10 hidden font-medium'>
              <a href='#' className='hover:text-green-400 nav-link'>Accueil</a>
              <a href='#' className='hover:text-green-400 nav-link'>Prix</a>
              <a href='#' className='hover:text-green-400 nav-link'>Services</a>
              <a href='#' className='hover:text-green-400 nav-link'>A propos</a>
              <a href='#' className='hover:text-green-400 nav-link'>Contact</a>
            </div>  
          </div>
        </nav>

        <div className='mx-auto mt-8 md:mt-16 px-4 md:px-0 container'>
          <div className='flex md:flex-row flex-col'>
          {/* section gauche */}
<div className='mb-8 md:mb-0 w-full md:w-1/2'>
  <div className='flex flex-col justify-center'>
    <h1 className='relative mb-4 font-bold text-4xl md:text-5xl'>
      <span className='block title-line'>Découvrez le parcours{' '}</span>
      <span className='block title-line'><span className='text-green-400'>dévoué</span></span>
      <span className='block title-line'>de la meneuse</span>
      <span className='block title-line'>et capitaine de <span className='text-green-400'>Rhody</span>.</span>
    </h1>
    <p className='mb-8 w-full md:w-[90%] text-gray-300 text-lg md:text-xl description '>
      De son entrée au Pole Espoir à son titre de MVP de la finale de l'EuroBasket en 2023, en
      qui continuant d'évoluer à Rhode Island.
    </p>
    <div className='flex md:flex-row flex-col space-y-4 md:space-x-9 md:space-y-0'>
      <button className=' button relative bg-green-400 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300'>
        En savoir plus
      </button>
      <button className=' button relative border-2 border-green-400 hover:bg-green-400 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300'>
        Contact
      </button>
    </div>
    <div className='flex md:flex-row flex-col justify-around items-center border-[#808080] border-2 bg-[#808080]/50 backdrop-blur-xl mx-4 mt-10 mx-md:mr-0 p-4 md:p-2 rounded-lg instructions '>
      <div className='mb-4 md:mb-0 text-left'>
        <h3 className='mb-2 font-bold text-green-400 text-xl md:text-2xl'>Suivez son ascension.</h3>
        <ul className='text-base text-white md:text-lg'>
          <li>Survole les points</li>
          <li>Clique sur les points pour voir les détails</li>
          <li>Explore son parcours jusqu'en NCAA</li>
        </ul>
      </div>
      <img src={dataImg} alt='imgInfo' className='w-[100px] md:w-[150]' />
    </div>
  </div>
</div>

            <div className='relative right-section w-full md:w-1/2 h-[400px] md:h-[600px]'>
              <Canvas
              camera={{
                position: [0, 0, 3],
                fov: 50
              }}
              style={{
                background: 'transparent',
                height: '100%'
              }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense
                  fallback={null}
                >
                  <Model />
                  <OrbitControls 
                    enableZoom={false}
                    autoRotate={false}
                    enablePan={false}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

      </div>
    )

}

export default App;
