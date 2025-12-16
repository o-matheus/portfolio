import { SocialWrapper } from "./style";
import tiktok from '../../assets/imgs/rede_social/tiktok.svg'
import linkedin from '../../assets/imgs/rede_social/linkedin.svg'
import github from '../../assets/imgs/rede_social/github.svg'
import discord from '../../assets/imgs/rede_social/discord.svg';

const SocialLinks = () => {

    return(
        <SocialWrapper>
            <a href="https://www.tiktok.com/@dev.vida" target="_blank"><img src={tiktok} alt="Tiktok" /></a>
            <a href="https://www.linkedin.com/in/matheus-aguiar-1b0192264/" target="_blank"><img src={linkedin} alt="Linkedin"/></a>
            <a href="https://github.com/o-matheus" target="_blank"><img src={github} alt="Github" /></a>
            <a href="https://discord.gg/VTDCRBY3QA" target="_blank"><img src={discord} alt="Discord" /></a>
        </SocialWrapper>
    )
}

export default SocialLinks;