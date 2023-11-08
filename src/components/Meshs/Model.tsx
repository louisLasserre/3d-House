/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 house-transformed.gltf --types
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PrimitiveAtom, atom, useAtom } from "jotai";
import { useTransformMode } from "@/hooks/useTransformMode";
import useMeshControls from "@/hooks/useMeshControls";
import { v4 } from "uuid";
import { TObjectType } from "../@types";
import { Scene } from "../Scene";

type GLTFResult = GLTF & {
  nodes: {
    Walls: THREE.Mesh;
    Floor: THREE.Mesh;
    Rug: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane_1: THREE.Mesh;
    CouchCousin002: THREE.Mesh;
    CouchCousin: THREE.Mesh;
    Cousin: THREE.Mesh;
    Cousin002: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane002_1: THREE.Mesh;
    CouchCousin001: THREE.Mesh;
    Cousin001: THREE.Mesh;
    Frame: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    CurtainHolders: THREE.Mesh;
    CurtainBar: THREE.Mesh;
    Torus: THREE.Mesh;
    Torus_1: THREE.Mesh;
    Torus001: THREE.Mesh;
    Torus001_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle003_1: THREE.Mesh;
    Donut_1: THREE.Mesh;
    Donut_2: THREE.Mesh;
    plate: THREE.Mesh;
    SideTable: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube031_1: THREE.Mesh;
    BgGround: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
  };
  materials: {
    MediumWhite: THREE.MeshStandardMaterial;
    Floor: THREE.MeshStandardMaterial;
    Yellow: THREE.MeshStandardMaterial;
    Green: THREE.MeshStandardMaterial;
    BlackMetal: THREE.MeshStandardMaterial;
    MediumGreen: THREE.MeshStandardMaterial;
    Blue: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
    MatBlack: THREE.MeshStandardMaterial;
    WindowLight: THREE.MeshStandardMaterial;
    Blue: THREE.MeshStandardMaterial;
    Curtains: THREE.MeshStandardMaterial;
    YellowLight: THREE.MeshStandardMaterial;
    MatWhite: THREE.MeshStandardMaterial;
    ReflectiveWhite: THREE.MeshStandardMaterial;
    Coffee: THREE.MeshStandardMaterial;
    Donut: THREE.MeshStandardMaterial;
    DonutCream: THREE.MeshStandardMaterial;
    LightGreen: THREE.MeshStandardMaterial;
    BlackMetal: THREE.MeshStandardMaterial;
  };
};

const makeObject = (node) => {
  if (node.children.length === 0) {
    return {
      type: node.type,
      hovered: false,
      id: v4(),
      data: {
        geometry: node.geometry,
        position: node.position,
        material: node.material,
        rotation: node.rotation,
        scale: node.scale,
      },
    };
  }
  return {
    type: node.type,
    hovered: false,
    id: v4(),
    children: node.children.map((children) => makeObject(children)),
    data: {
      geometry: node.geometry,
      position: node.position,
      material: node.material,
      rotation: node.rotation,
      scale: node.scale,
    },
  };
};
const greenList = [
  "BgGround",
  "Clock",
  "Coffe",
  "Curtain",
  "Curtain001",
  "CurtainBar",
  "CurtainHolders",
  "Donut",
  "DoubleCouch",
  "Floor",
  "Frame",
  "Plants",
  "Rug",
  "SideTable",
  "SingleCouch",
  "Table",
  "Walls",
  "Window",
];
export function Model() {
  const { nodes, materials } = useGLTF("/house-transformed.gltf") as GLTFResult;
  console.log(nodes);

  const objects = Object.keys(nodes).map((name) => {
    const node = nodes[name as keyof typeof nodes];
    if (
      ["Mesh", "Group"].includes(node.type) &&
      greenList.includes(node.name)
    ) {
      return atom<TObjectType>(makeObject(node));
    }
  });
  const cleanedObjects = objects.filter(
    (obj) => !!obj
  ) as PrimitiveAtom<TObjectType>[];

  return <Scene objects={cleanedObjects} />;
}

useGLTF.preload("/house-transformed.gltf");