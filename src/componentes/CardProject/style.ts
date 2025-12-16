import styled from "styled-components";

export const ImageProject = styled.img`
    max-width: 240px;
    height: 143px;
`

export const SubTitle = styled.h5`
    font-size: 16px;
    margin: 4px 0;
    color: #A5B4C4;
`

export const ProjectName = styled.h4`
    font-size: 24px;
    margin-bottom: 4px;
    color: #F9FAFB;
`

export const ProjectDescription = styled.p`
    font-size: 14px;
    color: #CBD5E1 ;
`

export const CardWrapper = styled.div`
    padding: 16px;
    background-color: #1e293b;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    max-width: 270px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #24303D;
    }

    @media (max-width:768px) {
        display: block;
        margin-bottom: 16px;
        text-align: start;
    }
`