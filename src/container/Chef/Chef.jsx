import React from 'react';
import { images } from '../../constants';

import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chefs'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Chefs World' />
      <h2 className='headtext__cormorant'> What We Believe In.</h2>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
        </div>
        <p className='p__opensans'>We believe cooking is an art. Our chefs pour passion, creativity, and care into every plate, ensuring each meal is memorable and meaningful. We strive to create a warm, welcoming space where guests feel like family and the community comes together.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src= {images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
