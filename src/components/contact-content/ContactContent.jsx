import React, { useState, useRef, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import LocomotiveScroll from 'locomotive-scroll';
import "./ContactContent.css";


const Wrapper = styled.section`
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 100vh;
`;

const Heading = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const FormContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  animation: fadeIn 1s forwards;
`;

const MapContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  border-radius: 0px;
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
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    emailjs.sendForm('service_7c9qd09', 'template_h6gq1m2', formRef.current, 'HnM8VT7Sq8Mc3wvpd')
      .then(
        () => {
          setFeedback('Look at the stars Look how they shine for you And everything you do Yeah, they were all yellow');
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

    scroller.scrollTo('form-top', {
      duration: 500,
      smooth: true,
    });
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('#scroll-container'),
      smooth: true,
    });
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <>
      {/* <PreLoader /> */}
      <Wrapper id="scroll-container">
        <GridContainer>
          <MapContainer>
            <Heading>Our Location</Heading>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111679.74841934873!2d77.8144012972656!3d30.415937000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e1!3m2!1sen!2sin!4v1723889571482!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
          <FormContainer id="form">
            <h2 className="mainHeading">Feel Free to Contact Us</h2>
            <form className="form" ref={formRef} onSubmit={handleSubmit}>
              <div className="inputGroup">
                <label className="label" htmlFor="firstName">First Name</label>
                <StyledInput
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup">
                <label className="label" htmlFor="lastName">Last Name</label>
                <StyledInput
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup">
                <label className="label" htmlFor="email">Email</label>
                <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup">
                <label className="label" htmlFor="topic">Topic</label>
                <StyledInput
                  type="text"
                  name="topic"
                  id="topic"
                  value={formData.topic}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup">
                <label className="label" htmlFor="message">Message</label>
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
        </GridContainer>
      </Wrapper>
    </>
  );
};

export default ContactContent;
