const{trainingEnt}= require('../entity');


   module.exports={ 
    // Add Training Schudeled
    async addTrainingSchduled(req,res,next){
        try{
            const payload = req.body;
            let result = await trainingEnt.addTrainingSchduled(payload);
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

    async GetAllTrainingSchduled(req, res, next) {
        try {
            let result = await trainingEnt.GetAllTrainingSchduled()
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

    async getSingleTrainingSchduled(req, res, next) {
        try {
            let trainingId = req.params.trainingid
            let result = await trainingEnt.getSingleTrainingSchduled(trainingId)
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

    async updateTrainingSchduled(req, res, next) {
        try {
            let payload = req.body;
            let trainingId = req.params.trainingId
            let result = await trainingEnt.updateTrainingSchduled(trainingId, payload)
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
    
    async deleteTrainingSchduled(req, res, next) {
        try {
            let trainingId = req.params.trainingid
            let result = await trainingEnt.deleteTrainingSchduled(trainingId)
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

    async deleteAllTrainingSchduled(req, res, next) {
        try {
            let result = await trainingEnt.deleteAllTrainingSchduled()
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