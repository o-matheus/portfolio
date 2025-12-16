import styled from "styled-components";
import { colors } from "../../styles/variables";

type PropsNav = {
    select?: boolean 
}

export const Curriculo = styled.a`
    background-color: transparent;
    color: ${colors.corBotaoHeader};
    border: 1px solid ${colors.corBotaoHeader};
`

export const MenuItem = styled.li<PropsNav>`
    padding: 6px 12px;
    border-bottom: ${({select}) => (select ? `1px solid ${colors.corBotaoHeader}` : 'none')};
`

export const NavWrapper = styled.nav`
    font-size: 16px;

    ul {
        display: flex;
        ${MenuItem} {
            a {
                font-size: 16px;
                color: ${colors.corTextoHeader};
            }

            ${Curriculo} {
                color: ${colors.corBotaoHeader};
                padding: 6px 12px;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`