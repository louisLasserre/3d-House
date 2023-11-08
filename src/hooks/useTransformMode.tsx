import React, { useEffect } from "react";

import {
  TTransformModeAtom,
  targetAtom,
  transformModeAtom,
} from "@/atoms/controls";
import { useAtom } from "jotai";
import { useControls } from "leva";

export function useTransformMode() {
  const [target, setTarget] = useAtom(targetAtom);
  const [transformMode, setTransformMode] = useAtom(transformModeAtom);

  const options = {
    mode: {
      value: transformMode,
      options: ["translate", "rotate", "scale"],
      onChange: (v: TTransformModeAtom) => setTransformMode(v),
    },
  };

  const [{ mode }, set] = useControls(() => options);

  useEffect(() => {
    if (transformMode != mode) {
      set({ mode: transformMode });
    }
  }, [transformMode, set]);

  return {
    transformMode: mode,
    setTransformMode: set,
  };
}
