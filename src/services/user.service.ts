import pool from '../config/db.config';
import { UserWithRole } from '../models/user.model';

export class UserService {
    /**
     * Lấy tất cả user join với role bằng raw query
     */    static async getAllUsersWithRole(): Promise<UserWithRole[]> {
        const query = `
            SELECT 
                u.id,
                u.name,
                u.email,
                u.createDate,
                u.updateDate,
                r.name as roleName
            FROM users u
            LEFT JOIN roles r ON u.roleId = r.id
            ORDER BY u.createDate DESC
        `;
        
        const [rows] = await pool.execute(query);
        
        // Map và chỉ trả về các field cần thiết
        return (rows as any[]).map(row => ({
            id: row.id,
            name: row.name,
            email: row.email,
            createDate: row.createDate,
            updateDate: row.updateDate,
            roleName: row.roleName
        }));
    }
}