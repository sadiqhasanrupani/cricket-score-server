import { WebSocketServer, WebSocket } from 'ws';
import ScoreService from '../services/score.service';

const scoreWebSocket = (wss: WebSocketServer) => {
  wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    // Listen for incoming messages from the client
    ws.on('message', async (message: string) => {
      const { action, scoreData } = JSON.parse(message);

      switch (action) {
        case 'createScore':
          try {
            const newScore = await ScoreService.createScore(scoreData);
            // Broadcast the new score to all connected clients
            wss.clients.forEach((client) => {
              if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ action: 'scoreCreated', score: newScore }));
              }
            });
          } catch (error) {
            console.error('Error creating score:', error);
          }
          break;

        // Additional WebSocket events can be added here

        default:
          console.log('Unknown action:', action);
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
};

export default scoreWebSocket;
