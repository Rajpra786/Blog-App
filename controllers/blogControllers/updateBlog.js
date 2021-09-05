import { findById } from "../../models/blog";

export default async(req, res) => {
    await findById(mongoose.Types.ObjectId(req.body.data.id), (err, blog) => {
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'blog Not found!'
            });
        } else {
            if(req.body.data.title)
                blog.title=req.body.data.title;
            
            if(req.body.data.description)
                blog.description=req.body.data.description;
            
            if(req.body.data.content){
                blog.content=req.body.data.content;
            }
             
            if(req.body.data.images){
                blog.images = req.body.data.images;
            }

            if(req.body.data.tags){
                blog.tags = req.body.data.tags;
            }

            if(req.body.data.comments)
            {
                var mem = blog.comments.concat(req.body.data.comments);
                blog.comments = mem.filter((item,pos)=>mem.indexOf(item)===pos);
            }

            blog.save().then((response)=>{
                return res.status(200).json({
                    success: true,
                    message: req.body.data
                })
            }).catch((err)=>{
                console.log(err);
                return res.status(404).json({
                    success: true,
                    message: 'Something went wrong'
                })
            });  
               
        }
    });
}