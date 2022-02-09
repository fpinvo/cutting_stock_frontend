import React from "react";
import { DiagramBuilder } from "../../components/diagramBuilder";

function ShapesContainer(props) {
  return (
    <div
      style={{
        margin: "5em",
      }}
    >
      <DiagramBuilder></DiagramBuilder>
    </div>
  );
}

export default ShapesContainer;
