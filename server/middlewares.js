// middlewares.js

const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('./config');

// Middleware function to authenticate WebSocket connections using JWT tokens
function authenticateWebSocket(socket, next) {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error('Authentication failed: No token provided.'));
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(new Error('Authentication failed: Invalid token.'));
    }

    // Attach user information to the socket for future reference
    socket.user = decoded.user;
    next();
  });
}

module.exports = {
  authenticateWebSocket,
};
