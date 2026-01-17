const express = require("express");
const router = express.Router();
const { updateUser, deleteUser } = require("../controllers/userController");
const auth = require("../middleware/auth");

router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
