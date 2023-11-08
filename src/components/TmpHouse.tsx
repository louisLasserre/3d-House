import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TmpHouse() {
  const gltf = useLoader(GLTFLoader, "/walls.gltf");
  return <primitive object={gltf.scene} />;
}

export default TmpHouse;
