import React, { useState } from 'react';
import './RoomGallery.css';

const RoomGallery = ({ room }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Mock additional images for the gallery
  const galleryImages = [
    room.image,
    '/images/room-1-bathroom.jpg',
    '/images/room-1-living.jpg',
    '/images/room-1-view.jpg'
  ];

  return (
    <div className="room-gallery">
      <div className="gallery-main">
        <img 
          src={galleryImages[selectedImage]} 
          alt={`${room.name} view ${selectedImage + 1}`}
        />
      </div>
      
      <div className="gallery-thumbnails">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomGallery;