import bStrap from "../../assets/imgs/stack/bStrap.svg"

import { BannerWrapper, Slider, TechIcon, TechLabel, Track, TrackItem } from './styles'

export const items = [
    {src: bStrap, name: "Bootstrap"},
    {src: 'src/assets/imgs/stack/css.svg', name: "CSS"},
    {src: 'src/assets/imgs/stack/cy.svg', name: "Cypress"},
    {src: 'src/assets/imgs/stack/github.svg', name: "GitHub"},
    {src: 'src/assets/imgs/stack/html.svg', name: "HTML"},
    {src: 'src/assets/imgs/stack/java.svg', name: "Java"},
    {src: 'src/assets/imgs/stack/js.svg', name: "JavaScript"},
    {src: 'src/assets/imgs/stack/react.svg', name: "React"},
    {src: 'src/assets/imgs/stack/sass.svg', name: "SASS"},
    {src: 'src/assets/imgs/stack/styledC.svg', name: "StyledComponents"},
    {src: 'src/assets/imgs/stack/ts.svg', name: "TypeScript"},
    {src: 'src/assets/imgs/stack/vue.svg', name: "Vue.js"},
]

const BannerTec: React.FC = () => {

    return (
        <BannerWrapper>
            <Slider aria-hidden={false}>
                <Track role='list'>
                {items.map((item, index) => (
                    <TrackItem key={`a-${index}`}>
                        <TechIcon src={`${item.src}`} alt={item.name} />
                        <TechLabel>{item.name}</TechLabel>
                    </TrackItem>
                ))}
                </Track>
                <Track aria-hidden={true}>
                {items.map((item, index) => (
                    <TrackItem key={`a-${index}`}>
                        <TechIcon src={`${item.src}`} alt={item.name} />
                        <TechLabel>{item.name}</TechLabel>
                    </TrackItem>
                ))}
                </Track>
            </Slider>
        </BannerWrapper>
    )
}

export default BannerTec;