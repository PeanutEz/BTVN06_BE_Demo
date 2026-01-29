import { Request, Response } from 'express';
import { UserService } from '../services/index.service';

export class UserController {
    /**
     * GET /api/users - Lấy tất cả user join với role
     */    static async getAllUsersWithRole(req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getAllUsersWithRole();
            
            res.status(200).json(users);
        } catch (error) {
            console.error('Error in getAllUsersWithRole:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
}