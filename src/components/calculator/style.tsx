import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  padding: 25px;
  width: 350px;
  border-radius: 10px;
  display: grid;
  place-items: center;
`;

export const CalcText = styled.div`
  margin-bottom: 20px;
  width: 100%;
  font-size: 3.5rem;
  text-align: end;
  color: #fff;
`;

export const CalcKeys = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;