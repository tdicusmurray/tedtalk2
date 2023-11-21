
const WebSocket = require('ws');

function createWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    // Handle incoming WebSocket messages
    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);

      // Broadcast the message to all connected clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    // Handle WebSocket closure
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
}

module.exports = createWebSocketServer;