/******************************************************************************
 *  @Purpose        : To provide routes to each webpages.
 *  @file           : routes.js
 *  @author         : PRASHANTH S
 *  @version        : v0.1
 *  @since          : 09-02-2019
 ******************************************************************************/
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const noteController= require("../controllers/note.controllers")
middle = require("../authentication/authentication");
// Contact routes
router.post("/login", userController.login);
router.post("/register", userController.registration);
router.post("/forgot", userController.forgotPassword);
router.post("/resetPassword/:token",middle.checkToken,userController.setPassword);
router.post('/createNote', middle.checkTokenAuth, noteController.createNote);
router.get('/getNotes', middle.checkTokenAuth, noteController.getNotes);
// Export API routes
module.exports = router;
