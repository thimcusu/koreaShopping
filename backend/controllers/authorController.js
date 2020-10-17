let Author = require("../models/author");

exports.index = (req, res) => {
  Author.get((err, authors) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else
      res.json({
        status: "success",
        message: "Authors retrieved successfully",
        data: authors,
      });
  });
};

exports.create = (req, res) => {
  let author = new Author();
  author.name = req.body.name;
  author.save(err => {
    if (err) res.json(err);
    else
      res.json({
        message: "New course created",
        data: author,
      });
  });
};

exports.view = (req, res) => {
  Author.findById(req.params.author_id, (err, author) => {
    if (err) res.send(err);
    else
      res.json({
        message: "Loading...",
        data: author,
      });
  });
};

exports.update = (req, res) => {
  let querry = { _id: req.params.author_id };
  Author.findOneAndUpdate(
    querry,
    { $set: req.body },
    { upsert: true },
    (err, author) => {
      if (err) res.json(err);
      else {
        res.json({
          message: "Author updated",
          data: req.body,
        });
      }
    }
  );
};

exports.delete = (req, res) => {
  Author.remove({ _id: req.params.course_id }, (err, course) => {
    if (err) res.send(err);
    else
      res.json({
        status: "success",
        message: "author deleted",
      });
  });
};
