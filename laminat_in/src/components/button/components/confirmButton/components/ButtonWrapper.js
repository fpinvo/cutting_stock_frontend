import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  padding: ${p => p.big ? '8px 16px' : '4px 16px'};
  font-size: 14px;
  border-radius: ${p => p.buttonType === 'text' ? '' : '60px'};
  outline: none;
  position: relative;
  overflow: hidden;

  ${p => p.buttonType === 'solid' && css`
    background-color: #117140;
    border: 1px solid #117140;
    font-weight: 600;

    &:active {
    background-color: #0D5530;
    border: 1px solid #0D5530;
    }

    &:disabled {
      opacity: .4;
    }
  `}

  ${p => p.buttonType === 'outlined' && css`
    border: 1px solid ${p.borderColor ? p.borderColor : '#E3E3E3'};
    color: #117140;
    font-weight: 400;
    display: flex;
    align-items: center;
    background-color: white;

    &:active {
      border: 1px solid #117140;
    }

    &:disabled {
      opacity: .4;
    }
  `}

  ${p => p.buttonType === 'text' && css`
    color: #117140;
    font-weight: 600;
    font-size: 12px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    padding: 0px;

    &:active {
      color: #0D5530;
    }

    &:hover {
      color: #0D5530;
    }

    &:disabled {
      color: #61D197;
      opacity: .4;
    }
  `}

  &:focus{
    outline: none;
  }
`;