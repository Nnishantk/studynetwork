const{careerTrackEnt}= require('../entity');

module.exports={

    // user registeration
    async addBlog (req,res,next){
        try{
            const payload = req.body;
            let result = await careerTrackEnt.addBlog(payload);
            if(result.success){
                res.status(result.status).json({
                    success:result.success,
                    message:result.message,
                    data:result.data
                });
            }
            else{
                res.status(result.status).json({
                    success:result.success,
                    message:result.message
                });
            }
        }catch(e){
            next(e)
        }
    },

    async GetAllBlog(req, res, next) {
        try {
            let result = await careerTrackEnt.GetAllBlog()
            if (result.success){
                res.status(result.code).json({
                    success:result.success,
                    message:result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message:result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },

    async getSingleBlog(req, res, next) {
        try {
            let blogId = req.params.blogid
            let result = await careerTrackEnt.getSingleBlog(blogId)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },

    async updateBlog(req, res, next) {
        try {
            let payload = req.body;
            let BlogId = req.params.blogid
            let result = await careerTrackEnt.updateBlog(BlogId, payload)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data:result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },

    async deleteBlog(req, res, next) {
        try {
            let BlogId = req.params.blogid
            let result = await careerTrackEnt.deleteBlog(BlogId)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }

        } catch (error) {
            next(error)
        }
    },

    async deleteAllBlog(req, res, next) {
        try {
            let result = await careerTrackEnt.deleteAllBlog()
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },
}