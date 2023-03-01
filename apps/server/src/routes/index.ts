import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', function(_req: Request, res: Response) {
  res.send('Turbo Practice index');
});

export default router;
