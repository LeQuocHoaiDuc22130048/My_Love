const express = require('express');
const upload = require('../middleware/upload');
const controller = require('../controller/profileMain.controller');

const router = express.Router();

router.get('/', controller.get);
router.put('/', upload.single('PathImageMain'), controller.update);

module.exports = router;