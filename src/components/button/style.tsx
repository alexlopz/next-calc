import styled from 'styled-components';

export const StyledButton = styled.button<{
  operate?: boolean;
  others?: boolean;
  zero?: boolean;
}>`
  background: ${(props) =>
    props?.operate ? '#ff9501' : props?.others ? '#a6a6a6' : '#333'};
  color: ${(props) => (props.others ? '#000' : '#fff')};
  font-size: 1.5rem;
  border: none;
  border-radius: ${(props) => (props?.zero ? '30px' : '70%')};
  cursor: pointer;
  height: 65px;
  width: ${(props) => (props?.zero ? '130px' : '65px')};
  &:active,
  &:focus {
    filter: brightness(120%);
  }
`;
