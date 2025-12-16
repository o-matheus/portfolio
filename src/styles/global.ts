import styled, { createGlobalStyle, css } from "styled-components";
import { colors } from "./variables";

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        text-decoration: none;
        list-style: none;
    }

    body {
        background-color: ${colors.bgBody};
        height: 100%;
    }

`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  flex-grow: 1;

  @media (max-width: 768px) {
    max-width: 92%;
  }
`;

export const Section = css`
  display: flex;
  padding: 30px;
  justify-content: space-around;
  height: 50vh;

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 10px
  }
`;

export const TitleSection = styled.h2`
  font-size: 32px;
  color: ${colors.corFillStack};
  span {
    color: ${colors.corBotaoHeader};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TextSection = styled.p`
  font-size: 20px;
  color: ${colors.corResume};
  margin: 16px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`
