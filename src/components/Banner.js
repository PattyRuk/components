import React from 'react';
import Button from './Button';

const Banner = () => {
 return (
  <section className="banner">
  <div className="banner-content">
    <h2>Welcome to Delta Designs</h2>
    <p>"Discover beautiful, modern graphics built on reusable frameworks. Where striking aesthetics meet structured efficiency. Elevate your brand with scalable, high-impact layouts."</p>
    <div className="banner-buttons">
     <Button text="Get Started" style="primary" />
     <Button text="Learn More" style="secondary" />
    </div>
   </div>
  </section>
 );
};

export default Banner;