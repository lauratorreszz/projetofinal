import React from 'react';
import Article from '../../components/article/Article';
import blog01 from './blog01.jpg';
import blog02 from './blog02.jpg';
import blog03 from './blog03.jpg';
import blog04 from './blog04.jpg';
import blog05 from './blog05.jpg';
import './blog.css';

const Blog = () => (
  <div className="DUCK__blog section__padding" id="blog">
    <div className="DUCK__blog-heading">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</h1>
    </div>
    <div className="DUCK__blog-container">
      <div className="DUCK__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Sed eu congue dolor, quis mollis justo." />
      </div>
      <div className="DUCK__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Sed eu congue dolor, quis mollis justo." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Sed eu congue dolor, quis mollis justo." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Sed eu congue dolor, quis mollis justo." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Sed eu congue dolor, quis mollis justo." />
      </div>
    </div>
  </div>
);

export default Blog;