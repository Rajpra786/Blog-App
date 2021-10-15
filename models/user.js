const encrypt = require("./helpers/encrypt");
const comparePassword = require("./helpers/comparePassword");
const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required!"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required!"],
			trim: true,
			unique: 1,
			maxlength: 100,
		},
		password: {
			type: String,
			required: [true, "Password is required!"],
			minlength: 5,
		},
		description: {
			type: String,
		},
		github: {
			type: String,
		},
		twitter: {
			type: String,
		},
		website: {
			type: String,
		},
		avatar: {
			type: String,
		},
		blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
		posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
	},
	{
		timestamps: true,
	}
);

//Encrypt password, before saving
userSchema.pre("save", encrypt);

//compare password with encrypted
userSchema.methods.comparePassword = comparePassword;

const User = mongoose.model("User", userSchema);
module.exports = { User };
