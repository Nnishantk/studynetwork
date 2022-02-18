const { courseEnt} = require('../entity')

module.exports = {

    /**
     * @POST Create New Subject
     * @param {}
     */
    async addCourses(req, res, next) {
        try {
            let payload = req.body
           if(req.file){
              let video ={
                    filename: req.file.filename,
                    filetype: req.file.mimetype,
                    filesize: req.file.size,
                    url:'public/courses/video/' + req.file.filename
              }
                  payload.video = video
               }

            let result = await courseEnt.addCourses(payload)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }

        } catch (error) {
            next(error)
        }
    },

    /**
     * @POST Create New class
     * @param {}
     */
    async getAllCourses(req, res, next) {
        try {
         //   let courseList = []
            let result = await courseEnt.getAllCourses()
            if (result.success) {
                // for (let i = 0; i < result.data.length; i++) {
                //     let videos = await videoLectureEnt.FindByCourseIdVideoLectures(result.data[i]._id)
                //     let studymaterial = await studyMaterialEnt.getAllStudyMaterial(result.data[i]._id)
                //     let count = await VideoLecturesModal.count({courseId:result.data[i]._id});
                //     let totalStudent = await EnrollCourseSModal.count({courseId:result.data[i]._id , isDeleted:null});
                //     courseList.push({
                //         _id: result.data[i]._id,
                //         name: result.data[i].name,
                //         price: result.data[i].price,
                //         description: result.data[i].description,
                //         rating: result.data[i].rating,
                //         years: result.data[i].years,
                //         thumnail: result.data[i].thumnail,
                //         notes: 'public/courses/notes/default.pdf',
                //         verifyStatus: result.data[i].verifyStatus,
                //         status: result.data[i].status,
                //         // profesor: {
                //         //     name: `${result.data[i].teacherId.fname} ${result.data[i].teacherId.lname}`,
                //         //     email: result.data[i].teacherId.email,
                //         // },
                //         profesor:result.data[i].teacherId,
                //         image: result.data[i].image,
                //         videos: videos.data,
                //         studyMaterial : studymaterial.data,
                //         lectures: count || 0,
                //         no_of_student:  totalStudent || 0,
                //         isDeleted: result.data[i].isDeleted,
                //         createdAt: result.data[i].createdAt,
                //         updatedAt: result.data[i].updatedAt
                //     })
                // }
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                   
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async getAllUserCourses(req, res, next) {
        try {
            let userId = req.payload.aud
           // let courseList = []
            let result = await courseEnt.getAllCourses()
            // let enrollCourses = await EnrollCourseSModal.find({userId , isDeleted:null});
            // async function isEnroll(enrollCourses,course){
            //     if(enrollCourses.length == 0){
            //     return false
            // }else{
            //     for(let enrollcourse of enrollCourses){
            //         if(enrollcourse.courseId.equals(course._id)){
            //             return true;
            //         }
            //     }}
            //     return false
            // }
            if (result.success) {
                // for (let i = 0; i < result.data.length; i++) {
                //     let videos = await videoLectureEnt.FindByCourseIdVideoLectures(result.data[i]._id)
                //     let studymaterial = await studyMaterialEnt.getAllStudyMaterial(result.data[i]._id)
                //     let count = await VideoLecturesModal.count({courseId:result.data[i]._id});
                //     let totalStudent = await EnrollCourseSModal.count({courseId:result.data[i]._id , isDeleted:null});
                //     courseList.push({
                //         _id: result.data[i]._id,
                //         name: result.data[i].name,
                //         price: result.data[i].price,
                //         description: result.data[i].description,
                //         rating: result.data[i].rating,
                //         years: result.data[i].years,
                //         thumnail: result.data[i].thumnail,
                //         notes: 'public/courses/notes/default.pdf',
                //         verifyStatus: result.data[i].verifyStatus,
                //         status: result.data[i].status,
                //         // profesor: {
                //         //     name: `${result.data[i].teacherId.fname} ${result.data[i].teacherId.lname}`,
                //         //     email: result.data[i].teacherId.email,
                //         // },
                //         profesor:result.data[i].teacherId,
                //         image: result.data[i].image,
                //         videos: videos.data,
                //         studyMaterial : studymaterial.data ,
                //         lectures: count || 0,
                //         no_of_student: totalStudent || 0,
                //         isUserEnrolled: await isEnroll(enrollCourses,result.data[i]),
                //         isDeleted: result.data[i].isDeleted,
                //         createdAt: result.data[i].createdAt,
                //         updatedAt: result.data[i].updatedAt
                //     })
                // }
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },


    //  /**
    //  * @POST Create New class
    //  * @param {}
    //  */
    //   async getVideoLecturesCourses(req, res, next) {
    //     try {
    //         let courseList = []
    //         let result = await courseEnt.getAllCourses()
    //         if (result.success) {
    //             for (let i = 0; i < result.data.length; i++) {
    //                 let videos = await videoLectureEnt.getTopOneVideoLectures(result.data[i]._id)
    //                 courseList.push({
    //                     _id: result.data[i]._id,
    //                     name: result.data[i].name,
    //                     videos: videos.data,
    //                     isDeleted: result.data[i].isDeleted,
    //                     createdAt: result.data[i].createdAt,
    //                     updatedAt: result.data[i].updatedAt
    //                 })
    //             }
    //             res.status(result.code).json({
    //                 success:result.success,
    //                 message: result.message,
    //                 data: courseList
    //             })
    //         } else {
    //             res.status(result.code).json({
    //                 success:result.success,
    //                 message: result.error
    //             })
    //         }
    //     } catch (error) {
    //         next(error)
    //     }
    // },


    /**
     * @POST Create New class
     * @param {}
     */
    async getSingleCourses(req, res, next) {
        try {
            let courseId = req.params.courseId
            let result = await courseEnt.getSingleCourses(courseId)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },

    /**
     * @POST Create New class
     * @param {}
     */
    async updateCourses(req, res, next) {
        try {
            let payload = req.body
            if(req.file){
                let image ={
                      filename: req.file.filename,
                      filetype: req.file.mimetype,
                      filesize: req.file.size,
                      url:'public/courses/image/' + req.file.filename
                }
              payload.image = image
              payload.thumnail = 'public/courses/image/' + req.file.filename
             }
            let courseId = req.params.courseId
            let result = await courseEnt.updateCourses(courseId, payload)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data:result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },

    /**
     * @POST Create New class
     * @param {}
     */
    // async deleteCourses(req, res, next) {
    //     try {
    //         let courseId = req.params.courseId
    //         let result = await courseEnt.deleteCourses(courseId)
    //         if (result.success) {
    //             res.status(result.code).json({
    //                 success:result.success,
    //                 message: result.message
    //             })
    //         } else {
    //             res.status(result.code).json({
    //                 success:result.success,
    //                 message: result.error
    //             })
    //         }
    //     } catch (error) {
    //         next(error)
    //     }
    // },

    // /**
    //  * @POST Create New class
    //  * @param {}
    //  */
    // async restoreCourses(req, res, next) {
    //     try {
    //         let courseId = req.params.courseId
    //         let result = await courseEnt.restoreCourses(courseId)
    //         if (result.success) {
    //             res.status(result.code).json({
    //                 success:result.success,
    //                 message: result.message
    //             })
    //         } else {
    //             res.status(result.code).json({
    //                 success:result.success,
    //                 message: result.error
    //             })
    //         }

    //     } catch (error) {
    //         next(error)
    //     }
    // },

    /**
     * @POST Create New class
     * @param {}
     */
    async deleteCourses(req, res, next) {
        try {
            let courseId = req.params.courseId
            let result = await courseEnt.deleteCourses(courseId)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }

        } catch (error) {
            next(error)
        }
    },

    /**
     * @POST Create New class
     * @param {}
     */
    async deleteAllCourses(req, res, next) {
        try {
            let result = await courseEnt.deleteAllCourses()
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },
}