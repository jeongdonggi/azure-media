"use strict"

const express = require("express");
const router = express.Router();
var fs = require('fs')
const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.hello)
router.get('/login', ctrl.output.login)
router.get('/video1', ctrl.output.video1)
router.get('/video2', ctrl.output.video2)
router.get('/video3', ctrl.output.video3)
router.get('/menu', ctrl.output.menu)
router.post("/login", ctrl.process.login)

module.exports = router