import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const AboutContainer = styled.div`
  background: #ffffff;
  color: #333;
  padding: 40px;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const DownloadButton = styled.button`
  background: #5633d6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 20px 0;
`;

const InfoGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  text-align: left;
`;

const InfoLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InfoValue = styled.div`
  font-size: 1.2rem;
  color: #5633d6;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const SkillItem = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`;

const SkillLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const SkillValue = styled.div`
  font-size: 1.2rem;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: #333;
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #5633d6;
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>
        <AboutDescription>I like creating cool design projects.</AboutDescription>
        <InfoGrid>
          <InfoItem>
            <InfoLabel>Age:</InfoLabel>
            <InfoValue>29</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Residence:</InfoLabel>
            <InfoValue>USA</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Address:</InfoLabel>
            <InfoValue>88 Some Street, Some Town</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Email:</InfoLabel>
            <InfoValue>email@example.com</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Phone:</InfoLabel>
            <InfoValue>+0123 123 456 789</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Freelance:</InfoLabel>
            <InfoValue>Available</InfoValue>
          </InfoItem>
        </InfoGrid>
        <DownloadButton>Download CV</DownloadButton>
        <SkillsGrid>
          <SkillItem>
            <SkillLabel>Graphic Design</SkillLabel>
            <SkillValue>50%</SkillValue>
          </SkillItem>
          <SkillItem>
            <SkillLabel>Development</SkillLabel>
            <SkillValue>75%</SkillValue>
          </SkillItem>
          <SkillItem>
            <SkillLabel>Marketing Ideas</SkillLabel>
            <SkillValue>38%</SkillValue>
          </SkillItem>
          <SkillItem>
            <SkillLabel>Web Management</SkillLabel>
            <SkillValue>63%</SkillValue>
          </SkillItem>
        </SkillsGrid>
        <SocialIcons>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </SocialIcons>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutMe;
