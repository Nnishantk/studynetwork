const { instructorEnt } = require('../entity')


module.exports = {

    /**
     * @POST Create New category
     * post
     */
    async addInstructor(req, res, next) {
        try {
            let payload = req.body
            console.log(req.body);
            if(req.file){
               let avtar ={
                     filename: req.file.filename,
                     filetype: req.file.mimetype,
                     filesize: req.file.size,
                     url:'public/profileimage/' + req.file.filename
               }
                   payload.avtar = avtar
                }

            let result = await instructorEnt.addInstructor(payload)
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

    async GetAllInstructor(req, res, next) {
        try {
            let result = await instructorEnt.GetAllInstructor()
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
    async getSingleInstructor(req, res, next) {
        try {
            let instructorId = req.params.instructorid
            let result = await instructorEnt.getSingleInstructor(instructorId)
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

    async updateInstructor(req, res, next) {
        try {
            let payload = req.body;
            let instructorId = req.params.instructorid
            let result = await instructorEnt.updateInstructor(instructorId, payload)
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

    async deleteAllInstructor(req, res, next) {
        try {
            let result = await instructorEnt.deleteAllInstructor()
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