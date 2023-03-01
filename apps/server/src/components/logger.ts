import pino from 'pino';

// const {
//   LOG_FILE = './pino-logger.log'
// } = process.env;

const appLogger = pino(
  {
    timestamp: () => `, "time": "${ new Date().toISOString() }"`,
  },
  // Use log to console first
  // pino.destination(LOG_FILE),
);

export default appLogger;
