const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://flop11-backend.onrender.com'
  : 'http://localhost:5000';

export default API_URL; 