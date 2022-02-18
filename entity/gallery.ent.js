const {Gallery} = require('../modal')

module.exports = {
    /**
     * @param {*} payload 
     * @returns {success:true/false}
     */
    async addGallery(payload) {
        let result = await Gallery.create(payload)
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
    async getAllGallery() {
        let result = await Gallery.find({},{ __v: 0 })
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
    async getSingleGallery(galleryId) {
        let result = await Gallery.findOne({ _id:galleryId}, { __v: 0 })
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
    async updateGallery(galleryId, payload) {
        let result = await Gallery.findOneAndUpdate({ _id: galleryId}, payload, { new: true })
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
    async deleteGallery(galleryId) {
        let result = await Gallery.findOneAndDelete({ _id:galleryId })
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
    async deleteAllGallery() {
        let result = await Gallery.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
}