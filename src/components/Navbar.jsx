import React from 'react';
import './Navbar.css';
import Hero from './Hero';
import styled from 'styled-components';

function Navbar() {
  return (
    <div>
      <Progress>
        <ProgressValue></ProgressValue>
      </Progress>

      <Navigation>
        <Logo href='#'>Blog</Logo>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>

        <Ul>
          <List><a href="#">Home</a></List>
          <List><a href="#">About</a></List>
          <List><a href="#">Blog</a></List>
          <List><NavContact>Contact</NavContact></List>
        </Ul>
      </Navigation>

      <div className="page-container">
        <div className="top-bar">
          <span>NB/<br/>Blog</span>
          <div className="article-number"><span>37</span><br/>Article</div>
        </div>

        <section id="blog">
          <BlogHeading>
            <HeaderText>Musing, working, and everything in between.</HeaderText>
          </BlogHeading>

          <BlogFilter>
            <Lists className="list blog-filter-active" data-filter="all">All</Lists>/
            <Lists data-filter="insights">insights</Lists>/
            <Lists data-filter="projects">projects</Lists>/
            <Lists data-filter="culture">nb culture</Lists>/
            <Lists data-filter="news">news</Lists>
          </BlogFilter>
          <Hero />
        </section>
      </div>
    </div>
  );
}

export default Navbar;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 2%;
  z-index: 2;
`;

const Logo = styled.a`
  background-color: #161616;
  min-width: 50px;
  height: 50px;
  padding: 0px 10px;
  border: 1px solid rgba(255,255,255,0.137);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 3px;

  @media (max-width: 750px) {
    font-size: 1.2rem;
  }
`;

const Ul = styled.ul`
  display: flex;

  @media (max-width: 750px) {
    display: none;
    position: absolute;
    left: 0px;
    top: 65px;
    background-color: #14171c;
    border-bottom: 1px solid #1c1f25;
    width: 100%;
    padding: 0px;
    margin: 0px;
    z-index: 100;
  }
`;

const List = styled.li`
  @media (max-width: 750px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: 530px) {
    margin-top: 8px;
  }

  a {
    padding: 12px 20px;
    color: #ffffff;
    font-size: 0.9rem;
    margin: 4px 10px;
    letter-spacing: 0.5px;
    transition: all ease 0.3s;

    @media (max-width: 750px) {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin: 0px;
      padding: 30px 20px;
      border: 1px solid rgba(211,211,211,0.01);
    }
  }

  &:hover {
    opacity: 0.8;
    transition: all ease 0.3s;
    color: red;

    @media (max-width: 750px) {
      color: #14171c;
      background-color: #ffffff;
      transition: all ease 0.3s;
      opacity: 1;
    }
  }
`;

const NavContact = styled.a`
  background-color: #ffffff;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1c1f25 !important;

  @media (max-width: 750px) {
    justify-content: space-between;
    height: 65px;
    padding: 35px 25px;
  }
`;

const BlogFilter = styled.ul`
  display: flex;
  align-items: center;
  margin: 40px 0px 20px 0px;
  color: #78809e59;

  @media (max-width: 530px) {
    flex-wrap: wrap;
  }
`;

const Lists = styled.li`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin: 0px 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.7;
    transition: all ease 0.3s;
  }

  @media (max-width: 530px) {
    margin-top: 8px;
  }
`;

const BlogHeading = styled.div`
  margin: 20px 0px;

  @media (max-width: 530px) {
    margin: 20px 0px;
  } 
  @media (max-width: 530px)  {
    grid-template-columns: 1fr;
  }
`;

const HeaderText = styled.h1`
  font-size: 5.2rem;
  color: #ffffff;
  line-height: 94px;

  @media (max-width: 1050px) {
    font-size: 3rem;
    line-height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 50px;
  }
  @media (max-width: 530px) {
    font-size: 2rem;
    line-height: 40px;
  } 
`;

const Progress = styled.div``;
const ProgressValue = styled.div``;
