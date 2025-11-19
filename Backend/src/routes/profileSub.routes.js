const express = require('express');
const upload = require('../middleware/upload');
const controller = require('../controller/profileSub.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', upload.single('PathImage'), controller.create);
router.put('/:id', upload.single('PathImage'), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
