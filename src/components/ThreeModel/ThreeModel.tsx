import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Train";

export const ThreeModel = () => {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ fov: 50 }} dpr={[1, 2]} shadows>
        <Stage environment="city" intensity={1} preset="rembrandt">
          false
          <Model />
          false
        </Stage>
        <OrbitControls autoRotate />
      </Canvas>
    </Suspense>
  );
};
