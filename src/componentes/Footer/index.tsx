import { FooterText, FooterWrapper } from "./style";


const Footer = () => {
    const ano = new Date().getFullYear();

    return (
        <FooterWrapper>
            <FooterText>
                 © {ano} Matheus Aguiar. Todos os direitos reservados.
            </FooterText>
        </FooterWrapper>
    )
}

export default Footer;