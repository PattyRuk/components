import { useState } from 'react';
import PostForm from './PostForm';

import image1 from '../media/aesthetic.jpg';
import image2 from '../media/aesthetic3.jpg';
import image3 from '../media/aesthetic5.jpg';
import image4 from '../media/aesthetic6.jpg';

// Added unique IDs to initial images
const initialImages = [
  { id: 'img-1', url: image1, title: "Purple Sunset" },
  { id: 'img-2', url: image2, title: "Crimson Horizon" },
  { id: 'img-3', url: image3, title: "Lone Samurai" },
  { id: 'img-4', url: image4, title: "Red Aura" },
];

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState(initialImages);

  const handleAddPost = (newPost) => {
    // Generate a unique ID using timestamp for new posts
    const postWithId = { ...newPost, id: `img-${Date.now()}` };
    setGalleryItems((prevItems) => [postWithId, ...prevItems]);
  };

  // Filter out the post matching the target ID
  const handleDeletePost = (idToDelete) => {
    setGalleryItems((prevItems) => prevItems.filter(item => item.id !== idToDelete));
  };

  return (
    <section className="gallery-section" id="gallery">
      <PostForm onAddPost={handleAddPost} />

      <div className="gallery-grid">
        {galleryItems.map(({ id, url, title }) => (
          <div key={id} className="gallery-item">
            <div className="image-container">
              <img src={url} alt={title} />
              {/* Delete Button Element */}
              <button 
                className="delete-btn" 
                onClick={() => handleDeletePost(id)}
                aria-label="Delete post"
              >
                &times;
              </button>
            </div>
            <h3 className="gallery-item-title">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;