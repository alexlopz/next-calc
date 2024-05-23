import { useState } from 'react';
import { CalcKeys, CalcText, Container } from './style';
import ButtonCalc from '../button';

const Calculator: React.FC = () => {
  const [inputValue, setInputValue] = useState('0');

  const agregarNumero = (numero: any) => {
    setInputValue((prev) => (prev === '0' ? numero : prev + numero));
  };

  const limpiarPantalla = () => setInputValue('0');

  const borrarUltimoCaracter = () =>
    setInputValue((prev) => prev.slice(0, -1) || '0');

  const realizarCalculo = () => {
    try {
      const result = eval(inputValue);
      setInputValue(String(result));
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <Container>
      <CalcText>{inputValue}</CalcText>
      <CalcKeys>
        <ButtonCalc onClick={() => limpiarPantalla()} others>
          AC
        </ButtonCalc>
        <ButtonCalc onClick={() => borrarUltimoCaracter()} others>
          DEL
        </ButtonCalc>
        <ButtonCalc onClick={() => agregarNumero('%')} operate others>
          %
        </ButtonCalc>
        <ButtonCalc onClick={() => agregarNumero('/')} operate>
          /
        </ButtonCalc>
        {['7', '8', '9', '4', '5', '6', '1', '2', '3'].map((num) => (
          <ButtonCalc key={num} onClick={() => agregarNumero(num)}>
            {num}
          </ButtonCalc>
        ))}
        <ButtonCalc onClick={() => agregarNumero('-')} operate>
          -
        </ButtonCalc>
        <ButtonCalc onClick={() => agregarNumero('+')} operate>
          +
        </ButtonCalc>
        <ButtonCalc onClick={() => agregarNumero('0')} zero>
          0
        </ButtonCalc>
        <ButtonCalc onClick={() => agregarNumero('.')}>,</ButtonCalc>
        <ButtonCalc onClick={() => realizarCalculo()} operate>
          =
        </ButtonCalc>
      </CalcKeys>
    </Container>
  );
};

export default Calculator;
