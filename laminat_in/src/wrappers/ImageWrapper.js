import styled, { css } from "styled-components";

export const ImageWrapper = styled.img`
  ${({ width, height, round }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${round ? " 50%" : ""};
    margin-right: 5px;

    object-fit: cover;
  `}
`;
