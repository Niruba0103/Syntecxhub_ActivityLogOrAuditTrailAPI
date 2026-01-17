const express = require("express");
const router = express.Router();
const { getAuditLogs } = require("../controllers/auditLogController");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

router.get("/", auth, isAdmin, getAuditLogs);

module.exports = router;
