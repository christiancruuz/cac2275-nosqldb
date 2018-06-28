const mongoose = require("mongoose");
let ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  product_image: String,
  likes: Number,
  designer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      text: String
    }
  ]
});
ProductSchema.methods.like = function() {
  this.like++;
  return this.save();
};
ProductSchema.methods.comment = function(c) {
  this.comments.push(c);
  return this.save();
};
ProductSchema.methods.addAuthor = function(author_id) {
  this.author = author_id;
  return this.save();
};
ProductSchema.methods.getUserProduct = function(_id) {
  Article.find({ author: _id }).then(article => {
    return article;
  });
};
module.exports = mongoose.model("Product", ProductSchema);
