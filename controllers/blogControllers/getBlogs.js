const { Blog } = require("../../models/blog");

module.exports = async (req, res) => {
	/*
		#swagger.tags = ['Blog']
		#swagger.summary = 'Get All blogs'
        #swagger.description = 'Endpoint to get all blogs based on query parameters'
		
		#swagger.parameters['tag'] = {
            in: 'query',
            description: 'blog tag',
            schema: { 
						$tag:'science-and-space' 
                    }
        }
		
		#swagger.parameters['max count'] = {
            in: 'query',
            description: 'Maximum number of elements that need to be returned',
            schema: { 
						$maxcount:3 
                    }
        }

		#swagger.parameters['sort'] = {
            in: 'query',
            description: 'Sort or Not sorted',
            schema: { 
						$sort:true 
                    }
        }


		#swagger.security = [{
               "apiKeyAuth": []
        }]
	*/

	var blogs = [];
	var filters = {};
	var query = {};
	if (req.query.maxcount) {
		filters.limit = Number(req.query.maxcount);
	}

	if (req.query.sort) {
		filters.sort = { updatedAt: "asc" };
	}

	if (req.query.tag) {
		query.tags = { $in: req.query.tag };
	}
	await Blog.find(
		query,
		"author readTime title description image tags updatedAt",
		filters
	)
		.populate("author", "_id name avatar description")
		.then((blogs) => {
			return res.status(200).json({
				blogs: blogs,
			});
		})
		.catch((err) => {
			return res.status(404).json({
				success: false,
				message: "Something went Wrong!",
			});
		});
};
