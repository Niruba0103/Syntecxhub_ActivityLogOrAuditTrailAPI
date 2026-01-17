const User = require("../models/User");
const logActivity = require("../utils/auditLogger");

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  await logActivity({
    action: "USER_UPDATED",
    performedBy: req.user._id,
    targetUser: id,
    metadata: { updatedFields: Object.keys(req.body) },
  });

  res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);

  await logActivity({
    action: "USER_DELETED",
    performedBy: req.user._id,
    targetUser: id,
  });

  res.json({ message: "User deleted successfully" });
};
