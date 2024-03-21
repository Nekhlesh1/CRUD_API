const express = require('express');
const { getUser, createUser, updateUserName } = require('../controller/user.Controller');
const router = express.Router();

router.get('/getUser',getUser)
router.post('/create',createUser)
router.post('/update', updateUserName)











module.exports =router;