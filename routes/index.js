'use strict'

const express = require('express');
const router = express.Router();
const homeCtl = new (require('../controllers/homeController'))();
const readFileCtl = new (require('../controllers/ReadFileController'))();

router.get('/', homeCtl.printHello);
router.get('/read', readFileCtl.read);

module.exports = router;
