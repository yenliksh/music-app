"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const userController = require('../Controllers/userController');
const { signup, login, read, update, destroy } = userController;
const userAuth = require('../Middleware/userAuth');
const router = express.Router();
router.post('/signup', userAuth.saveUser, signup);
router.post('/login', login);
router.get('/read:id', userAuth.verifyToken, read);
router.post('/update:id', userAuth.verifyToken, update);
router.delete('/destroy:id', userAuth.verifyToken, destroy);
module.exports = router;