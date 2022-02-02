import { keyframes } from "styled-components";

export const grow = keyframes`
  0% {
    transform: scale(0.5, 0.5);
  }

  20% {
    transform: scale(1.5, 1.5);
  }
  21% {
    transform: scale(1.5, 1.5);
  }
  40% {
    transform: scale(2, 2);
  }

  41% {
    transform: scale(2, 2);
  }

  60% {
    transform: scale(4, 4);
  }
  61% {
    transform: scale(4, 4);
  }

  80% {
    transform: scale(6, 6);
  }
  81% {
    transform: scale(6, 6);
  }

  100% {
    transform: scale(8, 8);
  }
`;