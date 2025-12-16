import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FooterWrapper = styled.footer`
    width: 100%;
    text-align: center;
    position: relative;
    padding-bottom: 8px;
    bottom: 0;
    

    @media (max-width: 768px) {
        position: relative;
        padding: 0;
    }
`

export const FooterText = styled.p`
    font-size: 16px;
    color: ${colors.corFillStack};

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

