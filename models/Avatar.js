const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  avatar: {
    data: Buffer,
    contentType: String
  }
});

module.exports = Avatar = mongoose.model("avatar", AvatarSchema);
