import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer, Line } from "react-konva";
import { Rectangle } from "../rectangle";

const initialRectangles = [
  {
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    fill: "red",
    id: "rect1",
  },
  {
    x: 200,
    y: 0,
    width: 200,
    height: 100,
    fill: "green",
    id: "rect2",
  },
  {
    x: 400,
    y: 0,
    width: 200,
    height: 100,
    fill: "blue",
    id: "rect3",
  },
];

export const DiagramBuilder = () => {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const grid = 50;
  const gridWidth = 600;

  const linesA = [];
  const linesB = [];

  for (let i = 0; i < gridWidth / grid; i++) {
    linesA.push(
      <Line
        strokeWidth={1}
        stroke={"black"}
        points={[i * grid, 0, i * grid, gridWidth]}
      />
    );

    linesB.push(
      <Line
        strokeWidth={1}
        stroke={"black"}
        points={[0, i * grid, gridWidth, i * grid]}
      />
    );
  }

  return (
    <Stage
      width={gridWidth}
      height={window.innerHeight - 200}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      style={{
        border: "1px solid black",
        backgroundColor: "yellowgreen",
        width: gridWidth,
      }}
    >
      <Layer>
        {linesA}
        {linesB}
      </Layer>
      {/* <Layer>{gridComponents}</Layer> */}
      <Layer>
        {rectangles.map((rect, i) => {
          return (
            <Rectangle
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};
