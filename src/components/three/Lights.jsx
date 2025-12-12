import { Environment, Lightformer, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Iphone17 from "../models/IPhone17";

const Lights = () => {
  return (
     <Canvas>
            <group scale={32} position={[0, -0.5, 0]}>
              <Environment resolution={500} preset="sunset">
                <group>
                  <Lightformer
                    form="rect"
                    intensity={10}
                    position={[-9, 1, -7]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                  />
                  <Lightformer
                    form="rect"
                    intensity={10}
                    position={[4, 7, 4]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                  />
                </group>
              </Environment>
              <spotLight
                position={[10, -5, 4]}
                angle={0.6}
                decay={1}
                intensity={Math.PI * 0.7}
                color="red"
              />
              <spotLight
                position={[0, 5, 3]} // slightly above, pointing forward
                intensity={2.2}
                angle={0.6}
                penumbra={0.8}
                castShadow
              />
              <pointLight position={[2, 1, 2]} intensity={0.6} />
              <Iphone17 />
            </group>
            <OrbitControls
              enableZoom={false}
              enableDamping={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={0}
            />
          </Canvas>
  )
}

export default Lights