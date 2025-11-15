const express = require("express");
const cors = require("cors");

const {
  sessionsList,
  conversationHistory,
  createNewSession
} = require("./mockData");

const app = express();

app.use(cors());
app.use(express.json());

// ----------------------------------------------------
// GET ALL SESSIONS
// ----------------------------------------------------
app.get("/api/sessions", (req, res) => {
  res.json(sessionsList);
});

// ----------------------------------------------------
// CREATE NEW SESSION
// ----------------------------------------------------
app.get("/api/new-chat", (req, res) => {
  try {
    const { id, title } = createNewSession();
    res.json({ sessionId: id, title });
  } catch (err) {
    console.error("New Chat Error:", err);
    res.status(500).json({ error: "Unable to create new session" });
  }
});

// ----------------------------------------------------
// GET SESSION HISTORY
// ----------------------------------------------------
app.get("/api/session/:id", (req, res) => {
  const sessionId = req.params.id;

  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  const history = conversationHistory[sessionId] || [];
  res.json({ history });
});

// ----------------------------------------------------
// SEND MESSAGE TO SESSION
// ----------------------------------------------------
app.post("/api/chat/:id", (req, res) => {
  const sessionId = req.params.id;
  const { message } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Message cannot be empty" });
  }

  // Mock AI reply
  const reply = `Mock reply to: "${message}"`;

  const table = [
    { item: "Apple", qty: Math.floor(Math.random() * 100) },
    { item: "Orange", qty: Math.floor(Math.random() * 100) },
    { item: "Banana", qty: Math.floor(Math.random() * 100) }
  ];

  // Append to conversation history
  conversationHistory[sessionId].push({ role: "user", message });
  conversationHistory[sessionId].push({ role: "bot", message: reply, table });

  res.json({ reply, table });
});

// ----------------------------------------------------
// GLOBAL ERROR HANDLER
// ----------------------------------------------------
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack);
  res.status(500).json({
    error: "Something went wrong on the server",
    details: err.message
  });
});

// ----------------------------------------------------
// START BACKEND SERVER
// ----------------------------------------------------
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🔥 Backend running at http://localhost:${PORT}`)
);
