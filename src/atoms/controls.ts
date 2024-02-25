import { atom } from "jotai";

const controlModes = ["translate", "rotate", "scale"] as const;

export type TControlModelAtom = {
  name: string | null;
  color: THREE.Color[] | null;
};

export const targetAtom = atom<TControlModelAtom>({
  name: "",
  color: null,
});

export type TTransformModeAtom = "translate" | "rotate" | "scale";

export const transformModeAtom = atom<TTransformModeAtom>("translate");
