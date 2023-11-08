import React, { PropsWithChildren } from "react";

interface ControllableProps extends PropsWithChildren {}

function Controllable(props: ControllableProps) {
  const { children } = props;

  return <div>{children}</div>;
}

export default Controllable;
