const mongoose = require("mongoose");
require("dotenv").config();

const blogSchema = mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: [true, "Unknown user!"],
		},
		title: {
			type: String,
			required: [true, "Title can not be empty!"],
			maxlength: 100,
		},
		content: {
			type: mongoose.Schema.Types.Mixed,
			default: "<p>Start Writing</p>",
		},
		description: {
			type: String,
			maxlength: 200,
		},
		image: {
			type: String,
		},
		readTime: {
			type: Number,
			default: 2,
		},
		comments_enabled: {
			type: Boolean,
			default: true,
		},
		comments: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comments",
		},
		stats: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Stats",
		},
		tags: [
			{
				type: String,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = { Blog };
