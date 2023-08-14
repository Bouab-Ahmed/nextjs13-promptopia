import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    minlength: 3,
    maxlength: 50,
  },
  profilePicture: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 8,
  //   maxlength: 100,
  // },
  // prompts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Prompt",
  //   },
  // ],
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Comment",
  //   },
  // ],
  // likes: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Like",
  //   },
  // ],
  // dislikes: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Dislike",
  //   },
  // ],
  // bookmarks: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Bookmark",
  //   },
  // ],
  // followers: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // following: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // bio: {
  //   type: String,
  //   default: "",
  // },
  // website: {
  //   type: String,
  //   default: "",
  // },
  // location: {
  //   type: String,
  //   default: "",
  // },
  // birthday: {
  //   type: Date,
  //   default: null,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const User = models.User || model("User", userSchema);
export default User;