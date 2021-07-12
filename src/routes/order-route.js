const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

router.get('/list', controller.get);
router.post('/', controller.post);

module.exports = router;