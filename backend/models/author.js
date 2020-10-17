const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: { type: String, required: true },
});

let Author = (module.exports = mongoose.model("Author", authorSchema));

module.exports.get = function (callback, limit) {
  Author.find(callback).limit(limit);
};
