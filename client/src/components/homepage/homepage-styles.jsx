import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  margin: auto;

  @media screen and (max-width: 720px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 80px;
  left: 20%;
  color: #2b2b28;
  font-size: 2.5em;
  font-weight: 800;
  text-shadow: 2px 2px #bcbdb9;
`;

export const Text = styled.p`
  position: absolute;
  top: 140px;
  left: 2%;
  word-wrap: break-word;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;

  @media screen and (max-width: 720px) {
    top: 200px;
  }
`;
