import { Router } from 'express';
import userRoutes from './user.route';

const router = Router();

// Mount routes - Không cần thêm /users vì đã có trong user.route
router.use(userRoutes);

export default router;