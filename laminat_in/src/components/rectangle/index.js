import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer } from "react-konva";

export const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  const grid = 50;

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  let axis = {};

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragStart={(e) => {
          axis = { x: e.target.x(), y: e.target.y() };
        }}
        onDragEnd={(e) => {
          //   e.target.to(
          //     Math.round(e.target.x() / grid) * grid > 400 ||
          //       Math.round(e.target.y() / grid) * grid > 350 ||
          //       Math.round(e.target.y() / grid) * grid < 0 ||
          //       Math.round(e.target.x() / grid) * grid < 0
          //       ? {
          //           x: axis.x,
          //           y: axis.y,
          //         }
          //       : {
          //           x: Math.round(e.target.x() / grid) * grid,
          //           y: Math.round(e.target.y() / grid) * grid,
          //         }
          //   );
          //   onChange({
          //     ...shapeProps,
          //     x: e.target.x(),
          //     y: e.target.y(),
          //   });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            //width: Math.max(5, node.width() * scaleX),
            //height: Math.max(node.height() * scaleY),
            width: node.width(),
            height: node.height(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};
