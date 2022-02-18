const express = require('express');
const route = express.Router();

route.use('/user',require('./user.route'));
route.use('/courses',require('./courses.route'));
route.use('/category',require('./category.route'));
route.use('/banner',require('./banner.route'));
route.use('/gallery',require('./gallery.route'));
route.use('/instructor',require('./instructor.route'));
route.use('/services',require('./services.route'));
route.use('/get-in-touch',require('./getInTouch.route'));
route.use('/career',require('./careerTrack.route'));
route.use('/training', require('./training.route'));

module.exports = route;