import { Tag, TagsWrapper } from "./style";

type TagProps = {
    tech1: string
    tech2: string
    tech3: string
}

const Tags = ({tech1, tech2, tech3}:TagProps) => {

    return (
        <TagsWrapper>
            <Tag tipo="primario">{tech1}</Tag>
            <Tag tipo="secundario">{tech2}</Tag>
            <Tag tipo="terciario">{tech3}</Tag>
        </TagsWrapper>
    )
}

export default Tags;