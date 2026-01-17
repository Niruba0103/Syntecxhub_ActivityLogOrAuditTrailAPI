const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      enum: [
        "USER_CREATED",
        "USER_UPDATED",
        "USER_DELETED",
        "ROLE_CHANGED",
        "PASSWORD_RESET",
        "USER_BLOCKED",
        "USER_UNBLOCKED",
      ],
    },

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    targetUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    resourceType: {
      type: String,
      default: "User",
    },

    metadata: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AuditLog", auditLogSchema);
