/*
 * Import remote dependencies
 */
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'

/*
 * Import local dependencies
 */
import Cube from "./Cube.jsx";

const App = () => {
    return (
        <Canvas>
            <color attach="background" args={[`hsl(0, 0%, 10%)`]}/>
            <ambientLight intensity={.3} color={`hsl(0, 0%, 100%)`}/>
            <pointLight args={[`hsl(200, 100%, 50%)`, 1, 100]} position={[5, 5, 5]}/>
            <pointLight args={[`hsl(30, 100%, 50%)`, 1, 100]} position={[-5, -5, -5]}/>
            <Cube/>
            <OrbitControls/>
        </Canvas>
    )
}

export default App
