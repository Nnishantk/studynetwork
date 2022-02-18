const express = require('express');
const router = express.Router()
const { bannerController } = require('../controller');
const {upload_banner}= require('../middleware/files.upload')

router.post('/add',upload_banner.single('file'),bannerController.addBanner)
router.get('/all', bannerController.getAllBanner)
router.get('/single/:bannerid', bannerController.getSingleBanner)
router.patch('/update/:bannerid',upload_banner.single('file'), bannerController.updateBanner)
router.delete('/delete/:bannerid', bannerController.deleteBanner)
router.delete('/delete_all', bannerController.deleteAllBanner)

module.exports = router;