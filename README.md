# HTTP Mini Lab - Mini Message Board

Dự án thực hành nguyên lý Client–Server với HTML + JavaScript + Node.js + Express.

## Cấu trúc

```
http-mini-lab/
  ├── server.js
  ├── public/
  │   └── index.html
  ├── package.json
  └── README.md
```

## Cách chạy

1. Kiểm tra môi trường:
   ```bash
   node -v
   npm -v
   ```

2. Cài dependencies:
   ```bash
   cd http-mini-lab
   npm install express
   ```

3. Chạy server:
   ```bash
   node server.js
   ```
   Terminal hiển thị: `Server: http://localhost:3000`

4. Mở trình duyệt tại: `http://localhost:3000`

## Kiểm tra qua DevTools (F12 → Network)

| Tình huống | Method | Đường dẫn | Status mong đợi |
|------------|--------|-----------|-----------------|
| Xem danh sách | GET | /api/messages | 200 |
| Gửi tin nhắn hợp lệ | POST | /api/messages | 201 |
| Gửi tin nhắn rỗng | POST | /api/messages | 400 |
| Đường dẫn sai | GET | /api/khong-ton-tai | 404 |

## Lưu ý

Dữ liệu chỉ lưu trên RAM (mảng `messages`). Khởi động lại server sẽ mất dữ liệu mới thêm, chỉ còn lại dữ liệu mặc định.

## Nộp bài

Gói nộp bao gồm: `server.js`, `public/index.html`, `README.md`, ảnh chụp PASS/Network, bảng CHECK PASS và trả lời 6 câu hỏi phân tích. Không cần gửi thư mục `node_modules`.
