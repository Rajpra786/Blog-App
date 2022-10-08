const { Blog } = require("../../models/blog");

// async function transform() {
//     await Blog.find().then(async blogs => {
//         for (let blog of blogs) {
//             if (blog._id.toString() !== "6159fde88150df0056cf2df6") {
//                 let stat = new Stats({
//                     blogId: blog._id
//                 })
//                 await stat.save(async (err, cmt) => {
//                     blog.stats = cmt._id;
//                     await blog.save().then(blog => {
//                         console.log("added to ", blog._id);
//                     })
//                 })
//             }
//             else {
//                 console.log("Hello ", blog._id);
//             }
//         }
//     }).catch(err => {
//         console.log(err);
//     })
// }

// how to populate multiple ref objects in mongodb?
async function getBlogDetails(blogId, result) {
    await Blog
        .findById(blogId)
        .populate({
            path: "author",
            select: "name email description github twitter website avatar blogs",
            populate: {
                path: "blogs",
                select: "title description image readTime tags stats",
                options: {
                    limit: 3,
                    sort: { createdAt: -1 },
                },
                populate: {
                    path: "stats",
                    select: "approvals reads views likes"
                }
            }
        })
        .populate({
            path: "stats",
            select: "approvals reads views likes"
        })
        .then(data => {
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
