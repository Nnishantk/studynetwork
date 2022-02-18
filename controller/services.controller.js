const { servicesEnt } = require('../entity')


module.exports = {

    /**
     * @POST Create New services
     * post
     */
    async addServices(req, res, next) {
        try {
            let payload = req.body
            if(req.file){
                let image ={
                      filename: req.file.filename,
                      filetype: req.file.mimetype,
                      filesize: req.file.size,
                      url:'public/image/' + req.file.filename
                }
              payload.image = image
             }
            let result = await servicesEnt.addServices(payload)
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
     * get all services
     * get
     */
    async getAllServices(req, res, next) {
        try {
            let result = await servicesEnt.getAllServices()
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
     * get single services by id
     * get
     */
    async getSingleServices(req, res, next) {
        try {
            let servicesId = req.params.servicesid
            let result = await servicesEnt.getSingleServices(servicesId)
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

    // update one services by id
    //patch
    async updateServices(req, res, next) {
        try {
            let payload = req.body;
            let servicesId = req.params.servicesid
            let result = await servicesEnt.updateServices(servicesId, payload)
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

   // delete one services by id
   // delete
    async deleteServices(req, res, next) {
        try {
            let servicesId = req.params.servicesid
            let result = await servicesEnt.deleteServices(servicesId)
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

    // delete all services
    // delete
    async deleteAllServices(req, res, next) {
        try {
            let result = await servicesEnt.deleteAllServices()
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