const router = require("express").Router();
const courseController = require("../controllers/courseController");

router
  .route("/courses")
  .get(courseController.index)
  .post(courseController.create);
router
  .route("/courses/:course_id")
  .get(courseController.view)
  .patch(courseController.update)
  .put(courseController.update)
  .delete(courseController.delete);
// Export API routes
module.exports = router;
