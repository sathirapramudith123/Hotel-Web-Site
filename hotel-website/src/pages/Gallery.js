import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock gallery images
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery-1.jpg',
      category: 'rooms',
      title: 'Luxury Suite'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpg',
      category: 'dining',
      title: 'Fine Dining Restaurant'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpg',
      category: 'amenities',
      title: 'Swimming Pool'
    },
    {
      id: 4,
      src: '/images/gallery-4.jpg',
      category: 'rooms',
      title: 'Executive Room'
    },
    {
      id: 5,
      src: '/images/gallery-5.jpg',
      category: 'events',
      title: 'Conference Room'
    },
    {
      id: 6,
      src: '/images/gallery-6.jpg',
      category: 'amenities',
      title: 'Spa & Wellness'
    },
    {
      id: 7,
      src: '/images/gallery-7.jpg',
      category: 'dining',
      title: 'Lobby Bar'
    },
    {
      id: 8,
      src: '/images/gallery-8.jpg',
      category: 'events',
      title: 'Wedding Venue'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'dining', name: 'Dining' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h1>Photo Gallery</h1>
          <p>Explore the beauty and luxury of Grand Horizon Hotel through our photo collection</p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.title} />
              <div className="image-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <h2>Experience Our Luxury Firsthand</h2>
          <p>Book your stay and create your own memorable moments at Grand Horizon</p>
          <a href="/booking" className="btn btn-primary">Book Your Stay</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;