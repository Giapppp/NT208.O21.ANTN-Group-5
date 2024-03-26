const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.status(200).json({ data: "Login route" });
});

export default router;
