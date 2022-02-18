const {Banner} = require('../modal')

module.exports = {
    /**
     * @param {*} payload 
     * @returns {success:true/false}
     */
    async addBanner(payload) {
        let result = new Banner(payload)
        await result.save();
        if (result) {
            return { success: true, data:result, code: 201, message: 'Successfully add' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },

    /**
     * @param {*} 
     * @returns {success:true/false}
     */
    async getAllBanner() {
        let result = await Banner.find({},{ __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },


    /**
    * 
    * @param {*} 
    * @returns {success:true/false}
    */
    async getSingleBanner(bannerId) {
        let result = await Banner.findOne({ _id:bannerId}, { __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    /**
     * 
     * @param {*} 
     * @returns {success:true/false}
     */
    async updateBanner(bannerId, payload) {
        let result = await Banner.findOneAndUpdate({ _id:bannerId}, payload, { new: true })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully updated' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    /**
     * @param {*} 
     * @returns {success:true/false}
     */
    async deleteBanner(bannerId) {
        let result = await Banner.findOneAndDelete({ _id:bannerId })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully Deleted' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    /**
     * 
     * @param {*} 
     * @returns {success:true/false}
     */
    async deleteAllBanner() {
        let result = await Banner.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
}