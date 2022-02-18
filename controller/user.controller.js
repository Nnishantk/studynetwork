const{userEnt}= require('../entity');

module.exports={

    // user registeration

    async register(req,res,next){
        try{
            const payload = req.body;
            let result = await userEnt.register(payload);
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

    // user login

    async login(req,res,next){
        try{
            const payload = req.body;
            let result = await userEnt.login(payload);
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

    // get all user 

    async getAllUser(req,res,next){
        try{
            let result = await userEnt.getAllUser();
            if(result.success){
                res.status(result.status).json({
                    success:result.success,
                    message:result.message,
                    data:result.data
                })
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

}