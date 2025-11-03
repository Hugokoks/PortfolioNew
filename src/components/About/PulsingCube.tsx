// components/About/PulsingCube.tsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const baseColor = new THREE.Color("#8A2BE2");
const pulseColor = new THREE.Color("#FF00FF");

export default function PulsingCube() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        const scalePulse = Math.sin(time * 1.5) * 0.05 + 1;
        meshRef.current.scale.set(scalePulse, scalePulse, scalePulse);

        const intensityPulse = (Math.sin(time * 1.5) + 1) / 2;
        const intensity = 0.5 + intensityPulse * 2;

        (meshRef.current.material as any).emissiveIntensity = intensity;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} /> {/* Velikost kostky 2x2x2 */}
            <meshStandardMaterial
                color={baseColor}     // Základní barva
                wireframe={true}      // Drátěný model
                emissive={pulseColor} // Barva, kterou bude zářit
                emissiveIntensity={1} // Počáteční síla záře
            />
        </mesh>
    );
}