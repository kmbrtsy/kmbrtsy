import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '../../public/images/linkedin.png';
import GitHubIcon from '../../public/images/github.png';
import EmailIcon from '../../public/images/email.png';
import PhoneCall from '../../public/images/phone-call.png';

function HeroPage() {

  return (
    <Container className="hero-container" 
                style={{
                  backgroundColor: '#FDF7E4',
                  maxWidth:'none',
                  boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)',
                  paddingBottom: '4%'
                }}>

    <div className='flex-container'>
      {/* Heading */}
      <div className="headings">
      <Typography
          variant="h1"
          style={{
            marginTop: '30%',
            marginRight: '25%',
            textAlign: 'left',
            fontFamily: 'Poppins, serif',
            fontWeight: '550',
          }}
>Hello.
      </Typography>

      <Typography
          variant="h5"
          style={{
            marginRight: '40%',
            textAlign: 'left',
            fontFamily: 'Poppins, serif',
            fontWeight: 'bold',
          }}
        >
      — I am Kimmy
      </Typography>

      <Typography 
          variant="h7"
          style={{
            marginRight: '40%',
            textAlign: 'left',
            fontFamily: 'Poppins, serif',
          }}
        >
         A Full-Stack Website Developer
      </Typography>

      {/* Social Icons */}
      <div className="social-icons">
        <IconButton 
          color="primary" 
          aria-label="LinkedIn" 
          component="a" 
          href="YOUR_LINKEDIN_PROFILE_URL" 
          target="_blank"
          >
          <img src={LinkedInIcon} alt='LinkedIn'/>
        </IconButton>

        <IconButton 
          color="primary" 
          aria-label="GitHub" 
          component="a" 
          href="YOUR_GITHUB_PROFILE_URL" 
          target="_blank"
          >
          <img src={GitHubIcon} alt='Github'/>
        </IconButton>

        <IconButton 
          color="primary" 
          aria-label="Email" 
          component="a" 
          href="mailto:YOUR_EMAIL@example.com"
          >
          <img src={EmailIcon} alt='Email'/>
        </IconButton>

        <IconButton 
          color="primary" 
          aria-label="Contact" 
          component="a" 
          href="YOUR_MESSENGER_PROFILE_URL" 
          target="_blank"
          >
          <img src={PhoneCall} alt='Phone'/>
        </IconButton>
      </div>
      </div>

      <div className='photo'>
      <img
            src="./images/graphicgirl.png"
            alt="Your Photo"
            style={{ width: '413px', height: '476px', objectFit: 'cover', }}
          />
      </div>
      </div>
    </Container>
  );
}

export default HeroPage;
