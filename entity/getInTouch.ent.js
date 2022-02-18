const {getInTouch} = require('../modal');

module.exports={
    // register
    async addGetIntouch(payload){
        const result = await new getInTouch(payload)
       await result.save()
       if(result){
           return{success:true,status:200,message:"Send successfully",data:result};
        }else{
           return{success:false,status:400,message:"something went wrong"};
       }
    },

    async GetAllIntouch() {
        let result = await getInTouch.find({},{ __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
    
}