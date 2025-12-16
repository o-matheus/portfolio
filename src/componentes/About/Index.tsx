import { Container, TextSection, TitleSection } from "../../styles/global";
import { AboutText, AboutWrapper } from "./style";

const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <img src="https://placehold.co/281x500" alt="Vídeo apresentação" />
        <AboutText>
          <TitleSection>
            <span>01.</span> Sobre mim
          </TitleSection>
          <TextSection>
            Olá! Sou Matheus Aguiar, um desenvolvedor Front-End que transformou
            o entusiasmo pela tecnologia em uma nova trajetória de carreira.
            Minha jornada começou na sala de aula, como professor de História,
            onde desenvolvi as habilidades de comunicação clara, organização e
            empatia, essenciais para o trabalho em equipe e para a construção de
            soluções centradas no usuário.
          </TextSection>
          <TextSection>
            No desenvolvimento, meu foco é traduzir lógica robusta em interfaces
            funcionais e responsivas. Eu superei a barreira visual com a Lista
            de Contatos, implementando o ciclo CRUD com persistência de dados,
            crucial para o gerenciamento de estado. Minha capacidade de criar
            layouts fiéis e responsivos é demonstrada no site de Gestão Escolar
            (Bootstrap) e na landing page imersiva de 'Omniscient Reader's
            Viewpoint', mostrando versatilidade em diferentes aplicações.
          </TextSection>
          <TextSection>
            Atualmente, busco consolidar minha base técnica cursando Engenharia
            de Software e a formação Full Stack Java na EBAC. Meu objetivo é
            combinar a precisão da lógica da engenharia com o olhar humano da
            minha experiência anterior para criar impacto através de aplicações
            robustas e acessíveis.
          </TextSection>
        </AboutText>
      </AboutWrapper>
    </Container>
  );
};

export default About;
