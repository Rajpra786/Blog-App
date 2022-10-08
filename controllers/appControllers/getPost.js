const { Blog } = require("../../models/blog");
const { Comments } = require("../../models/comments");
const { User } = require("../../models/user");


async function getBlogDetails(blogId, result) {
    await Blog
        .findById(blogId)
        .populate({
            path: "author",
            select: "name email description github twitter website avatar blogs",
            populate: {
                path: "blogs",
                select: "title description image readTime tags",
                options: {
                    limit: 3,
                    sort: { createdAt: -1 },
                }
            }
        }).
        then(data => {
            let dataNew = JSON.parse(JSON.stringify(data));
            let { author, ...blogData } = dataNew;
            let { blogs, ...AuthorData } = author;

            result.fromAuthor = blogs;
            result.author = AuthorData;
            result.blog = blogData;
        }).catch(err => {
            console.log(JSON.stringify(err, Object.getOwnPropertyNames(err), 4));
            result.blog = null;
            throw err;
            // TODO : log error here 
        });
}

module.exports = async (req, res) => {
    /*
        #swagger.tags = ['App']
        #swagger.summary = 'Get Post By Id'
        #swagger.description = 'Endpoint get a blog and its related components by blogId. It provides Blog details, its author details, recommandation, related posts'
         
        #swagger.security = [{
               "apiKeyAuth": []
        }]
    */

    // Blog, Author, Releted posts, More from Author, Top from ok-blogger    

    const result = {};

    const listPromise = [];
    // Get blog and author details 
    listPromise.push(getBlogDetails(req.params.id, result));

    // Get top from ok-blogger

    await Promise.all(listPromise).then(data => {
        return res.status(200).json({
            success: true,
            message: "Request completed",
            data: result,
        });
    }).catch(err => {
        return res.status(503).json({
            success: false,
            message: "blog not found!",
        });
    })
};
