const { bannerEnt } = require('../entity')


module.exports = {

    /**
     * @POST Create New banner
     * post
     */
    async addBanner(req, res, next) {
        try {
            let payload = req.body
            if(req.file){
                let file ={
                      filename: req.file.filename,
                      filetype: req.file.mimetype,
                      filesize: req.file.size,
                      url:'public/banner/' + req.file.filename
                }
              payload.file = file
             }
            let result = await bannerEnt.addBanner(payload)
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
     * get all banner
     * get
     */
    async getAllBanner(req, res, next) {
        try {
            let result = await bannerEnt.getAllBanner()
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
     * get single banner by id
     * get
     */
    async getSingleBanner(req, res, next) {
        try {
            let bannerId = req.params.bannerid
            let result = await bannerEnt.getSingleBanner(bannerId)
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

    // update one banner by id
    //patch
    async updateBanner(req, res, next) {
        try {
            let payload = req.body;
            if(req.file){
                let file ={
                      filename: req.file.filename,
                      filetype: req.file.mimetype,
                      filesize: req.file.size,
                      url:'public/banner/' + req.file.filename
                }
              payload.file = file
             }
            let bannerId = req.params.bannerid
            let result = await bannerEnt.updateBanner(bannerId, payload)
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

   // delete one banner by id
   // delete
    async deleteBanner(req, res, next) {
        try {
            let bannerId = req.params.bannerid
            let result = await bannerEnt.deleteBanner(bannerId)
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

    // delete all banner
    // delete
    async deleteAllBanner(req, res, next) {
        try {
            let result = await bannerEnt.deleteAllBanner()
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