const authorRoute = require("./author");
const courseRouter = require("./course");

// Initialize express router
let router = require("express").Router();
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

router.use("/", authorRoute);
router.use("/", courseRouter);

module.exports = router;
