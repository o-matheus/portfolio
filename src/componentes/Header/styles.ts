import styled from "styled-components";
import { colors } from "../../styles/variables";
import { NavWrapper } from "../Nav/style";

type PropsHeader = {
  open?: boolean;
  select?: boolean;
};

export const HeaderWrapper = styled.header`
  color: ${colors.corTextoHeader};
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    position: relative;
    padding-top: 10px;
  }
`;

export const TitleHeader = styled.h1`
  font-size: 24px;

  a {
    color: ${colors.corTextoHeader};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MenuMobile = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${colors.corTextoHeader};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
export const NavMobile = styled.nav<PropsHeader>`
  margin-top: 8px;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colors.bgBody};
  padding: 30px;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-10px)")};
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;

  ${NavWrapper} {
    display: ${({ open }) => (open ? "block" : "none")};

    ul {
      flex-direction: column;
      align-items: center;
      li {
        padding: 15px 0;
        display: block;
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
