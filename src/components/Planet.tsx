import { useRef } from "react";

import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface Props {
  radius: number;
  color: string;
  distance: number;
}

export const Planet = ({ radius, color, distance }: Props) => {
  const planetRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    // Update planet rotation and position here
    // For example:
    const rotationSpeed = 1;
    const orbitSpeed = 0.05;
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed * delta;
      planetRef.current.position.x =
        distance * Math.sin(orbitSpeed * state.clock.elapsedTime);
      planetRef.current.position.z =
        distance * Math.cos(orbitSpeed * state.clock.elapsedTime);
    }
  });

  return (
    <Sphere ref={planetRef} args={[radius, 32, 32]}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
};
