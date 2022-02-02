import React, { useState } from "react";
import { TrashBinSvg } from "../../../../utils/trashBin";
import { ButtonWrapper } from "./components";

export const DeleteButton = (props) => {
  const { big, onClick, title, type, disabled, icon } = props;

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <ButtonWrapper
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      big={big}
      buttonType={type ? type : "solid"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseUp={() => setIsActive(false)}
      onMouseDown={() => setIsActive(true)}
      disabled={disabled}
    >
      {isHover && (
        <div className={`flex items-center justify-center mr-2`}>
          {icon ? (
            icon
          ) : (
            <TrashBinSvg
              color={
                type === "solid" || type === undefined
                  ? "white"
                  : type === "text" && (isActive || isHover)
                  ? "#981313"
                  : "#FD2020"
              }
            />
          )}
        </div>
      )}
      {((!isHover && !isActive) || type === "text") && <div>{title}</div>}
    </ButtonWrapper>
  );
};
