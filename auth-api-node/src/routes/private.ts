import { Router, Response } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';

const router = Router();

router.get('/profile', authenticateToken, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Acesso permitido à rota protegida',
    userId: req.userId
  });
});

export default router;
