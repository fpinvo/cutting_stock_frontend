import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    padding: ${(p) => (p.big ? "8px 16px" : "4px 16px")};
    font-size: 14px;
    border-radius: ${(p) => (p.buttonType === "text" ? "" : "7px")};
    outline: none;
    position: relative;
    overflow: hidden;
    margin-right: 5px;

    ${(p) =>
      p.buttonType === "solid" &&
      css`
        background-color: ${theme?.colour?.primary ?? "#1DBD6B"};
        border: 1px solid ${theme?.colour?.primary ?? "#1DBD6B"};
        font-weight: 600;

        &:active {
          background-color: ${theme?.colour?.primary ?? "#0D5530"};
          border: 1px solid ${theme?.colour?.primary ?? "#0D5530"};
        }

        &:disabled {
          opacity: 0.4;
        }
      `}

    ${(p) =>
      p.buttonType === "outlined" &&
      css`
        border: 1px solid ${p.borderColor ? p.borderColor : "grey"};
        color: ${theme?.colour?.secondary ?? "#04333B"};
        font-weight: 400;
        display: flex;
        align-items: center;
        background-color: white;

        &:active {
          border: 1px solid ${theme?.colour?.secondary ?? "#04333B"};
        }

        &:disabled {
          opacity: 0.4;
        }
      `}

    ${(p) =>
      p.buttonType === "text" &&
      css`
        color: ${theme?.colour?.secondary ?? "#04333B"};
        font-weight: 600;
        font-size: 12px;
        text-decoration: underline;
        display: flex;
        align-items: center;
        padding: 0px;

        &:active {
          color: ${theme?.colour?.primary ?? "#1DBD6B"};
        }

        &:hover {
          color: ${theme?.colour?.primary ?? "#1DBD6B"};
        }

        &:disabled {
          color: ${theme?.colour?.secondary ?? "#04333B"};
          opacity: 0.4;
        }
      `}

    &:focus {
      outline: none;
    }
  `}
`;
