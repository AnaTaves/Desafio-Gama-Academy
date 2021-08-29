import React from "react";

import * as S from "./GlobalStyles";

import Formulario from "./components/formulario/formulario";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <S.Header>
        <h1>JobsNet</h1>
        <S.Logo />
      </S.Header>
      <S.Container>
        <Homepage />
        <Formulario />
      </S.Container>
      <Footer />
    </div>
  );
}
