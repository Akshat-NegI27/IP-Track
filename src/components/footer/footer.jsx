import React from 'react';
import "./footer.css";
import 'boxicons';

const Footer = () => {
  return (
    
    <footer>
      <div className="containerx">
        <div className="content_footer">
          <div className="profil">
            <div className="logo_area">
              <img src="/ip.svg" alt="" />
              <span className="logo_name">MINOR PROJECT</span>
            </div>
            <div className="desc_area">
              <p>MINOR PROJECT is a platform that allows you to find the best professionals in the field of technology, to help you in your projects. We offer you the best services at the best prices.</p>
            </div>
            <div className="social_media">
            <box-icon type='logo' name='facebook-square' size='md' ></box-icon>
            <box-icon type='logo' name='twitter' size='md'></box-icon>
            <box-icon type='logo' name='instagram' size='md'></box-icon>
            <box-icon type='logo' name='linkedin-square'size='md'></box-icon>
            <box-icon type='logo' name='github' size='md'></box-icon>
            </div>
          </div>
          <div className="service_area">
            <ul className="service_header">
              <li className="service_name">Services</li>
              <li><a href='#'>IT Consulting</a></li>
              <li><a href='#'>Development</a></li>
              <li><a href='#'>Cloud</a></li>
              <li><a href='#'>Devops & Support</a></li>
            </ul>
            <ul className="service_header">
              <li className="service_name">Services</li>
              <li><a href='#'>IT Consulting</a></li>
              <li><a href='#'>Development</a></li>
              <li><a href='#'>Cloud</a></li>
              <li><a href='#'>Devops & Support</a></li>
            </ul>
            <ul className="service_header">
              <li className="service_name">Services</li>
              <li><a href='#'>IT Consulting</a></li>
              <li><a href='#'>Development</a></li>
              <li><a href='#'>Cloud</a></li>
              <li><a href='#'>Devops & Support</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>

        <div className="footer_bottom">
          <div className="copy_right">
          <box-icon name='copyright' ></box-icon>
            <span>2024 minorproject</span>
          </div>
          <div className="tou">
            <a href=''>Term of Use</a>
            <a href=''>Privacy Policy</a>
            <a href=''>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;