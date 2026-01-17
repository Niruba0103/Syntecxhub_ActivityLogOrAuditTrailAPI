const express = require("express");
const app = express();

app.use(express.json());

// IMPORT ROUTES
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const auditLogRoutes = require("./routes/auditLogRoutes");

// USE ROUTES  ✅ THIS LINE IS CRITICAL
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/audit-logs", auditLogRoutes);

module.exports = app;
