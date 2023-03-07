import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { getRootFolder } from 'lib';

import router from '../routes';
import api from '../routes/api';
import appLogger from './logger';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(getRootFolder(), 'public')));

app.use('/', router);
app.use('/api', api);

// return OK to any incoming request
app.use(function(req, res) {
  appLogger.info(`Receive an incoming request at ${ req.url } from ip ${ req.ip || req.ips } with method ${ req.method }`);

  if (req.headers) {
    appLogger.info('    with headers');
    appLogger.info(req.headers);
  }

  if (req.cookies) {
    appLogger.info('    with cookies');
    appLogger.info(req.cookies);
  }

  if (req.body) {
    appLogger.info('    with body');
    appLogger.info(req.body);
  }

  res.status(200);

  res.type('txt').send('OK');
});

export default app;
