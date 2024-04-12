
import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import image from '../assets/morphing.jpeg';
import image2 from '../assets/morthimg2.jpeg';
import image3 from '../assets/morthimg3.jpeg';
import Image4 from '../assets/logo-black.png';
import './Header.css';

const MyHeader = () => {
  return (
<Header as="h1" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999, backgroundColor: 'white', boxShadow: "0 0 11px rgba(0, 0, 0, 0.13)" }}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Image className='image1' src={image} alt="" />
    <div>
      <Image className='image2' src={image2} alt="" />
      <Image className='image3' src={image3} alt="" />
      <Image className='image4' src={Image4} alt="" />
    </div>
  </div>
</Header>
  );
};

export default MyHeader;