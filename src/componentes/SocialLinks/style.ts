import styled from "styled-components";



export const SocialWrapper = styled.div`
    display: flex;
    gap: 8px;

    a {
        img {
            width: 32px;
            height: 32px;

        }
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        margin-bottom: 8px;
    }
`