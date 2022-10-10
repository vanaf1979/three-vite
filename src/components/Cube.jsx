/*
 * Import remote dependencies
 */
import {MathUtils} from 'three';

const Cube = () => {
    return (
        <mesh scale={2.5} position={[0, 0, 0]} rotation={[MathUtils.degToRad(45), MathUtils.degToRad(45), 0]}>
            <boxGeometry attach="geometry"/>
            <meshStandardMaterial attach="material" color={`hsl(0, 0%, 100%)`} metalness={0} roughness={.5}/>
        </mesh>
    );
};

export default Cube