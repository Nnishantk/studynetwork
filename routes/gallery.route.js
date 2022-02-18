const express = require('express');
const router = express.Router()
const { galleryController } = require('../controller');
const{upload_gallery}=require('../middleware/files.upload');

router.post('/add',upload_gallery.single('file'),galleryController.addGallery)
router.get('/all', galleryController.getAllGallery)
router.get('/single/:galleryid', galleryController.getSingleGallery)
router.patch('/update/:galleryid', galleryController.updateGallery)
router.delete('/delete/:galleryid', galleryController.deleteGallery)
router.delete('/delete_all', galleryController.deleteAllGallery)

module.exports = router;