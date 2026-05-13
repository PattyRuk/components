import React from 'react';
import image1 from '../media/aesthetic.jpg'
import image2 from '../media/aesthetic3.jpg'
import image3 from '../media/aesthetic5.jpg'
import image4 from '../media/aesthetic6.jpg'




const images = [
  { url: image1, title: "Purple Sunset" },
  { url: image2, title: "Crimson Horizon" },
  { url: image3, title: "Lone Samurai" },
  { url: image4, title: "Red Aura" },
];

const Gallery = () => {
 return (
  <section className="gallery-section" id="gallery">
   <div className="gallery-grid">
    {images.map(({ url, title }, index) => (
     <div key={index} className="gallery-item">
      <img src={url} alt={title} />
      <h3 className="gallery-item-title">{title}</h3>
     </div>
    ))}
   </div>
  </section>
 );
};

export default Gallery;