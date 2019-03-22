const express = require("express");
const router = express.Router();
const path = require("path");

const appDir = path.dirname(require.main.filename);

router.use(express.static(appDir + "/public/"));

router.get("/", (req, res) => {
  res.sendFile(appDir + "/public/index.html");
});

module.exports = router;
