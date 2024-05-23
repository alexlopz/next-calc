import { StyledButton } from './style';

const ButtonCalc: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  operate?: any;
  others?: any;
  zero?: any;
}> = ({ children, onClick, operate, others, zero }) => {
  return (
    <StyledButton
      onClick={onClick}
      operate={operate}
      others={others}
      zero={zero}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonCalc;
