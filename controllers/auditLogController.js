const AuditLog = require("../models/AuditLog");

exports.getAuditLogs = async (req, res) => {
  const { userId, action, startDate, endDate } = req.query;
  const filter = {};

  if (userId) filter.performedBy = userId;
  if (action) filter.action = action;

  if (startDate || endDate) {
    filter.createdAt = {};
    if (startDate) filter.createdAt.$gte = new Date(startDate);
    if (endDate) filter.createdAt.$lte = new Date(endDate);
  }

  const logs = await AuditLog.find(filter)
    .populate("performedBy", "name email role")
    .populate("targetUser", "name email")
    .sort({ createdAt: -1 });

  res.json(logs);
};
