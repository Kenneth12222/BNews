import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import './Hero.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Hero() {
  const { blogData } = useContext(BlogContext);
  return (
    <BlogContainer>
      {blogData.map((item) => (
        <Link to={`/blog/${item.id}`} key={item.id} className="blog-box insights">
          <BlogImg>
            <ProfileImage alt={item.title} src={item.image} />
          </BlogImg>
          <BlogText>
            <CategoryText>{item.title}</CategoryText>
            <StrongBlogText>{item.description}</StrongBlogText>
            <BlogPosTime>{item.date}</BlogPosTime>
          </BlogText>
        </Link>
      ))}
    </BlogContainer>
  );
}

export default Hero;

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin: 10px 0px 50px 0px;


  @media (max-width: 1050px) {
    max-width: 100%;
    width: 90%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 90%;
    margin: 0 auto;
  }
`;

const BlogImg = styled.div`
  width: 100%;
  max-height: 220px;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const BlogText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 3px;
`;

const CategoryText = styled.span`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
`;

const StrongBlogText = styled.strong`
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: 500;
  margin: 5px 0px;
  letter-spacing: 0.7px;
`;

const BlogPosTime = styled.span`
  color: #9f9f9f;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;
