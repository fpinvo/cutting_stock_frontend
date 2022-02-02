import styled from "styled-components";
import { grow } from ".";

export const SvgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  svg {
    width: 45px;
    height: 46px;
    position: absolute;
    bottom: -100%;
    animation: ${grow} 1.5s;
  }
`;
