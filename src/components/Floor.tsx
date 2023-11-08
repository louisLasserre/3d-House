import React from "react";

import type { MeshProps } from "@react-three/fiber";

function Floor(props: MeshProps) {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
