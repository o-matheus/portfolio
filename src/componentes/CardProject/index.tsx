import { Link } from "react-router-dom";
import type { project } from "../../models/project";
import { CardWrapper, ImageProject, ProjectDescription, ProjectName, SubTitle } from "./style";
import Tags from "../Tags";

type CardProps = project;


const CardProject = ({id, image, context, name, description, stack}: CardProps) => {

    return (
        <CardWrapper as={Link} to={`/projetos/${id}`}>
            <ImageProject src={image} alt={`Imagem da HomePage do projeto ${name}`} />
            <SubTitle>{context}</SubTitle>
            <ProjectName>{name}</ProjectName>
            <ProjectDescription>{description}</ProjectDescription>
            <Tags tech1={stack[0]} tech2={stack[1]} tech3={stack[2]} />
        </CardWrapper>
    )
}

export default CardProject;