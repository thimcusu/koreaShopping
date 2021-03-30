import React from 'react';

import { FooterContainer, FooterBackground } from './StyledFooter';
import footerImg from '../../../assets/images/footer.jpeg';
function Footer() {
  return (
    <FooterContainer>
      <FooterBackground src={footerImg} />
    </FooterContainer>
  );
}

export default Footer;
