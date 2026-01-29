import { Router } from 'express';
import { UserController } from '../controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lấy tất cả users join với roles
 *     description: API lấy danh sách tất cả users kèm thông tin role bằng raw SQL query (LEFT JOIN)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Thành công - Trả về mảng users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Phạm Gia Lạc
 *                   email:
 *                     type: string
 *                     example: phamlac10@gmail.com
 *                   createDate:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-03-10T13:16:52.241Z
 *                   updateDate:
 *                     type: string
 *                     format: date-time
 *                     example: 2026-01-19T16:28:37.035Z
 *                   roleName:
 *                     type: string
 *                     example: Admin
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.get('/users', UserController.getAllUsersWithRole);

export default router;