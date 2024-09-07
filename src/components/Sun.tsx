import { Sphere } from "@react-three/drei";

export const Sun = () => {
  return (
    <Sphere args={[5, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial color="yellow" />
    </Sphere>
  );
};
