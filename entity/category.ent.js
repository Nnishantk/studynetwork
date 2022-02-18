const {Category} = require('../modal')

module.exports = {
    /**
     * @param {*} payload 
     * @returns {success:true/false}
     */
    async addCategory(payload) {
        let result = await Category.create(payload)
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
    async getAllCategory() {
        let result = await Category.find({},{ __v: 0 })
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
    async getSingleCategory(categoryId) {
        let result = await Category.findOne({ _id:categoryId}, { __v: 0 })
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
    async updateCategory(categoryId, payload) {
        let result = await Category.findOneAndUpdate({ _id: categoryId}, payload, { new: true })
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
    async deleteCategory(categoryId) {
        let result = await Category.findOneAndDelete({ _id:categoryId })
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
    async deleteAllCategory() {
        let result = await Category.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
}