import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/info', function(_req: Request, res: Response) {
  res.json({
    name: 'turbo-practice-server',
  });
});

export default router;
