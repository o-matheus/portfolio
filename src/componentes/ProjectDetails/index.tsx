import { Github, SquareArrowOutUpRight } from "lucide-react";
import type { project } from "../../models/project";
import { Container } from "../../styles/global";
import Button from "../Button";
import {
  DivButtons,
  GifDiv,
  InfoContent,
  InfoHeader,
  InfoProject,
  ProjetcDetailsWrapper,
  SubTitleProject,
  TextContainer,
  TextWrapper,
  TitleProject,
} from "./style";
type PropsProject = project;

const ProjectDetails = ({
  id,
  name,
  description,
  role,
  year,
  context,
  gitLink,
  deployLink,
  gifDesktop,
  stack,
  largeDescription,
  solution,
}: PropsProject) => {
  return (
    <Container>
      <ProjetcDetailsWrapper key={id}>
        <TitleProject>{name}</TitleProject>
        <SubTitleProject>{description}</SubTitleProject>
        <InfoProject>
          <InfoHeader>Função</InfoHeader>
          <InfoContent>{role}</InfoContent>
          <InfoHeader>Ano</InfoHeader>
          <InfoContent>{year}</InfoContent>
          <InfoHeader>Contexto</InfoHeader>
          <InfoContent>{context}</InfoContent>
          <InfoHeader>Tecnologias</InfoHeader>
          <InfoContent>
            {stack?.[0]} - {stack?.[1]} - {stack?.[2]}
          </InfoContent>
        </InfoProject>
        <DivButtons>
          <Button size="medio" color="secundaria">
            {" "}
            <a href={deployLink} target="_blank">
              Visitar o site
            </a>{" "}
            <SquareArrowOutUpRight />
          </Button>
          <Button size="medio" color="terciario">
            {" "}
            <a href={gitLink} target="_blank">
              Ver repositório
            </a>{" "}
            <Github />{" "}
          </Button>
        </DivButtons>
        <GifDiv>
          <video autoPlay muted playsInline src={gifDesktop}></video>
          <img src={gifDesktop} alt="Versão do site para desktop" />
        </GifDiv>
        <TextWrapper>
          <TextContainer>
            <h3>Descrição</h3>
            <p>
              {largeDescription}
            </p>
          </TextContainer>
          <TextContainer>
            <h3>Solução</h3>
            <p>
             {solution}
            </p>
          </TextContainer>
        </TextWrapper>
      </ProjetcDetailsWrapper>
    </Container>
  );
};

export default ProjectDetails;
