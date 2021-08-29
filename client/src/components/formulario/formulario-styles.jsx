import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 720px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  margin: 10px;

  @media only screen and (max-width: 720px) {
    text-align: center;
  }
`;

export const DadosContainer = styled.fieldset`
  display: flex;
  padding: 25px;
  justify-content: center;

  section {
    display: inherit;
    flex-direction: column;
    margin: 10px;
  }

  input {
    background-color: #e0d8d7;
    border: 1px solid #000000;
    width: 300px;
    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DocumentosContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 9px;
  margin-bottom: 20px;

  section {
    display: inherit;
    flex-direction: column;
  }
 
  input{
  background-color: #e0d8d7;
  border: 1px solid #000000;
  width: 150px;
  &:focus {
    outline: none;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;

  input {
    margin: 15px;
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Mandatory = styled.span`
  font-weight: 700;
  color: red;
`;

export const Button = styled.button`
  margin-left: 45%;
  padding: 12px;
  background-color: transparent;
  border: 2px solid #050505;
  color: #050505;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #0099cc;
    border: 2px solid #0099cc;
  }
`;

export const Erro = styled.h4`
  color: #ff0000;
  text-align: center;
  margin: 5px;
`;
