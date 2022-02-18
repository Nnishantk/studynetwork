const {careerTrack} = require('../modal');

module.exports={
    // Add-Blog
    async addBlog(payload){
        const result = await new careerTrack(payload)
       await result.save()
       if(result){
           return{success:true,status:200,message:"Send successfully",data:result};
        }else{
           return{success:false,status:400,message:"something went wrong"};
       }
    },

    async GetAllBlog() {
        let result = await careerTrack.find({},{ __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },

    async getSingleBlog(BlogId) {
        let result = await careerTrack.findOne({ _id:BlogId}, { __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    async updateBlog(BlogId, payload) {
        let result = await careerTrack.findOneAndUpdate({ _id: BlogId}, payload, { new: true })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully updated' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    async deleteBlog(BlogId) {
        let result = await careerTrack.findOneAndDelete({ _id:BlogId })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully Deleted' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    async deleteAllBlog() {
        let result = await careerTrack.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
    
}
