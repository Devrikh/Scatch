const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const {generateToken}=require("../utils/generateToken")
const {registerUser,loginUser,logout}=require("../controllers/authConroller")


router.get('/', (req, res) => {
    res.send("hey its working");
})

router.post('/register',registerUser);

router.post("/login",loginUser);
router.get("/logout",logout);

module.exports = router;