import React, { createContext, useState } from "react";
import podcastNewsBlog from "../data";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[`p${index + 1}`] = r(item);
  });
  return images;
};

const images = importAll(require.context("../assets", false, /\.(jpg)$/));
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogData] = useState(podcastNewsBlog.map((item, index) => ({
    ...item,
    id: index + 1,
    image: images[`p${index + 1}`]
  })));

  return (
    <BlogContext.Provider value={{ blogData }}>
      {children}
    </BlogContext.Provider>
  );
};
