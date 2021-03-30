import React from 'react';

import {
  FooterContainer,
  FooterBackground,
  FooterContent,
} from './StyledFooter';
import footerImg from '../../../assets/images/footer.jpeg';
function Footer() {
  return (
    <FooterContainer>
      <FooterBackground src={footerImg} />
      <FooterContent>
        <h3>KorShop</h3>
        <div className="copyright">
          Copyright ©2021 All rights reserved | This website is made by{' '}
          <strong>Hoang Cao Thiem</strong>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
