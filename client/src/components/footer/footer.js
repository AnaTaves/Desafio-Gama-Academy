import React from "react";
import * as S from "./footer-styles";

const Footer = () => (
  <S.FooterContainer>
    <p>Projeto feito por</p>
    <S.Link href="https://github.com/AnaTaves">
      Ana Cláudia Tavares&#169;
    </S.Link>
  </S.FooterContainer>
);

export default Footer;
