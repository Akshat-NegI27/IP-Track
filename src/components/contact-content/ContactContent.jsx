import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { scroller } from 'react-scroll';


const Wrapper = styled.section`
  background-color: #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;

const Heading = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 400px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #000;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #000;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  
  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
const ContactContent = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });

  const [feedback, setFeedback] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7c9qd09', 'template_h6gq1m2', form.current, 'HnM8VT7Sq8Mc3wvpd')
      .then(
        () => {
          setFeedback('SUCCESS!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            topic: '',
            message: ''
          });
        },
        (error) => {
          setFeedback(`FAILED... ${error.text}`);
        },
      );
      scroller.scrollToTop({
        duration: 500,
        smooth: true,
      });
  };
  

  return (
    <>
      <Wrapper>
        <Heading>Our Location</Heading>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111679.74841934873!2d77.8144012972656!3d30.415937000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e1!3m2!1sen!2sin!4v1723889571482!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Wrapper>
      <div className='container'>
        <FormContainer>
          <h2 className="mainHeading">Feel free to contact us</h2>
          <form className='form' ref={form} onSubmit={handleSubmit} >
            <div className='inputGroup'>
              <label className='label' htmlFor="firstName">First Name</label>
              <StyledInput
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='inputGroup'>
              <label className='label' htmlFor="lastName">Last Name</label>
              <StyledInput
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className='inputGroup' >
              <label className='label' htmlFor="email">Email</label>
              <StyledInput
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='inputGroup' >
              <label className='label' htmlFor="topic">Topic</label>
              <StyledInput
                type="text"
                name="topic"
                id="topic"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>
            <div className='inputGroup' >
              <label className='label' htmlFor="message">Message</label>
              <StyledTextarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <StyledButton type="submit">Submit</StyledButton>
          </form>
          {feedback && <p>{feedback}</p>}
        </FormContainer>
      </div>
    </>
  );
};




export default ContactContent;