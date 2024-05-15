import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import styled from 'styled-components';


function BlogDetail() {
    const { blogData } = useContext(BlogContext);
    const { id } = useParams();
    const blog = blogData.find(item => item.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null)

    const handleCardClick = (image) => {
        setSelectedImage(image)
    }

    const handleCloseClick = () => {
        setSelectedImage(null)
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <>
            {selectedImage && (
                <Overlay onClick={handleCloseClick}>
                    <Zoomed >
                    <span className='close' onClick={handleCloseClick}>Close</span>
                        <HeaderText>{blog.title}</HeaderText>
                        <Zoomedimg src={blog.image} alt={blog.title} />
                        <p>{blog.description}</p>
                        <span>{blog.date}</span>
                    </Zoomed>
                </Overlay>
            )}
        </>
    );
}

export default BlogDetail;

const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.8);
   z-index: 999;
`

const Zoomed = styled.div`
   width: 60%;
   background-color: #fff;
   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
   border-radius: 8px;
   overflow: hidden;
   padding: 20px;

   h1 {
    font-size: 32px;
    margin-bottom: 10px;
    font-family: ;
   }

   p {
    font-size: 20px;
    color: #777;
    line-height: 1.5;
    margin-bottom: 0;
   }
`

const HeaderText = styled.h1`
  font-size: 6.2rem;
  color: #222;
  line-height: 94px;
  font-family: sans-serif;
`

const Zoomedimg = styled.img`
   width: 100%;
   object-fit: cover;
   border-top-left-radius: 8px;
   border-top-right-radius: 8px;
   margin-bottom: 20px;
`