const express = require('express')
const router = express.Router();
const {getInTouchController} = require('../controller');

router.post('/add',getInTouchController.addGetIntouch);
router.get('/getall',getInTouchController.GetAllIntouch);


module.exports=router;