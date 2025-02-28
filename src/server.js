import express from 'express';
import cors from 'cors';
import pino from 'pino';
import dotenv from 'dotenv';

dotenv.config();

const logger = pino();
const PORT = process.env.PORT || 3000;

export function setupServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, () => {
    logger.info(`🚀 Server is running on port ${PORT}`);
  });
}
