import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #333333;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 70%;
  cursor: pointer;
  height: 65px;
  width: 65px;

  &.calc-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 15px;
    grid-column-gap: 10px;
  }

  &.key-zero {
    grid-column: span 2;
    width: 100%;
    border-radius: 30px;
  }

  &.key-operate {
    background: #ff9501;
  }

  &.key-others {
    background: #a6a6a6;
    color: #000000;
  }

  &:active,
  &:focus {
    filter: brightness(120%);
  }
`;
