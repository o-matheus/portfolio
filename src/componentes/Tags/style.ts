import styled from "styled-components";

type PropsTag = {
    tipo: 'primario' | 'secundario' | 'terciario'
}

export const TagsWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 8px;
    font-size: 10px;
    padding-top: 10px;
`

export const Tag = styled.div<PropsTag>`
    background-color: #F3F4F6;
    padding: 4px 8px;
    border-radius: 8px;
    color: ${({tipo}) => tipo === 'primario' ? '#000' : 
    tipo === 'secundario' ? '#636AE8' : '#E8618C' }
    
`



