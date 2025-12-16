import { mockProjects } from "../../mocks/mockProjects";
import { Container, TitleSection } from "../../styles/global";
import CardProject from "../CardProject";
import { ProjectCards, ProjectWrapper } from "./style";

const Project = () => {
  return (
    <Container>
      <ProjectWrapper>
        <TitleSection>
          <span>02.</span> Projetos
        </TitleSection>
        <ProjectCards>
          {mockProjects.map((p) => (
            <CardProject
              key={p.id}
              id={p.id}
              image={p.image}
              context={p.context}
              name={p.name}
              description={p.description}
              stack={p.stack}
            />
          ))}
        </ProjectCards>
      </ProjectWrapper>
    </Container>
  );
};

export default Project;
