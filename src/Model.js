import { Html, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three'
import { CITY_MARKERS } from "./data";
import { latLongToVector3 } from "./utils";



  export function Model(props) {
    const { nodes, materials} = useGLTF('/earthquakes_-_2000_to_2019.glb')
    const [selectedCity, setSelectedCity] = useState(null)
    const groupRef = useRef()
    const markersRef = useRef([])

    const greenMaterial = new THREE.PointsMaterial({
        size: 0.01,
        transparent: false,
        opacity: 0.8
    })

    useFrame((state) => {
        markersRef.current.forEach((marker, index) => {
            if (marker && selectedCity === CITY_MARKERS[index].name){
                const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.2 +1
                marker.scale.set(pulse, pulse,pulse)
            }
        })
    })

    return (
        <group {...props} dispose={null} scale={0.017} ref={groupRef}>
            <group rotation={[-Math.PI / 2,0,0]}>
                {Object.keys(nodes).map((key) => {
                    if (key.startsWith('Object_') && nodes[key].geometry) {
                        return (
                            <points 
                                key={key}
                                geometry={nodes[key].geometry}
                                material={greenMaterial}
                            />
                        )
                    }
                    return null
                 })}
                 {CITY_MARKERS.map((city, index) => {
                    const position = latLongToVector3(city.lat, city.long, 66)

                    return (
                        <group key={city.name} position={position}>
                            <mesh
                                ref={el => markersRef.current[index] = el}
                                onClick={() => setSelectedCity(selectedCity === city.name ? null : city.name)}
                                onPointerOver={() => {
                                    document.body.style.cursor = 'pointer'
                                }}
                                onPointerOut={() => {
                                    document.body.style.cursor = 'default'
                                }}
                                >
                                    <sphereGeometry args={[2,16,16]} />
                                    <meshBasicMaterial
                                        color={city.color}
                                        toneMapped={false}
                                    />
                            </mesh>
                            {selectedCity === city.name && (
                                <Html>
                                    <div className='border-[#808080] border-2 bg-[#808080]/60 backdrop-blur-sm p-4 rounded-lg min-w-[250px] text-white '>
                                        <h3 className='mb-2 font-bold text-lg' style={{color: city.color}}>
                                            {city.info.title}
                                        </h3>
                                        <p className='mb-3 font-medium text-sm'>
                                            {city.info.description}
                                        </p>
                                        <div className='gap-3 grid grid-cols-2 text-sm'>
                                            <div>
                                                <p className='font-bold' style={{color: city.color}}>Serveurs</p>
                                                <p>{city.info.stats.servers}</p>
                                            </div>
                                            <div>
                                                <p className='font-bold' style={{color: city.color}}>Uptime</p>
                                                <p>{city.info.stats.uptime}</p>
                                            </div>
                                            <div>
                                                <p className='font-bold' style={{color: city.color}}>Clients</p>
                                                <p>{city.info.stats.clients}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedCity(null);
                                            }}
                                            className='mt-3 px-3 py-1 rounded-lg w-full text-lg'
                                            style={{
                                                backgroundColor: city.color,
                                                color: 'white',
                                                fontWeight: 'medium'
                                            }}
                                        >
                                            fermer
                                        </button>
                                    </div>
                                </Html>
                            )}
                        </group>
                    )

                 })}
            </group>
        </group>
    )
  }

  useGLTF.preload('/earthquakes_-_2000_to_2019.glb');