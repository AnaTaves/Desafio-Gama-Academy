import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as BriefCase } from "./assets/briefcase-solid.svg";

export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0 auto;
}

body{
  padding: 0;
  background: #f5f5f5;
}

`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Logo = styled(BriefCase)`
  width: 50px;
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
