import React, { useState } from "react";
import type { MeshProps } from "@react-three/fiber";
import useMeshControls from "@/hooks/useMeshControls";
import { useCursor } from "@react-three/drei";

interface TransformMeshProps extends Omit<MeshProps, "name"> {
  name: string;
}

export function TransformMesh({
  geometry,
  material,
  position,
  name,
  getWorldPosition,
  ...props
}: TransformMeshProps) {
  const { meshEvents } = useMeshControls(name);

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      {...props}
      {...meshEvents}
      name={name}
      geometry={geometry}
      material={material}
      position={position}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}

      //material-color={hovered ? "red" : "white"}
    />
  );
}
