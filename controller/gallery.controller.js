const { galleryEnt } = require('../entity')


module.exports = {

    /**
     * @POST Create New Gallery
     * post
     */
    async addGallery(req, res, next) {
        try {
            let payload = req.body
            if(req.file){
                let file ={
                      filename: req.file.filename,
                      filetype: req.file.mimetype,
                      filesize: req.file.size,
                      url:'public/gallery/' + req.file.filename
                }
              payload.file = file
             }
            let result = await galleryEnt.addGallery(payload)
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
     * get all Gallery
     * get
     */
    async getAllGallery(req, res, next) {
        try {
            let result = await galleryEnt.getAllGallery()
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
     * get single Gallery by id
     * get
     */
    async getSingleGallery(req, res, next) {
        try {
            let galleryId = req.params.galleryid
            let result = await galleryEnt.getSingleGallery(galleryId)
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

    // update one Gallery by id
    //patch
    async updateGallery(req, res, next) {
        try {
            let payload = req.body;
            let galleryId = req.params.galleryid
            let result = await galleryEnt.updateGallery(galleryId, payload)
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

   // delete one Gallery by id
   // delete
    async deleteGallery(req, res, next) {
        try {
            let galleryId = req.params.galleryid
            let result = await galleryEnt.deleteGallery(galleryId)
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

    // delete all Gallery
    // delete
    async deleteAllGallery(req, res, next) {
        try {
            let result = await galleryEnt.deleteAllGallery()
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