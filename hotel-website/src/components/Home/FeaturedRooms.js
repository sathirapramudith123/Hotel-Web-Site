import React from 'react';
import { Link } from 'react-router-dom';
import { ROOM_TYPES } from '../../utils/constants';
import { formatCurrency } from '../../utils/helpers';
import './FeaturedRooms.css';

const FeaturedRooms = () => {
  const featuredRooms = ROOM_TYPES.slice(0, 3);

  return (
    <section className="featured-rooms section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Rooms</h2>
          <p>Discover our carefully curated selection of luxurious accommodations</p>
        </div>
        
        <div className="rooms-grid">
          {featuredRooms.map(room => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image