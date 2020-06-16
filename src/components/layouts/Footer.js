import React from 'react';
import styled from 'styled-components'

function Footer(){
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
           {/* Column 1*/}
           <div className="col-md-3 col-sm-6">
               <h4>Footer</h4>
               <ul className="list-unstyled">
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
               </ul>
           </div>
            {/* Column 2*/}
            <div className="col-md-3 col-sm-6">
               <h4>Footer</h4>
               <ul className="list-unstyled">
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
               </ul>
           </div>
            {/* Column 3*/}
            <div className="col-md-3 col-sm-6">
               <h4>Footer</h4>
               <ul className="list-unstyled">
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
               </ul>
           </div>
            {/* Column 4*/}
            <div className="col-md-3 col-sm-6">
               <h4>Footer</h4>
               <ul className="list-unstyled">
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
                   <li>hello world</li>
               </ul>
           </div>
        </div>
        {/*Footer bottom*/}
        <div className="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Direct Your Life - All Rights Reserved
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
    background: blue;
    padding-top: 20px;
    color: white;
}
.footer-bottom{
    padding-top: 15px;
    padding-bottom: 15px;
}
`;