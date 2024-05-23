import { StyledButton } from './style';

const ButtonCalc: React.FC<{
  val: string;
  onClick?: () => void;
  cls?: string | undefined;
}> = ({ val, onClick, cls }) => {
  return (
    <StyledButton onClick={onClick} className={cls}>
      {val}
    </StyledButton>
  );
};

export default ButtonCalc;
