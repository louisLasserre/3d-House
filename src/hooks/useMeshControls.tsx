import React from "react";
import { useAtom } from "jotai";
import { targetAtom, transformModeAtom } from "@/atoms/controls";

import type { ThreeEvent } from "@react-three/fiber";
import type { TTransformModeAtom } from "@/atoms/controls";
import { TObjectType } from "@/components/@types";

const availableMode = ["translate", "rotate", "scale"] as const;

export default function useMeshControls(
  nameProp: string,
  data: TObjectType["data"]
) {
  const [target, setTarget] = useAtom(targetAtom);
  const [transformMode, setTransformMode] = useAtom(transformModeAtom);

  const { name } = target;

  const nextMode = (actualMode: TTransformModeAtom) =>
    availableMode[(availableMode.indexOf(actualMode) + 1) % 3];

  const meshEvents = {
    onClick: (e: ThreeEvent<MouseEvent>) => (
      e.stopPropagation(), setTarget({ name: nameProp, color: data.color })
    ),
    onContextMenu: (e: ThreeEvent<MouseEvent>) =>
      name === nameProp &&
      (e.stopPropagation(), setTransformMode(nextMode(transformMode))),
  };

  return {
    meshEvents,
    target,
    setTarget,
    transformMode,
    setTransformMode,
  };
}
