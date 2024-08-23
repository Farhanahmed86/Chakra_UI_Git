const express = require('express');
const {   Send_email } = require('../Controllers/User_Controller');
 
const router = express.Router();

router.post('/email', Send_email);
 

module.exports = router; 
