import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from "@react-three/drei"
import { useRef } from 'react'


export default function Experience()
{
    
    const cube = useRef()
    const sphere = useRef()

    return <>
        <OrbitControls makeDefault />
 
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 10 } color={ "purple" }/>
        <ambientLight intensity={ 1.5 } />
        
    <PivotControls 
        anchor={ [ 0, 0, 0 ]}
        depthTest={ false }
        lineWidth={ 2 }
        >
        <mesh ref={ sphere } position-x={ - 2 } scale-x={ 1.3 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html 
                position={[ 1, 1, 0]}
                wrapperClass="label"
                center
                distanceFactor={ 6 }
                occlude={ [ sphere, cube ]}
                
            > Esfera </Html>
        </mesh>
    </PivotControls>
   
    <PivotControls 
        anchor={ [ 0, 0, 0 ]}
        depthTest={ false }
        lineWidth={ 2 }
        >
        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 } rotation-y={ - 0.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        </PivotControls> 

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 20 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial 
                resolution={ 512 }
                blur={ [ 1000, 1000 ]}
                mixBlur={ 1 }
                mirror={ 0.8 }
            />
        </mesh>


    <Float
        speed={ 2.5 }
        floatIntensity={ 1 }
    >
        <Text
            position-y={2.5}
            font= "./bangers-v20-latin-regular.woff"
            fontSize={ 2 }
            color="gray"
        > Mover
        </Text>
    </Float>
    </>
}