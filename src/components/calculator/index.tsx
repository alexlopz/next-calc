import { useState } from 'react';
import { CalcKeys, CalcText, Container } from './style';
import ButtonCalc from '../button';
import { buttons } from './buttonSources';

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

  const handlerClick = (v: any, number: any) => {
    switch (v) {
      case 'limpiar':
        limpiarPantalla();
        break;
      case 'borrar':
        borrarUltimoCaracter();
        break;
      case 'calculo':
        realizarCalculo();
        break;
      case 'numero':
        agregarNumero(number);
        break;
    }
  };

  return (
    <Container>
      <CalcText>{inputValue}</CalcText>
      <CalcKeys>
        {buttons.map((btn: any, index) => (
          <ButtonCalc
            onClick={() => handlerClick(btn?.type, btn?.value)}
            cls={btn?.class}
            key={index}
            val={btn.value}
          />
        ))}
      </CalcKeys>
    </Container>
  );
};

export default Calculator;
