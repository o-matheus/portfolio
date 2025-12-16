import styled from "styled-components";
import { Section, TitleSection } from "../../styles/global";
import { Btn } from "../Button/styles";
import { colors } from "../../styles/variables";

export const MailDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  

  svg {
    color: ${colors.corResume};
    width: 32px;
    height: 32px;
  }

  span {
    color: ${colors.corResume};
  }

  @media (max-width: 768px) {
    margin-top: 8px;
  }

`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  row-gap: 16px;

  h3 {
    font-size: 32px;
    color: ${colors.corNameDev};
  }

  p {
    font-size: 20px;
    color: ${colors.corResume};
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;

    h3 {
      font-size: 20px;
      text-align: center;
      margin: 8px;
      display: none;
    }

    p {
      font-size: 16px;
      margin-top: 16px;
    }
  }
`;

export const Input = styled.input`
  height: 36px;
`;

export const TextArea = styled.textarea`
  height: 95px;
  resize: none;
`;

export const InfoFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  row-gap: 24px;
  font-size: 20px;

  ${Btn} {
    width: 150px;
  }

  input,
  textarea {
    background-color: #323743;
    border-radius: 6px;
    padding: 8px 16px;
    outline: none;
    border: none;
    color: #e0e0e0;

    &:placeholder {
      color: #bdc1ca;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    row-gap: 16px;

    ${Btn} {
        margin: 0 auto;
        font-size: 16px;
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 16px;
    flex-direction: column;
  }
`;

export const ContactWrapper = styled.section`
  ${Section};
  flex-direction: column;

  ${TitleSection} {
    text-align: left;
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
    height: auto;
    text-align: justify;
    ${TitleSection} {
      text-align: center;
      display: block;
    }
  }
`;
