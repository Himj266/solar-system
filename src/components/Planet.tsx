import { useRef } from "react";

import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface Props {
  radius: number;
  color: string;
  distance: number;
}

export const Planet = ({
  radius: planetRadius,
  color: planetColor,
  distance: orbitDistance,
}: Props) => {
  const planetRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      const rotationSpeed = 1;
      const orbitSpeed = 0.05;
      planetRef.current.rotation.y += rotationSpeed * delta;
      planetRef.current.position.x =
        orbitDistance * Math.sin(orbitSpeed * state.clock.elapsedTime);
      planetRef.current.position.z =
        orbitDistance * Math.cos(orbitSpeed * state.clock.elapsedTime);
    }
  });

  return (
    <Sphere ref={planetRef} args={[planetRadius, 32, 32]}>
      <meshBasicMaterial color={planetColor} />
    </Sphere>
  );
};
