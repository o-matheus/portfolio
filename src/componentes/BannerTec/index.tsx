import bStrap from "../../assets/imgs/stack/bStrap.svg"
import css from "../../assets/imgs/stack/css.svg"
import cypress from "../../assets/imgs/stack/cy.svg"
import github from "../../assets/imgs/stack/github.svg"
import html from "../../assets/imgs/stack/html.svg"
import java from "../../assets/imgs/stack/java.svg"
import javascript from "../../assets/imgs/stack/js.svg"
import react from "../../assets/imgs/stack/react.svg"
import sass from "../../assets/imgs/stack/sass.svg"
import styled from "../../assets/imgs/stack/styledC.svg"
import typescript from "../../assets/imgs/stack/ts.svg"
import vue from "../../assets/imgs/stack/vue.svg"

import { BannerWrapper, Slider, TechIcon, TechLabel, Track, TrackItem } from './styles'

export const items = [
    {src: bStrap, name: "Bootstrap"},
    {src: css, name: "CSS"},
    {src: cypress, name: "Cypress"},
    {src: github, name: "GitHub"},
    {src: html, name: "HTML"},
    {src: java, name: "Java"},
    {src: javascript, name: "JavaScript"},
    {src: react, name: "React"},
    {src: sass, name: "SASS"},
    {src: styled, name: "StyledComponents"},
    {src: typescript, name: "TypeScript"},
    {src: vue, name: "Vue.js"},
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