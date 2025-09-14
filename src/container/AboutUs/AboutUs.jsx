import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className = 'app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img'/>
        <p className='p__opensans'>At Gericht, we believe dining is more than a meal — its an experience. Our chefs craft every dish with passion, using fresh, locally sourced ingredients to bring bold flavors to your table.</p>
        <button type='button' style={{backgroundColor:'burlywood', color:'black'}} className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife img' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img'/>
        <p className='p__opensans'>Our journey started in St. Johns with a simple vision: to create a place where food brings people together. From our first signature dish to today’s diverse menu, our history is built on tradition, innovation, and love for fine dining.</p>
        <button type='button' style={{backgroundColor:'burlywood', color:'black'}} className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
