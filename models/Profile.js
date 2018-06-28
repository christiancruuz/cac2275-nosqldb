const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  avatar: {
    type: String
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  team: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  // followers: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User"
  //   }
  // ],
  // following: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User"
  //   }
  // ],
  date: {
    type: Date,
    default: Date.now
  }
});

// ProfileSchema.methods.follow = function(user_id) {
//   if (this.following.indexOf(user_id) === -1) {
//     this.following.push(user_id);
//   }
//   return this.save();
// };
// ProfileSchema.methods.addFollower = function(fs) {
//   this.followers.push(fs);
// };

module.exports = Profile = mongoose.model("profile", ProfileSchema);
