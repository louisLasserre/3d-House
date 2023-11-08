import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { useThree } from "@react-three/fiber";
import { targetAtom, transformModeAtom } from "@/atoms/controls";
import { OrbitControls, TransformControls } from "@react-three/drei";

interface ControlsProps {}

function Controls(props: ControlsProps) {
  // Get notified on changes to state
  const target = useAtomValue(targetAtom);
  const transformMode = useAtomValue(transformModeAtom);

  const scene = useThree((state) => state.scene);

  const { name } = target ?? {};

  return (
    <>
      {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
      {name && (
        <TransformControls
          object={scene.getObjectByName(name)}
          mode={transformMode}
        />
      )}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
}

export default Controls;
