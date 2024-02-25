import { type PrimitiveAtom, useAtom } from "jotai";
import type { TObjectType } from "./@types";
import useMeshControls from "@/hooks/useMeshControls";
import { Select } from "@react-three/postprocessing";
import { Edges, Outlines } from "@react-three/drei";

interface SceneObjectProps {
  object: PrimitiveAtom<TObjectType>;
}

export function SceneObject({ object }: SceneObjectProps) {
  const [values, setObject] = useAtom(object);

  const { position, scale, geometry, material, rotation, color } = values.data;
  const { type, hovered, children, id } = values;

  let Mycolor = [color?.getHexString()];

  if (!color && type === "Group") {
    Mycolor = children!.map((child) => child.data.color?.getHexString());
  }

  console.log(Mycolor);

  const { meshEvents, target } = useMeshControls(id, { color: Mycolor });
  const setHover = (x: boolean) =>
    setObject((prev) => ({ ...prev, hovered: x }));
  const ObjectComponent = type === "Mesh" ? "mesh" : "group";

  return (
    <ObjectComponent
      geometry={geometry}
      position={position}
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      rotation={rotation}
      material={material}
      {...meshEvents}
      name={id}
    >
      {/* {type === "Mesh" && (
        <Edges
          visible={target.name === id || hovered}
          scale={1.1}
          renderOrder={1000}
        >
          <meshBasicMaterial
            transparent
            color={target.name === id ? "white" : "yellow"}
            depthTest={false}
          />
        </Edges>
      )} */}

      {type === "Mesh" && (
        <Outlines
          visible={target.name === id || hovered}
          transparent
          screenspace
          opacity={1}
          toneMapped={false}
          polygonOffset
          polygonOffsetFactor={0}
          angle={Math.PI}
          renderOrder={1000}
          thickness={6}
          color={target.name === id ? "white" : "yellow"}
        />
      )}

      {type === "Group" &&
        children!.length !== 0 &&
        children!.map((child, index) => {
          return (
            <mesh
              key={index}
              rotation={child.data.rotation}
              geometry={child.data.geometry}
              position={child.data.position}
              scale={child.data.scale}
              material={child.data.material}
              //material-color={hovered ? "skyblue" : ""}
            >
              <Outlines
                visible={target.name === id || hovered}
                transparent
                screenspace
                opacity={1}
                toneMapped={false}
                polygonOffset
                polygonOffsetFactor={100}
                angle={Math.PI}
                renderOrder={1000}
                thickness={6}
                color={target.name === id ? "white" : "yellow"}
              />
              {/* <Edges
                visible={target.name === id || hovered}
                scale={1.05}
                renderOrder={1000}
              >
                <meshBasicMaterial
                  transparent
                  color={target.name === id ? "white" : "yellow"}
                  depthTest={false}
                />
              </Edges> */}
            </mesh>
          );
        })}
    </ObjectComponent>
  );
}
