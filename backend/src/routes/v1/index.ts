import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/status', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: 'ExpTrust Backend',
    success: true,
  });
});

export const apis_v1 = router;
