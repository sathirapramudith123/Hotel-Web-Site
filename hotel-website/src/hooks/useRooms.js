import { useState, useEffect } from 'react';
import { ROOM_TYPES } from '../utils/constants';

export const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockRooms = ROOM_TYPES.map(room => ({
          ...room,
          available: Math.random() > 0.3 // 70% chance room is available
        }));
        
        setRooms(mockRooms);
      } catch (err) {
        setError('Failed to fetch rooms');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const getRoomById = (id) => {
    return rooms.find(room => room.id === id);
  };

  const getAvailableRooms = () => {
    return rooms.filter(room => room.available);
  };

  return {
    rooms,
    loading,
    error,
    getRoomById,
    getAvailableRooms
  };
};