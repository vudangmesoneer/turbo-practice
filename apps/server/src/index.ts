import http from 'http';

import { normalizePort } from 'lib';

import { DEFAULT_PORT } from './helpers/constants';
import logger from './components/logger';
import app from './components/app';

const port = normalizePort(process.env.PORT, DEFAULT_PORT);

app.set('port', port);

const server = http.createServer(app);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  logger.info(`Listening on ${bind}`);
}

function onError(error: Error) {
  logger.error('Sever get an error: ', error);
}

server.listen(port);

server.on('listening', onListening);

server.on('error', onError);
