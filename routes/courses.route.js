const express = require('express');
const { courseController } = require('../controller');
const { verifyAccessToken } = require('../middleware/validate');
const { upload_courseImage } = require('../middleware/files.upload');

                               

const router = express.Router()

router.post('/add',upload_courseImage.single('video'),courseController.addCourses)
router.get('/all', courseController.getAllCourses)
router.get('/public/all', verifyAccessToken ,courseController.getAllUserCourses)
router.get('/single/:courseId', courseController.getSingleCourses)
router.patch('/update/:courseId',upload_courseImage.single('video'), courseController.updateCourses)
router.delete('/delete/:courseId', courseController.deleteCourses)
router.delete('/delete_all', courseController.deleteAllCourses)

module.exports = router;