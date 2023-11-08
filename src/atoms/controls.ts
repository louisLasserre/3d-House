import { atom } from "jotai";

const controlModes = ["translate", "rotate", "scale"] as const;

export type TControlModelAtom = {
  name: string | null;
};

export const targetAtom = atom<TControlModelAtom>({
  name: null,
});

export type TTransformModeAtom = "translate" | "rotate" | "scale";

export const transformModeAtom = atom<TTransformModeAtom>("translate");
