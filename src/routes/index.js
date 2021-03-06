const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');


/* GET home page. */
router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.get('/:slug', controller.getBySlug);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);


module.exports = router;
