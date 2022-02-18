const {Course} = require('../modal')
const fs = require('fs')

module.exports = {
    /**
     * @param {*} payload 
     * @returns {success:true/false, data:users}
     */
    async addCourses(payload) {
        let result = await Course.create(payload)
        if (result) {
            return { success: true, data:result, code: 201, message: 'Successfully add' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },

    /**
     * @param {*} payload 
     * @returns {success:true/false, data:users}
     */
    async getAllCourses() {
        let result = await Course.find({})
        .populate("categories")
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },


    /**
    * 
    * @param {*} payload 
    * @returns {success:true/false, data:users}
    */
    async getSingleCourses(courseId) {
        let result = await Course.findOne({ _id:courseId, isDeleted: null }, { __v: 0 })
        if (result) {
            return { success: true, data:result, code: 200, message: 'success' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    /**
     * 
     * @param {*} payload 
     * @returns {success:true/false, data:users}
     */
    async updateCourses(courseId, payload) {
        let course = await Course.findOne({ _id:courseId, isDeleted: null });
        if(payload.image){
            fs.unlink(course.image.url, (err) => {
                if (err){ console.log("previous image not found (when deleting)")
            }else{console.log(`successfully deleted previous image ${course.image.url}`);}
              });
        }
        let updateCourse = await Course.findOneAndUpdate({ _id: courseId, isDeleted: null }, payload, { new: true })
        if (updateCourse) {
            return { success: true, data: updateCourse, code: 200, message: 'Successfully updated' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    // /**
    //  * 
    //  * @param {*} payload 
    //  * @returns {success:true/false, data:users}
    //  */
    // async deleteCourses(courseId) {
    //     let deleteSoft = await Course.findOneAndUpdate({ _id: courseId, isDeleted: null }, { isDeleted: new Date() }, { new: true })
    //     if (deleteSoft) {
    //         return { success: true, data: deleteSoft, code: 200, message: 'Successfully Deleted' }
    //     } else {
    //         return { success: false, code: 404, error: 'Record Not Found!!!' }
    //     }
    // },

    // /**
    //  * 
    //  * @param {*} payload 
    //  * @returns {success:true/false, data:users}
    //  */
    // async restoreCourses(courseId) {
    //     let restoreData = await Course.findOneAndUpdate({ _id: courseId, isDeleted: { $ne: null } }, { isDeleted: null }, { new: true })
    //     if (restoreData) {
    //         return { success: true, data: restoreData, code: 200, message: 'Successfully Restore' }
    //     } else {
    //         return { success: false, code: 404, error: 'Record Not Found!!!' }
    //     }
    // },

    /**
     * @param {*} payload 
     * @returns {success:true/false, data:users}
     */
    async deleteCourses(courseId) {
        let deleteCourse = await Course.findOneAndDelete({ _id: courseId })
        if (deleteCourse) {
            return { success: true, data: deleteCourse, code: 200, message: 'Successfully Deleted' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

    /**
     * 
     * @param {*} payload 
     * @returns {success:true/false, data:users}
     */
    async deleteAllCourses() {
        let result = await Course.deleteMany();
        if (result) {
            return { success: true, data:result, code: 200, message: 'Success' }
        } else {
            return { success: false, code: 400, error: 'Something went wrong!!!' }
        }
    },
}