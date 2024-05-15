import React from 'react';
import styled from 'styled-components';
import Image from '../assets/p1.jpg'

const HeroContainer = styled.div`
  background: #5633d6;
  color: white;
  padding: 40px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const HeroButton = styled.button`
  background: #ff4c60;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <ProfileImage src={Image} alt="Profile" />
        <HeroTitle>Willimes Parker</HeroTitle>
        <HeroSubtitle>
          Graphic Designer, HTML Coder, PHP Programmer and Project Manager
        </HeroSubtitle>
        <HeroButton>Start Consulting</HeroButton>
        <p>Available for Freelance</p>
        <div>
          <span>10K Happy Satisfied Customers</span>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
