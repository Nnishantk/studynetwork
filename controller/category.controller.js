const { categoryEnt } = require('../entity')


module.exports = {

    /**
     * @POST Create New category
     * post
     */
    async addCategory(req, res, next) {
        try {
            let payload = req.body
            console.log(req.body);
            if(req.file){
               let image ={
                     filename: req.file.filename,
                     filetype: req.file.mimetype,
                     filesize: req.file.size,
                     url:'public/category/' + req.file.filename
               }
                   payload.image = image
                }

            let result = await categoryEnt.addCategory(payload)
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

    /**
     * get all category
     * get
     */
    async getAllCategory(req, res, next) {
        try {
            let result = await categoryEnt.getAllCategory()
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

    /**
     * get single category by id
     * get
     */
    async getSingleCategory(req, res, next) {
        try {
            let categoryId = req.params.categoryid
            let result = await categoryEnt.getSingleCategory(categoryId)
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

    // update one category by id
    //patch
    async updateCategory(req, res, next) {
        try {
            let payload = req.body;
            let categoryId = req.params.categoryid
            let result = await categoryEnt.updateCategory(categoryId, payload)
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

   // delete one category by id
   // delete
    async deleteCategory(req, res, next) {
        try {
            let categoryId = req.params.categoryid
            let result = await categoryEnt.deleteCategory(categoryId)
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

    // delete all category
    // delete
    async deleteAllCategory(req, res, next) {
        try {
            let result = await categoryEnt.deleteAllCategory()
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