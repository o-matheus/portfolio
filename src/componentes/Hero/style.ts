import styled from "styled-components";
import { colors } from "../../styles/variables";
import { Section } from "../../styles/global";

export const HeroWrapper = styled.section`
    ${Section}

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        margin-top: 0;
        padding: 10px 16px;
        padding-bottom: 0;
        align-items: center;
        justify-content: center;
        height: auto;
    }
`
export const Saudacao = styled.p`
    color: ${colors.corBotaoHeader};
    margin-bottom: 8px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const NameDev = styled.h2`
    font-size: 52px;
    color: ${colors.corNameDev};

    @media (max-width: 768px) {
        font-size: 26px;
    }
`

export const SubTitle = styled.h3`
    font-size: 48px;
    color: ${colors.corSubTitle};

    @media (max-width: 768px) {
        font-size: 20px;
    }
`
export const Text = styled.p `
    font-size: 20px;
    color: ${colors.corResume};
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: justify;
    }
`

export const Resume = styled.div`
    max-width: 620px;
    margin-top: 16px;

    @media (max-width: 768px) {
        margin-top: 8px;
    }
`

export const Course = styled.div`
    display: flex;
    margin-top: 8px;

    svg {
        margin-right: 8px;
        color: ${colors.corBotaoHeader};
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

export const Education = styled.div`
    margin: 16px 0;
    

    @media (max-width: 768px) {
        margin: 8px 0;
    }
`
export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 32px;

    @media (max-width: 768px) {
        gap: 16px;
        justify-content: center;
    }
`

export const FooterHero = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row-reverse;
    gap: 32px;
    justify-content: start;

    @media (max-width: 768px) {
        margin-top: 16px;
        display: block;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width:768px) {
        display: block;
        text-align: center;
        max-width: 320px;
    }
`

export const DevImage = styled.img`
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 210px;
        height: 210px;
        
    }
`
