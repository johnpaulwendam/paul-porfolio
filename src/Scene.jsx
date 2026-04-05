import { useScroll, Float, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Scene() {
  const groupRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset;
    groupRef.current.rotation.y = offset * Math.PI;
    groupRef.current.position.z = offset * 2;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh rotation={[-Math.PI / 4, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[50, 50, 10, 10]} />
          <meshStandardMaterial color="#f0f0f0" wireframe />
        </mesh>
      </Float>
    </group>
  );
}