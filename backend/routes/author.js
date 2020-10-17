const router = require("express").Router();
const authorController = require("../controllers/authorController");

router
  .route("/authors")
  .get(authorController.index)
  .post(authorController.create);
router
  .route("/authors/:author_id")
  .get(authorController.view)
  .patch(authorController.update)
  .put(authorController.update)
  .delete(authorController.delete);
// Export API routes
module.exports = router;
