const express = require("express");
const router = express.Router();
const { studentCtrl } = require('../controllers/studentCtrl')


router.post('/student', studentCtrl)



module.exports = router;