import { useParams } from "react-router-dom";
import { mockProjects } from "../../mocks/mockProjects";
import { Container } from "../../styles/global";
import ProjectDetails from "../../componentes/ProjectDetails";

const ProjectDetailsPage = () => {
    const {id} = useParams<{id: string}>();
    const project = mockProjects.find((p) => p.id == Number(id));

    if(!project) {
        return <Container><p>Projeto não encontrado</p></Container>
    }

    return (
        <>
            <>
                <ProjectDetails id={project.id} name={project.name} description={project.description} role={project.role} year={project.year} context={project.context} gitLink={project.gitLink} deployLink={project.deployLink} gifDesktop={project.gifDesktop} stack={project.stack} largeDescription={project.largeDescription} solution={project.solution}/>
            </>
        </>
    )
}

export default ProjectDetailsPage;