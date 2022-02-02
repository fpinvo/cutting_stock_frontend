import styled, { css } from "styled-components";
import { changeColor } from ".";

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    color: white;

    ${(p) =>
      p.buttonType === "text" &&
      css`
        color: ${theme?.colour?.secondary ?? "#04333B"};
        &:hover {
          color: ${theme?.colour?.primary ?? "#1DBD6B"};
        }
      `}

    ${(p) =>
      p.buttonType === "outlined" &&
      css`
        color: ${theme?.colour?.secondary ?? "#04333B"};
      `}

    ${(p) =>
      p.isHover &&
      p.buttonType !== "text" &&
      css`
        animation: ${changeColor(p.buttonType, theme)} 1.5s;

        svg {
          animation: ${changeColor(p.buttonType, theme)} 1.5s;
        }
      `}
  `}
`;
