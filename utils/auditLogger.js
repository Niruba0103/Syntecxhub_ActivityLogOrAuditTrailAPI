const AuditLog = require("../models/AuditLog");

const logActivity = async ({
  action,
  performedBy,
  targetUser = null,
  resourceType = "User",
  metadata = {},
}) => {
  try {
    await AuditLog.create({
      action,
      performedBy,
      targetUser,
      resourceType,
      metadata,
    });
  } catch (error) {
    console.error("Audit Log Error:", error.message);
  }
};

module.exports = logActivity;
