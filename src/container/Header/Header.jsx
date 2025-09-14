import React from 'react';
import images from '../../constants/images';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new Flavours'/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans'  style={{ margin: '2rem 0', color: 'white'}}>Experience a culinary journey where every dish is crafted to perfection, and every bite tells a story.</p>
      <button type='button' style={{backgroundColor:'burlywood', color:'black'}} className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
