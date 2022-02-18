const{getIntTouchEnt}= require('../entity');

module.exports={

    // Add Get In Touch

    async addGetIntouch(req,res,next){
        try{
            const payload = req.body;
            let result = await getIntTouchEnt.addGetIntouch(payload);
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
    
    async GetAllIntouch(req, res, next) {
        try {
            let result = await getIntTouchEnt.GetAllIntouch()
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


    
}