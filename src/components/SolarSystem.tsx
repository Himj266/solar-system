import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from "./Sun";
import { Planet } from "./Planet";

const PLANETS = [
  { radius: 1, color: "gray", distance: 10 }, // Mercury
  { radius: 1.5, color: "orange", distance: 20 }, // Venus
  // ... other planets ...
];

export const SolarSystem = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", backgroundColor: "#121212" }}
      camera={{ position: [-40, 40, 40] }}
    >
      <OrbitControls />
      <Sun />
      {PLANETS.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}
    </Canvas>
  );
};
