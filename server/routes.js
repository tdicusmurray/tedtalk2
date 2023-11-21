// routes.js

const { handleConnection } = require('./controllers');

// Function to set up routes and WebSocket connections
function setupRoutes(io) {
  // Define the WebSocket route for chat connections
  io.on('connection', (socket) => {
    handleConnection(socket);
  });
}

module.exports = setupRoutes;
