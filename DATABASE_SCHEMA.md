# Database Schema Documentation

## Overview
This database is used for a user management system with role-based access control.

---

## Table: `users`

### Description
Stores user account information.

### Columns
| Column Name | Data Type        | Description |
|------------|------------------|-------------|
| id         | BIGINT UNSIGNED  | Primary key, auto increment |
| name       | VARCHAR(255)     | User full name |
| email      | VARCHAR(255)     | User email (unique) |
| password   | VARCHAR(255)     | Hashed password |
| avatar     | TEXT             | User avatar URL |
| createDate | TIMESTAMP        | Created timestamp |
| updateDate | TIMESTAMP        | Updated timestamp |
| roleId     | INT              | Foreign key → roles.id |

### Relationships
- `users.roleId` → `roles.id`

---

## Table: `roles`

### Description
Defines roles for users in the system.

### Columns
| Column Name | Data Type    | Description |
|------------|-------------|-------------|
| id         | INT          | Primary key, auto increment |
| name       | VARCHAR(255) | Role name (Admin, User, etc.) |

### Example Data
```sql
INSERT INTO roles (name) VALUES
('Admin'),
('User');
