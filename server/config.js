// config.js

// Define configuration variables for your WebSocket chat application.

module.exports = {
    // Port for the WebSocket server
    WS_PORT: process.env.WS_PORT || 3001,
  
    // Maximum number of users allowed in a chat room
    MAX_USERS_PER_ROOM: process.env.MAX_USERS_PER_ROOM || 10,
  
    // Maximum message length allowed in characters
    MAX_MESSAGE_LENGTH: process.env.MAX_MESSAGE_LENGTH || 1000,
  
    // Database configuration (if used)
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/chatdb',
  
    // JWT secret key for authentication (if used)
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'your-secret-key',
  
    // CORS configuration (if needed)
    CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
  };
  