import React, { useState } from "react";
import { useCursor, useGLTF } from "@react-three/drei";

import type { MeshProps } from "@react-three/fiber";
import useMeshControls from "@/hooks/useMeshControls";
import { useControls } from "leva";
//import { useControls } from "leva";

interface LoadModelProps extends MeshProps {
  nameProp: string;
}

function LoadModel(props: LoadModelProps) {
  const { nameProp, ...meshProps } = props;

  const { nodes, materials } = useGLTF("/house.gltf");
  // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const options = {
    color: { value: "lime" },
  };

  const { color } = useControls(nameProp, options);

  const { meshEvents, target } = useMeshControls(nameProp);

  return (
    <mesh
      {...meshEvents}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      name={nameProp}
      geometry={nodes[nameProp].geometry}
      material={nodes[nameProp].material}
      material-color={target.name === nameProp ? color : "white"}
      {...meshProps}
      dispose={null}
    />
  );
}

export default LoadModel;
