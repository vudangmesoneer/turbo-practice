import path from 'path';

function getRootFolder(): string {
  return path.dirname(path.dirname(__dirname));
}

function normalizePort(val: string | undefined, DEFAULT_PORT = 3000): number {
  if (!val) {
    return DEFAULT_PORT;
  }

  const port = parseInt(val, 10);

  if (port >= 0) {
    // port number
    return port;
  }

  return DEFAULT_PORT;
}

export {
  normalizePort,
  getRootFolder,
};