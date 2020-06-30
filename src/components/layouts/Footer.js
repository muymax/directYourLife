import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4 style={{ color: '#FF8C00' }}>DYL</h4>
              <ul className="list-unstyled">
              
                <li>Direct Your Life</li>
                <li>Street address</li>
                <li>City, Prov</li>
                <li>Postal Code</li>
              </ul>
            </div>
            {/* Column 2*/}
            <div className="col-md-2 col-sm-6">
            <h4 style={{ color: '#FF8C00' }}>Links</h4>
              <ul className="list-unstyled">
                <li>About </li>
                <li>Contact</li>
                <li>FAQ's</li>
                <li> News</li>
              </ul>
            </div>
            {/* Column 3*/}
            <div className="col-md-2 col-sm-6">
              <br></br>
              <ul className="list-unstyled">
                <br></br>
                <li>Member terms</li>
                <li>Privacy</li>
                <li>Crisis support</li>
                <li>DYL</li>
              </ul>
            </div>
            {/* Column 4*/}
            <div className="col-md-5 col-sm-6">
            <h4 style={{ color: '#FF8C00', textAlign: "center" }}>Social Media</h4>
              <ul className="list-unstyled">
              <div className="social-container" style={{ textAlign: "center" }}>
              <a
                href="https://www.youtube.com/watch?v=eIPu-UPCrd8"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.linkedin.com" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
                {/* <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li> */}
              </ul>
            </div>
          </div>
          {/*Footer bottom*/}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Direct Your Life - All Rights
              Reserved
            </p>
            
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #292b2c;
    padding-top: 20px;
    color: white;
  }
  .footer-bottom {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
