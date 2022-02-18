const express = require('express');
const router = express.Router()
const { servicesController } = require('../controller');
const{upload_services}=require('../middleware/files.upload');

router.post('/add',upload_services.single('image'),servicesController.addServices)
router.get('/all', servicesController.getAllServices)
router.get('/single/:servicesid', servicesController.getSingleServices)
router.patch('/update/:servicesid', servicesController.updateServices)
router.delete('/delete/:servicesid', servicesController.deleteServices)
router.delete('/delete_all', servicesController.deleteAllServices)

module.exports = router;