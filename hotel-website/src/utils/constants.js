export const ROOM_TYPES = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'Comfortable room with essential amenities',
    price: 129,
    size: '30m²',
    capacity: 2,
    beds: '1 Queen Bed',
    image: '/images/room-1.jpg',
    amenities: ['Free WiFi', 'TV', 'Air Conditioning', 'Private Bathroom']
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'Spacious room with premium features',
    price: 189,
    size: '45m²',
    capacity: 3,
    beds: '1 King Bed or 2 Queen Beds',
    image: '/images/room-2.jpg',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning', 'Mini Bar', 'Private Bathroom', 'Work Desk']
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area',
    price: 299,
    size: '65m²',
    capacity: 4,
    beds: '1 King Bed + Sofa Bed',
    image: '/images/room-3.jpg',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning', 'Mini Bar', 'Private Bathroom', 'Living Area', 'Coffee Maker']
  },
  {
    id: 4,
    name: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views',
    price: 599,
    size: '120m²',
    capacity: 4,
    beds: '1 King Bed + 1 Queen Bed',
    image: '/images/room-4.jpg',
    amenities: ['Free WiFi', 'Multiple Smart TVs', 'Air Conditioning', 'Full Bar', 'Jacuzzi', 'Private Balcony', 'Dining Area']
  }
];

export const AMENITIES = [
  {
    name: 'Free WiFi',
    icon: '📶',
    description: 'High-speed internet access throughout the hotel'
  },
  {
    name: 'Swimming Pool',
    icon: '🏊',
    description: 'Outdoor heated pool open year-round'
  },
  {
    name: 'Spa & Wellness',
    icon: '💆',
    description: 'Full-service spa and fitness center'
  },
  {
    name: 'Restaurant',
    icon: '🍽️',
    description: 'Fine dining with local and international cuisine'
  },
  {
    name: 'Parking',
    icon: '🅿️',
    description: 'Complimentary valet parking service'
  },
  {
    name: 'Room Service',
    icon: '🏨',
    description: '24-hour room service available'
  }
];

export const CONTACT_INFO = {
  address: '123 Luxury Avenue, City Center, 10001',
  phone: '+1 (555) 123-4567',
  email: 'info@grandhorizon.com',
  hours: '24/7'
};