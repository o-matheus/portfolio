import emailjs from "@emailjs/browser"

import { Mail } from "lucide-react";
import { Container, TitleSection } from "../../styles/global";
import {
  ContactContent,
  ContactWrapper,
  FormWrapper,
  InfoFormWrapper,
  Input,
  MailDiv,
  TextArea,
  TextWrapper,
} from "./style";
import { Btn } from "../Button/styles";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    "service_qucxh1x",
    "template_jvqi8jx",
    {
      name, email, subject, message
    },
    "o3skdrGlF7h48Qwxz"
  ).then(() => {
    alert("Mensagem enviada com sucesso!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }). catch(() => {
    alert("Erro ao enviar mensagem. Tente novamente.");
  }).finally(() => {
    setLoading(false);
  })
};
  return (
    <Container>
      <ContactWrapper>
        <TitleSection>
          <span>03. </span>Contato
        </TitleSection>
        <ContactContent>
          <TextWrapper>
            <h3>Vamos conversar!</h3>
            <p>
              Gostou do meus projetos? Manda uma mensagem! Preencha o formulário
              ao lado e entrarei em contato o mais breve possível.
            </p>
            <MailDiv>
              <Mail />
              <span>matheusaguiar028@gmail.com</span>
            </MailDiv>
          </TextWrapper>
          <FormWrapper onSubmit={handleSubmit}>
            <InfoFormWrapper>
              <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InfoFormWrapper>
            <Input placeholder="Assunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <TextArea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Btn color="primario" size="medio" type="submit">
              {loading ? "Enviando..." : "Enviar"}
            </Btn>
          </FormWrapper>
        </ContactContent>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
