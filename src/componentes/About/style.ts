import styled from "styled-components";
import { Section, TitleSection } from "../../styles/global";

export const AboutVideo = styled.img`

`

export const AboutWrapper = styled.section`
    ${Section}
    gap: 50px;
    height: fit-content;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        
        gap: 10px;
        margin-top: 0;
        padding-top: 10px;
    }
`

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    width: 685px;

    @media (max-width: 768px) {

        ${TitleSection} {
            text-align: center;
        }

        text-align: justify;
        height: fit-content;
        max-width: 100%;
    }
`