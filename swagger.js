const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		version: "1.0.0",
		title: "Blogger-Bhaiya backend API",
		description: "This is the documentation for backend server API.",
	},
	host: "https://blogger-bhaiya.herokuapp.com",
	basePath: "/",
	consumes: ["application/json"],
	produces: ["application/json"],
	securityDefinitions: {
		apiKeyAuth: {
			type: "apiKey",
			in: "header", // can be "header", "query" or "cookie"
			name: "X-API-KEY", // name of the header, query parameter or cookie
			description: "any description...",
		},
	},
	definitions: {
		User: {
			name: "Rajendra Prajapat",
			email: "hello@gmail.com",
			description: "Software Developer",
			github: "https://www.github.com/rajpra786",
			twitter: "https://twitter.com/msdhoni",
			website: "https://www.rajendra.codes/",
			avatar: "https://en.wikipedia.org/wiki/File:A._P._J._Abdul_Kalam.jpg",
			blogs: [],
		},
		Blog: {
			author: "Author Id",
			title: "Blog Title",
			content: "<p>Blog Content In HTML</p>",
			description: "Few lines about blog",
			image: "Poster URL",
			readTime: 2,
			comments_enabled: true,
			comments: "Comment Box Id",
			tags: [],
		},
		Comment: {
			author: "Author Id",
			message: "Some comment",
		},
		Comments: {
			comments: [
				{
					$ref: "#/definitions/Comment",
				},
			],
		},
	},
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./endpoints.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
// 	require("./index"); // Your project's root file
// });
