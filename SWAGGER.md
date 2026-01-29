# Swagger API Documentation

Dự án đã được tích hợp Swagger UI để xem và test API documentation.

## Truy cập Swagger UI

Sau khi chạy server, truy cập:
- **Swagger UI**: http://localhost:3000/api-docs
- **Swagger JSON**: http://localhost:3000/api-docs.json

## Tính năng Swagger đã cài đặt

### 1. **Interactive API Documentation**
- Xem tất cả endpoints
- Test API trực tiếp từ browser
- Xem request/response schema

### 2. **Authentication Support**
- Bearer Token (JWT)
- API Key trong header

### 3. **API Schemas**
- SuccessResponse
- HealthResponse
- ErrorResponse

### 4. **Multiple Environments**
- Development server (localhost:3000)
- Production server (có thể cấu hình)

### 5. **Tags Organization**
- General - Các endpoints chung
- Health - Health check endpoints

## Cách sử dụng JSDoc cho routes mới

Khi tạo route mới, thêm comment JSDoc như sau:

\`\`\`typescript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */
app.get('/api/users', (req, res) => {
  // Your code here
});
\`\`\`

## File cấu hình

- **[src/config/swagger.config.ts](src/config/swagger.config.ts)** - Cấu hình chính của Swagger
- **[src/app.ts](src/app.ts)** - Tích hợp Swagger vào Express app

## Tùy chỉnh

Bạn có thể tùy chỉnh Swagger trong [swagger.config.ts](src/config/swagger.config.ts):
- Thông tin API (title, version, description)
- Servers (development, production)
- Security schemes (JWT, API Key, OAuth2)
- Components schemas
- Tags và grouping

## Khởi chạy

\`\`\`bash
npm run dev
\`\`\`

Mở browser và truy cập: http://localhost:3000/api-docs
