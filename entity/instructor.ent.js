const {Instructor} = require('../modal')

module.exports = {
    /**
     * @param {*} payload 
     * @returns {success:true/false}
     */
    async addInstructor(payload) {
        let result = await Instructor.create(payload)
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
    async GetAllInstructor() {
        let result = await Instructor.find({},{ __v: 0 })
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
    async getSingleInstructor(instructorId) {
        let result = await Instructor.findOne({ _id:instructorId}, { __v: 0 })
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
    async updateInstructor(instructorId, payload) {
        let result = await Instructor.findOneAndUpdate({ _id:instructorId}, payload, { new: true })
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
    async deleteInstructor(instructorId) {
        let result = await Instructor.findOneAndDelete({ _id:instructorId })
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
    async deleteAllInstructor() {
        let result = await Instructor.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
}