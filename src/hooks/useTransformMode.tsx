import React, { useEffect, useMemo } from "react";

import {
  TTransformModeAtom,
  targetAtom,
  transformModeAtom,
} from "@/atoms/controls";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { Color } from "three";

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
  const name = target.name;

  const [{ mode, target: menuTarget }, set] = useControls(() => {
    let color = "";

    if (target.color) {
      color = new Color(target.color[0]).getHexString() as string;
    }
    return {
      ...options,
      target: "",
      color: "#fff",
    };
  }, [target.color]);

  useMemo(() => {
    if (!target || !target.name) {
      set({ target: "" });
      set({ color: "#fff" });
      return;
    }

    console.log(target.color);
    set({ target: target.name });
    set({ color: `#${target.color[0]}` as string });
  }, [target]);

  useEffect(() => {
    if (transformMode != mode) {
      set({ mode: transformMode });
    }
  }, [transformMode, set, mode]);

  return {
    transformMode: mode,
    setTransformMode: set,
  };
}
