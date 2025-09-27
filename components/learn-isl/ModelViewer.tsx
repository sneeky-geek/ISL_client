"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

function Model() {
  const group = useRef<any>();
  const { scene, animations } = useGLTF("/models/hand.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions["Idle"]; // replace with your animation name
    action?.play(); // ✅ optional chaining fixes TS error
  }, [actions]);

  return <primitive ref={group} object={scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
