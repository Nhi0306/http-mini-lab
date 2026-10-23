const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.static(path.join(__dirname, "public")));

const messages = [{ id: 1, message: "Xin chào HTTP!" }];

app.get("/api/messages", (req, res) => {
  res.status(200).json(messages);
});

app.post("/api/messages", (req, res) => {
  const message = req.body?.message;
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Thông điệp không hợp lệ" });
  }
  const item = { id: messages.length + 1, message: message.trim() };
  messages.push(item);
  res.status(201).json(item);
});

app.use((req, res) => {
  res.status(404).json({ error: "Không tìm thấy đường dẫn" });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
