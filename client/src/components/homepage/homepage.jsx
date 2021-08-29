import React from "react";

import Office from "../../assets/office-unsplash.jpg";

import * as S from "./homepage-styles";

const Homepage = () => (
  <S.Container>
    <S.Title>Bem vindo a JobsNet!</S.Title>
    <S.Text>
      Estamos comprometidos a te ajudar a se recolocar no mercado de trabalho.
      Preencha o formulário ao lado.
    </S.Text>
    <S.Image alt="office" src={Office} />
  </S.Container>
);
export default Homepage;
