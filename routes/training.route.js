const express = require("express");
const router = express.Router();
const {trainingController}= require('../controller')

router.post('/add-traing',trainingController.addTrainingSchduled);
router.get('/get-all-traingschudeled',trainingController.GetAllTrainingSchduled);
router.get('/get-single-traingschudeled/:trainingid', trainingController.getSingleTrainingSchduled);
router.patch('/update-traingschudeled/:trainingid', trainingController.updateTrainingSchduled);
router.get('/delete-traingschudeled/:trainingid', trainingController.deleteTrainingSchduled);
router.get('/delete_all_traing_schedule', trainingController.deleteAllTrainingSchduled);

module.exports= router