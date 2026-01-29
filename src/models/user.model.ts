export interface Role {
    id: number;
    name: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    createDate: Date;
    updateDate: Date;
    roleId: number;
}

export interface UserWithRole {
    id: number;
    name: string;
    email: string;
    createDate: Date;
    updateDate: Date;
    roleName: string;
}