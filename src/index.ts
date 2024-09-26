import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import { WebSocketServer } from 'ws';
import { config } from 'dotenv';
config();

// routes
import scoreRoutes from '@/routes/score.router';
import matcheRoute from './routes/match.router';

// websockets
import scoreWebSocket from './websockets/score.websocket';

// db connection
import { connectDB } from './config/db.config';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const BASE_URL = '/api/v1';
const PORT = process.env.PORT || 3000;
const ORIGIN = process.env.ORIGIN || '*';

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: ORIGIN }));

// Routes
app.use(`${BASE_URL}/scores`, scoreRoutes);
app.use(`${BASE_URL}/matches`, matcheRoute);

// WebSocket integration
scoreWebSocket(wss);

// Start the server
server.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);

  // Connect to the database
  connectDB();
});
