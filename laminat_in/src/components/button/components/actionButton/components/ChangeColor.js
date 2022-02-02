import { keyframes } from "styled-components";

export const changeColor = (buttonType, theme) => keyframes`
  0% {
    color: ${buttonType === 'outlined' ? (theme?.colour?.secondary ?? "#04333B") : 'white'};
    fill: ${buttonType === 'outlined' ? (theme?.colour?.secondary ?? "#04333B") : 'white'};
  }

  30% {
    color:  ${buttonType === 'outlined' ? 'white' : (theme?.colour?.primary ?? "#1DBD6B")};
    fill: ${buttonType === 'outlined' ? 'white' : (theme?.colour?.primary ?? "#1DBD6B")};
  }

  100% {
    color:  ${buttonType === 'outlined' ? 'white' : (theme?.colour?.primary ?? "#1DBD6B")};
    fill: ${buttonType === 'outlined' ? 'white' : (theme?.colour?.primary ?? "#1DBD6B")};
  }
`;