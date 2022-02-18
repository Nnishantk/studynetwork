const express = require('express');
const router = express.Router()
const { categoryController } = require('../controller');
const {upload_category}= require('../middleware/files.upload')

router.post('/add',upload_category.single("image"),categoryController.addCategory)
router.get('/all', categoryController.getAllCategory)
router.get('/single/:categoryid', categoryController.getSingleCategory)
router.patch('/update/:categoryid', categoryController.updateCategory)
router.delete('/delete/:categoryid', categoryController.deleteCategory)
router.delete('/delete_all', categoryController.deleteAllCategory)

module.exports = router;