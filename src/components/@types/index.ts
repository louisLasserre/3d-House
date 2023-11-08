export type TObjectType = {
  type: "Mesh" | "Group";
  children?: TObjectType[];
  hovered: boolean;
  id: string;
  data: {
    scale: THREE.Vector3;
    rotation: THREE.Vector3;
    material: THREE.Material;
    geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
    position: THREE.Vector3;
  };
};
