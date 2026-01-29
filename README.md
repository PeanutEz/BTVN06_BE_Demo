# BTVN06 Backend Demo

Dự án Node.js TypeScript đơn giản.

## Cấu trúc dự án

```
BTVN06_BE_Demo/
├── src/
│   └── index.ts          # File chính của ứng dụng
├── dist/                 # Thư mục chứa code đã compile
├── node_modules/         # Dependencies
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tsconfig.json        # Cấu hình TypeScript
├── .gitignore
└── README.md
```

## Cài đặt

```bash
npm install
```

## Scripts

- `npm run build` - Compile TypeScript thành JavaScript
- `npm run dev` - Chạy trực tiếp file TypeScript với ts-node
- `npm start` - Chạy ứng dụng đã được compile

## Sử dụng

### Development mode
```bash
npm run dev
```

### Production mode
```bash
npm run build
npm start
```

## Yêu cầu

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn
