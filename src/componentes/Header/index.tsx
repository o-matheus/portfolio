import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

import { Container } from "../../styles/global";
import { HeaderWrapper, MenuMobile, NavMobile, TitleHeader } from "./styles";
import { useState } from "react";
import Nav from '../Nav';


const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container>
        <HeaderWrapper>
          <TitleHeader><Link to={"/"}>&lt;Matheus /&gt;</Link> </TitleHeader>
          <Nav />
          <MenuMobile onClick={() => setOpen(!open)}> <Menu /> </MenuMobile>
        </HeaderWrapper>
        <NavMobile open ={open}>
           <Nav onLinkClick={() => setOpen(false)} />
        </NavMobile>
      </Container>
    </>
  );
};

export default Header;
