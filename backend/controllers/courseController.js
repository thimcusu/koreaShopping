let Course = require("../models/course");

//Handle index action
exports.index = (req, res) => {
  Course.get((err, courses) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else
      res.json({
        status: "success",
        message: "course retrieved successfully",
        data: courses,
      });
  });
};

//Handle create course action
exports.create = async (req, res) => {
  let course = new Course();
  course.title = req.body.title;
  course.slug = req.body.slug;
  course.authorId = req.body.authorId;
  course.category = req.body.category;
  //Save course and check for errors
  course.save(err => {
    if (err) res.json(err);
    else
      res.json({
        message: "New course created",
        data: course,
      });
  });
};

//Handle view course info
exports.view = (req, res) => {
  Course.findById(req.params.course_id, (err, course) => {
    if (err) res.send(err);
    else
      res.json({
        message: "Loading...",
        data: course,
      });
  });
};

//Handle update course data
exports.update = async (req, res, next) => {
  let querry = { _id: req.params.course_id };
  let a = await Course.findOneAndUpdate(
    querry,
    req.body,
    { new: true, upsert: true },
    (err, course) => {
      if (err) res.json(err);
      else {
        res.json({
          message: "course updated",
          data: { ...querry, ...req.body },
        });
        next();
      }
    }
  );
};

//Handle delete course data
exports.delete = (req, res) => {
  Course.deleteOne({ _id: req.params.course_id }, (err, course) => {
    if (err) res.send(err);
    else
      res.json({
        status: "success",
        message: "course deleted",
      });
  });
};
