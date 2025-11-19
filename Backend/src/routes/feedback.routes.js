const express = require('express');
const controller = require('../controller/feedback.controller');

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.delete('/:id', controller.delete);

module.exports = router;
