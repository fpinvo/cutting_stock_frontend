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

  function degToRad(angle) {
    //console.log("njkj: ", angle);
    return (angle / 180) * Math.PI;
  }

  function RadToDeg(rad) {
    return (180 / Math.PI) * rad;
  }

  function getSnapRotation(rotation) {
    //console.log("mmk: ", rotation);
    if (rotation >= 45 && rotation < 135) {
      return 90;
    } else if (rotation >= 135 && rotation < 225) {
      return 0;
    } else if (rotation >= 225 && rotation < 305) {
      return 90;
    } else {
      return 0;
    }
  }

  let axisForRotation = {};
  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragStart={(e) => {
          //console.log("yfyg: ", e);
          axis = { x: e.target.x(), y: e.target.y() };
        }}
        onDragEnd={(e) => {
          e.target.to(
            Math.round(e.target.x() / grid) * grid > 400 ||
              Math.round(e.target.y() / grid) * grid > 350 ||
              Math.round(e.target.y() / grid) * grid < 0 ||
              Math.round(e.target.x() / grid) * grid < 0
              ? {
                  x: axis.x,
                  y: axis.y,
                }
              : {
                  x: Math.round(e.target.x() / grid) * grid,
                  y: Math.round(e.target.y() / grid) * grid,
                }
          );
          //   onChange({
          //     ...shapeProps,
          //     x: e.target.x(),
          //     y: e.target.y(),
          //   });
        }}
        onTransformStart={(e) => {
          //console.log("e: ", e.target._lastPos);
          axisForRotation = e.target._lastPos;
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

          node.rotation(getSnapRotation(Math.abs(node.attrs.rotation)));
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
            width: node.width(),
            height: node.height(),
          });
          e.target.to(
            Math.round(e.target.x() / grid) * grid > 400 ||
              Math.round(e.target.y() / grid) * grid > 350 ||
              Math.round(e.target.y() / grid) * grid < 0 ||
              Math.round(e.target.x() / grid) * grid < 0
              ? {
                  x: axis.x,
                  y: axis.y,
                }
              : {
                  x: Math.round(e.target.x() / grid) * grid,
                  y: Math.round(e.target.y() / grid) * grid,
                }
          );
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
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
