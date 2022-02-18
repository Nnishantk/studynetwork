const {Services} = require('../modal')

module.exports = {
    /**
     * @param {*} payload 
     * @returns {success:true/false}
     */
    async addServices(payload) {
        let result = await Services.create(payload)
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
    async getAllServices() {
        let result = await Services.find({},{ __v: 0 })
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
    async getSingleServices(servicesId) {
        let result = await Services.findOne({ _id:servicesId}, { __v: 0 })
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
    async updateServices(servicesId, payload) {
        let result = await Services.findOneAndUpdate({ _id: servicesId}, payload, { new: true })
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
    async deleteServices(servicesId) {
        let result = await Services.findOneAndDelete({ _id:servicesId })
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
    async deleteAllServices() {
        let result = await Services.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
}