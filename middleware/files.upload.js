const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/courses/video')
    },
    filename: function (req, file, cb) {
        cb(null, 'video' + '-' + Date.now() + path.extname(file.originalname))
    }
})

var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/courses')
    },
    filename: function (req, file, cb) {
        cb(null, 'courses' + '-' + Date.now() + path.extname(file.originalname))
    }
})

var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/profileimage')
    },
    filename: function (req, file, cb) {
        cb(null, 'dp' + '-' + Date.now() + path.extname(file.originalname))
    }
})

var storage3 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/gallery')
    },
    filename: function (req, file, cb) {
        cb(null, 'gallery' + '-' + Date.now() + path.extname(file.originalname))
    }
})
var storage4 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/banner')
    },
    filename: function (req, file, cb) {
        cb(null, 'banner' + '-' + Date.now() + path.extname(file.originalname))
    }
})
var storage5 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/image')
    },
    filename: function (req, file, cb) {
        cb(null, 'services' + '-' + Date.now() + path.extname(file.originalname))
    }
})

var storage6 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/category')
    },
    filename: function (req, file, cb) {
        cb(null, 'category' + '-' + Date.now() + path.extname(file.originalname))
    }
})



module.exports = {
    upload_courseImage: multer({ storage: storage }),
    upload_coursesVideo: multer({ storage: storage1 }),
    upload_profileImage: multer({ storage: storage2 }),
    upload_gallery: multer({ storage: storage3 }),
    upload_banner:multer({storage:storage4}),
    upload_services:multer({storage:storage5}),
    upload_category:multer({storage:storage6}),
   
   

}