import { Container } from "../../styles/global";
import {
  ButtonsWrapper,
  Course,
  DevImage,
  Education,
  FooterHero,
  HeroWrapper,
  NameDev,
  Resume,
  Saudacao,
  SubTitle,
  Text,
  TextWrapper,
} from "./style";
import dev_image from "../../assets/imgs/Outros/dev_image.jpg";
import { Computer, University } from "lucide-react";
import Button from "../Button";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import BannerTec from "../BannerTec";

const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <TextWrapper>
          <Saudacao>Olá meu nome é</Saudacao>
          <NameDev>Matheus Aguiar</NameDev>
          <SubTitle>Construo sites para web</SubTitle>
          <Resume>
            {" "}
            <Text>
              Sou um Desenvolvedor Front-End apaixonado por acessibilidade e
              educação. Atualmente focado em React, transformando meu background
              em História em código bem documentado.{" "}
            </Text>
          </Resume>
          <Education>
            <Course>
              <Computer />
              <Text>Cursando Desenvolvimento FullStack Java na EBAC </Text>
            </Course>
            <Course>
              <University />
              <Text>Cursando Engenharia de Software na Unicesumar </Text>
            </Course>
            <FooterHero>
              <SocialLinks />
              <ButtonsWrapper>
                <Button color="primario" size="pequeno">
                  <Link to={"/projetos"}>Veja meus projetos</Link>
                </Button>
                <Button color="secundaria" size="pequeno">
                  <Link to={"/contato"}> Vamos conversar </Link>
                </Button>
              </ButtonsWrapper>
            </FooterHero>
          </Education>
        </TextWrapper>
        <DevImage src={dev_image} />
      </HeroWrapper>
        <BannerTec />
    </Container>
  );
};

export default Hero;
