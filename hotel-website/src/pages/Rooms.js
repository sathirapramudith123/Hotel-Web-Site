import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useRooms } from '../hooks/useRooms';
import RoomCard from '../components/Rooms/RoomCard';
import RoomDetails from '../components/Rooms/RoomDetails';
import './Rooms.css';

const RoomsList = () => {
  const { rooms, loading, error } = useRooms();

  if (loading) {
    return <div className="loading">Loading rooms...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="rooms-page">
      <div className="container">
        <div className="page-header">
          <h1>Rooms & Suites</h1>
          <p>Discover our luxurious accommodations designed for your comfort and relaxation</p>
        </div>
        
        <div className="rooms-filters">
          <div className="filter-group">
            <label>Filter by:</label>
            <select>
              <option value="all">All Rooms</option>
              <option value="available">Available Now</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suites</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Sort by:</label>
            <select>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
              <option value="capacity">Capacity</option>
            </select>
          </div>
        </div>
        
        <div className="rooms-list">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Rooms = () => {
  return (
    <Routes>
      <Route path="/" element={<RoomsList />} />
      <Route path="/:id" element={<RoomDetails />} />
    </Routes>
  );
};

export default Rooms;