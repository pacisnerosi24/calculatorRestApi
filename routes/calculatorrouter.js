const express = require('express');
const router = express.Router();

const{
    addOperation,
    subtractOperation,
    multiplyOperation,
} = require('../controllers/calculatorController');

router.get('/add', addOperation);
router.get('/subtract', subtractOperation);
router.get('/multiply', multiplyOperation);

module.exports = router;