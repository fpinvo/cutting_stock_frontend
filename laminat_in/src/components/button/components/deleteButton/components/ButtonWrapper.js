import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 88px;
  height: ${p => p.big ? '40px' : '32px'};
  font-size: 14px;
  border-radius: ${p => p.buttonType === 'text' ? '' : '60px'};
  outline: none;
  position: relative;
  overflow: hidden;

  ${p => p.buttonType === 'solid' && css`
    background-color: #FD2020;
    border: 1px solid #FD2020;
    font-weight: 600;
    color: white;

    &:active {
      background-color: #981313;
      border: 1px solid #981313;
    }

    &:disabled {
      opacity: .4;
    }
  `}

  ${p => p.buttonType === 'outlined' && css`
    border: 1px solid ${p.borderColor ? p.borderColor : '#E3E3E3'};
    color: #FD2020;
    font-weight: 400;
    display: flex;
    align-items: center;
    background-color: white;

    svg {
      color: #FD2020;
    }

    &:active {
      border: 1px solid #FD2020;
    }

    &:disabled {
      opacity: .4;
    }
  `}

  ${p => p.buttonType === 'text' && css`
    color: #FB0E0E;
    font-weight: 600;
    font-size: 12px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    padding: 0px;

    &:active {
      color: #981313;
    }

    &:hover {
      color: #981313;
    }

    &:disabled {
      color: #FEA6A6;
      opacity: .4;
    }
  `}

  &:focus{
    outline: none;
  }
`;