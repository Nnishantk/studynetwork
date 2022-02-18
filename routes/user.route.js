const express = require('express')
const router = express.Router();
const {userController} = require('../controller');
const{upload_profileImage}=require('../middleware/files.upload');

router.post('/register',upload_profileImage.single('image'),userController.register);
router.post('/login',userController.login);
router.get('/alluser',userController.getAllUser)

module.exports=router;