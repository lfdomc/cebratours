import emailjs from '@emailjs/browser';
import { useRef, FormEvent } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #1b5e0fd1;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #494b71;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const InputLabel = styled.label`
  font-size: 20px;
  color: #fefefe;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    text-align: left;
  }
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #494b71;
  border-radius: 10px;
  width: 70%;
  background-color: white;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextAreaField = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #494b71;
  border-radius: 10px;
  height: 150px;
  resize: none;
  width: 70%;
  background-color: white;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 120px;
  }
`;

const SubmitButton = styled.input`
  padding: 12px 20px;
  background-color: #ca7610;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #0d3263;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

export const FormContact = () => {
  const notify = () => toast("Formulario Enviado!");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_mhdaqwd', 'template_6cay27d', form.current, {
          publicKey: 'sWKi3SAdHx3x4rrq8',
        })
        .then(() => {
          notify();
          form.current?.reset();
        })
        .catch((error) => {
          console.error('FAILED...', error.text);
        });
    }
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
       <ToastContainer />
      <Section>
        <InputLabel htmlFor="user_name">Name:</InputLabel>
        <InputField type="text" id="user_name" name="user_name" required />
      </Section>
      <Section>
        <InputLabel htmlFor="user_email">Email:</InputLabel>
        <InputField type="email" id="user_email" name="user_email" required />
      </Section>
      <Section>
        <InputLabel htmlFor="tel">Phone:</InputLabel>
        <InputField type="text" id="tel" name="tel" required />
      </Section>
      <Section>
        <InputLabel htmlFor="message">Message:</InputLabel>
        <TextAreaField id="message" name="message" required  />
      </Section>
      <SubmitButton type="submit" value="Send" />
    </FormContainer>
  );
};
