import React from 'react';
import './legalContent.css';

const LegalContent = () => {
  return (
    <div className="legal-container">
      <h1 className="top-heading">Legal Information</h1>
      <h2>Terms and Conditions</h2>
      <p>
        Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.
        By accessing or using the website, you agree to comply with and be bound by these terms and conditions.
      </p>
      <h2>Privacy Policy</h2>
      <p>
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your
        information when you visit our website.
      </p>
      <h2>Disclaimer</h2>
      <p>
        The information provided on this website is for general informational purposes only. We make no representations or
        warranties of any kind regarding the accuracy or completeness of the information contained on the site.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these terms, our privacy practices, or any other concerns, please contact us at
        <a href="Contact"> Here</a>.
      </p>
    </div>
  );
};

export default LegalContent;
