const mongoose = require("mongoose");

const { Schema } = mongoose;
// Setup schema
let courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Export User model
let Course = (module.exports = mongoose.model("Course", courseSchema));

module.exports.get = function (callback, limit) {
  Course.find(callback).limit(limit);
};
