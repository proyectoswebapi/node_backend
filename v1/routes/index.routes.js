

const Router = require('express');
const getIndex = require('../../controllers/index.controller.js');

const router = Router();

router.route('/', getIndex);

module.exports = router ;