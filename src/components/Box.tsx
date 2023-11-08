import React, { useState } from "react";

import type { MeshProps } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";

import { useAtom } from "jotai";
import useMeshControls from "@/hooks/useMeshControls";
import { Select } from "@react-three/postprocessing";

interface BoxProps extends MeshProps {
  nameProp: string;
}

function Box({ nameProp, ...props }: BoxProps) {
  //const setTarget = useStore((state) => state.setTarget)

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { meshEvents } = useMeshControls(nameProp);
  return (
    <Select enabled={hovered}>
      <mesh
        {...props}
        {...meshEvents}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        name={nameProp ?? "box1"}
        material-color="red"
      >
        <boxGeometry />
      </mesh>
    </Select>
  );
}

export default Box;
