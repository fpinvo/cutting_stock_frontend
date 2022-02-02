import React, { useState } from "react";
import { ButtonWrapper } from "./components";
import { SvgWrapper, ContentWrapper } from "../actionButton/components";
import { ButtonHoverSvg } from "../../../../utils/buttonHover";

export const ConfirmButton = (props) => {
  const { big, onClick, title, type, disabled, icon, borderColor } = props;

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <ButtonWrapper
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      big={big}
      borderColor={borderColor}
      buttonType={type ? type : "solid"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseUp={() => setIsActive(false)}
      disabled={disabled}
    >
      {isHover && !isActive && !(type === "text") && (
        <SvgWrapper>
          <ButtonHoverSvg color={type === "outlined" ? "#117140" : "white"} />
        </SvgWrapper>
      )}
      <ContentWrapper isHover={isHover && !isActive} buttonType={type}>
        {icon && <div className="mr-2">{icon}</div>}
        {title}
      </ContentWrapper>
    </ButtonWrapper>
  );
};
