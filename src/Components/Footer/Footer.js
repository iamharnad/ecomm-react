import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: '#ff9f00', textAlign: 'center', marginTop: '-50px' }}>
        eshop: your favourite online store
      </h1>
      <br></br>
      <Container>
        <Row>
          <Column>
            <Heading>Get to Know Us</Heading>
            <FooterLink href='#'>About Us</FooterLink>
            <FooterLink href='#'>Careers</FooterLink>

            <FooterLink href='#'>Gift a Smile</FooterLink>
            <FooterLink href='#'>Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href='#'>Sell Us</FooterLink>
            <FooterLink href='#'>Buy From Us</FooterLink>
            <FooterLink href='#'>Vendor Management</FooterLink>
            <FooterLink href='#'>Gurantee Period</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href='#'>Uttar Pradesh</FooterLink>
            <FooterLink href='#'>Ahemdabad</FooterLink>
            <FooterLink href='#'>Indore</FooterLink>
            <FooterLink href='#'>Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-twitter'>
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-youtube'>
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
