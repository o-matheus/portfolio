import { colors } from './../../styles/variables';
import styled from "styled-components";

type PropsButton = {
    color: 'primario' | 'secundaria' | 'terciario'
    size: 'medio' | 'pequeno'
}

const textColor = {
    primario: colors.bgBody,
    secundaria: colors.corBotaoHeader,
    terciario: colors.corFillSocial
}

const bgColor = {
    primario: colors.corBotaoHeader,
    secundaria: colors.bgBody,
    terciario: colors.bgBody
}

const borderColor = {
    primario: "transparent",
    secundaria: colors.corBotaoHeader,
    terciario: colors.corFillSocial
}

export const Btn = styled.button<PropsButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: ${({color}) => textColor[color]};
    background-color: ${({color}) => bgColor[color]};
    font-size: ${({size}) => (size == 'medio' ? '16px' : '14px')};
    padding: 8px 16px;
    border: 1px solid ${({color}) => borderColor[color]};


    a {
        color: ${({color}) => textColor[color]};
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        gap: 4px;
        font-size: ${({size}) => (size == 'medio' ? '10px' : '10px')};
    }
`

