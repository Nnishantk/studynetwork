const express = require('express');
const router = express.Router()
const { instructorController } = require('../controller');
const{upload_profileImage}=require('../middleware/files.upload');

router.post('/add-instructor',upload_profileImage.single('image'),instructorController.addInstructor);
router.get('/get/all/instructor', instructorController.GetAllInstructor);
router.get('/single/:instructorid', instructorController.getSingleInstructor)
router.patch('/update/:instructorid', instructorController.updateInstructor)
// router.delete('/delete/:instructorid', instructorController.deleteInstructor)
router.get('/delete_all', instructorController.deleteAllInstructor);

module.exports = router;