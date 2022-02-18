const {training} = require('../modal');

module.exports={
    // register
    async addTrainingSchduled(payload){
        const result = await new training(payload)
       await result.save()
       if(result){
           return{success:true,status:200,message:"Send successfully",data:result};
        }else{
           return{success:false,status:400,message:"something went wrong"};
       }
    },
    async GetAllTrainingSchduled() {
        let result = await training.find({},{ __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },

    async getSingleTrainingSchduled(trainingId) {
        let result = await training.findOne({ _id: trainingId}, { __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    async updateTrainingSchduled(trainingId, payload) {
        let result = await training.findOneAndUpdate({ _id: trainingId}, payload, { new: true })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully updated' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    async deleteTrainingSchduled(trainingId) {
        let result = await training.findOneAndDelete({ _id:trainingId })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully Deleted' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    async deleteAllTrainingSchduled() {
        let result = await training.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },

}