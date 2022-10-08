const mongoose = require("mongoose");

require("dotenv").config();

const statsSchema = mongoose.Schema(
    {
        blogId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
            required: [true, "Stats should be associated with blogId"],
        },
        likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        verfiedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        approvals: {
            type: Number,
            default: 0,
        },
        reads: {
            type: Number,
            default: 0,
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);

const Stats = mongoose.model("Stats", statsSchema);
module.exports = { Stats };
