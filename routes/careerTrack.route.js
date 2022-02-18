const express = require('express')
const router = express.Router();
const {careerTrackController} = require('../controller');



router.post('/add-blog',careerTrackController.addBlog);
router.get('/getall',careerTrackController.GetAllBlog);
router.get('/single/:blogid', careerTrackController.getSingleBlog);
router.patch('/update/:blogid', careerTrackController.updateBlog);
router.get('/delete-blog/:blogid', careerTrackController.deleteBlog);
router.get('/delete_all', careerTrackController.deleteAllBlog);


module.exports=router;