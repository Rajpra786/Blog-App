const aws = require("aws-sdk");
const crypto = require("crypto");
const { promisify } = require("util");

const randomBytes = promisify(crypto.randomBytes);

require("dotenv").config(); // include configurations

const bucketName = process.env.S3_BUCKET_NAME;

const s3 = new aws.S3({
	accessKeyId: process.env.S3_ACCESS_KEY,
	secretAccessKey: process.env.S3_SECRET_KEY,
	region: process.env.S3_REGION,
});

module.exports = async (req, res) => {
	const rawBytes = await randomBytes(16);
	const imageName = rawBytes.toString("hex") + req.params.imgName;

	const params = {
		Bucket: bucketName,
		Key: imageName,
		Expires: 60,
	};

	s3.getSignedUrlPromise("putObject", params)
		.then((uploadURL) => {
			return res.status(200).json({
				success: true,
				message: "Successfully Send",
				url: uploadURL,
			});
		})
		.catch((err) => {
			console.log(err);
			return res.status(300).json({
				success: false,
				message: err.message,
			});
		});
};
