import { useState } from "react";

import type { PrimitiveAtom } from "jotai";
import type { TObjectType } from "./@types";
import { SceneObject } from "./SceneObject";

interface SceneProps {
  objects: PrimitiveAtom<TObjectType>[];
}

export function Scene({ objects: defaultObjects }: SceneProps) {
  const [objects, setObjects] =
    useState<PrimitiveAtom<TObjectType>[]>(defaultObjects);

  return objects.map((object, index) => (
    <SceneObject key={index} object={object} />
  ));
}
