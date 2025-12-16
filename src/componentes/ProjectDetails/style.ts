import styled from "styled-components";
import { Section } from "../../styles/global";
import { colors } from "../../styles/variables";

export const TitleProject = styled.h1`
  width: 100%;
  font-size: 48px;
  color: ${colors.corNameDev};
  align-items: flex-start;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitleProject = styled.h3`
  display: block;
  font-size: 20px;
  color: ${colors.corNameDev};
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoProject = styled.dl`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px 24px;
  margin-top: 16px;
  font-size: 16px;
  color: ${colors.corResume};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InfoHeader = styled.dt`
  padding-top: 16px;
`;

export const InfoContent = styled.dd`
  padding-top: 16px;
  font-weight: bold;
`;

export const DivButtons = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
    justify-content: start;
  }
`;

export const GifDiv = styled.div`
  margin-top: 68px;
  display: block;
  video {
    width: 100%;
    object-fit: contain;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 100px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin-top: 40px;
  h3 {
    font-size: 32px;
    color: ${colors.corNameDev};
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: ${colors.corResume};
  }

  @media (max-width: 768px) {
    display: block;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`


export const ProjetcDetailsWrapper = styled.section`
  ${Section}
  flex-direction: column;
  margin-top: 50px;
  height: auto;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
