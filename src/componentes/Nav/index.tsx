import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Curriculo, MenuItem, NavWrapper } from "./style";

type NavProps = {
  onLinkClick?: () => void;
}

const Nav = ({onLinkClick}: NavProps) => {
  const [selected, setSelect] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/sobre")) setSelect("sobre");
    else if (location.pathname.startsWith("/projetos")) setSelect("projetos");
    else if (location.pathname.startsWith("/contato")) setSelect("contato");
    else setSelect("")
  }, [location.pathname]);

  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  }

  return (
    <NavWrapper>
      <ul>
        <MenuItem select={selected === "sobre"}>
          <Link to="sobre" onClick={handleClick}>Sobre</Link>
        </MenuItem>
        <MenuItem select={selected === "projetos"}>
          <Link to="projetos" onClick={handleClick}>Projetos</Link>
        </MenuItem>
        <MenuItem select={selected === "contato"}>
          <Link to="contato" onClick={handleClick}>Contato</Link>
        </MenuItem>
        <MenuItem>
          <Curriculo href="/curriculo.pdf" target="_blank">
            Curriculo
          </Curriculo>
        </MenuItem>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
