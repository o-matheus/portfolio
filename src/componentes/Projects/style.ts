import styled from "styled-components";
import { Section, TitleSection } from "../../styles/global";

export const ProjectCards = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 40px;

  @media (max-width: 768px) {
            display: block;
            margin: 0 auto;
            padding: 0;
        }
`;

export const ProjectWrapper = styled.section`
  ${Section}
  padding-top: 0;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;

  ${TitleSection} {
        padding-bottom: 20px;

        @media (max-width: 768px) {
            padding-bottom: 10px;
        }
    }

   @media (max-width: 768px) {
            margin: 0 auto;
            text-align: center;
            margin-bottom: 16px;
        }
`;
