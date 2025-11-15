// -------------------------------------------------------
// FINAL mockData.js — 10 Sessions Version
// -------------------------------------------------------

const sessionsList = [
  { id: "session-1", title: "Welcome Chat" },
  { id: "session-2", title: "SQL Help Chat" },
  { id: "session-3", title: "Product Inquiry" },
  { id: "session-4", title: "JavaScript Doubts" },
  { id: "session-5", title: "React Interview Prep" },
  { id: "session-6", title: "Node.js Concepts" },
  { id: "session-7", title: "Bug Fixing Chat" },
  { id: "session-8", title: "API Design Guidance" },
  { id: "session-9", title: "Frontend Debugging" },
  { id: "session-10", title: "System Design Talk" }
];

const conversationHistory = {
  "session-1": [
    { role: "user", message: "Hello" },
    { role: "bot", message: "Hi! How can I help you today?" }
  ],

  "session-2": [
    { role: "user", message: "Show SQL tables" },
    {
      role: "bot",
      message: "Here is a mock SQL table:",
      table: [
        { tableName: "users", rows: 120 },
        { tableName: "orders", rows: 540 }
      ]
    }
  ],

  "session-3": [
    { role: "user", message: "Product details?" },
    { role: "bot", message: "Here is a mock product specification." }
  ],

  "session-4": [
    { role: "user", message: "Explain closures" },
    { role: "bot", message: "A closure is a function with preserved scope." }
  ],

  "session-5": [
    { role: "user", message: "React hooks list ?" },
    { role: "bot", message: "useState, useEffect, useRef, useMemo..." }
  ],

  "session-6": [
    { role: "user", message: "Middleware enti?" },
    { role: "bot", message: "Middleware is a function that has access to req/res." }
  ],

  "session-7": [
    { role: "user", message: "App crash fix" },
    { role: "bot", message: "Restart server & check logs." }
  ],

  "session-8": [
    { role: "user", message: "REST API rules" },
    { role: "bot", message: "Use nouns, proper status codes, and versioning." }
  ],

  "session-9": [
    { role: "user", message: "CSS not applying" },
    { role: "bot", message: "Check class names and Tailwind config." }
  ],

  "session-10": [
    { role: "user", message: "Load balancer ante enti?" },
    { role: "bot", message: "It distributes traffic across servers." }
  ]
};

// Create a new session dynamically when user clicks "+ New Chat"
function createNewSession() {
  const id = "session-" + Date.now();
  const title = "Chat " + id.slice(-4);

  sessionsList.unshift({ id, title });
  conversationHistory[id] = [];

  return { id, title };
}

module.exports = {
  sessionsList,
  conversationHistory,
  createNewSession
};
