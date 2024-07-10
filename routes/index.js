const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
const productModel = require("../models//productModel");
const userModel = require("../models/userModel");

router.get('/', (req, res) => {
    let error = req.flash("error");
    res.render("index", { error, loggedin: false });
})

router.get('/shop', isLoggedIn, async (req, res) => {
    let success = req.flash("success")
    let products = await productModel.find();
    res.render("shop", { products, success });
})

router.get('/cart', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate('cart');
    
    const bill=(Number(user.cart[0].price)+20)-Number(user.cart[0].discount)
    
    res.render("cart", {user,bill});
})


router.get('/addtocart/:productid', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });
    user.cart.push(req.params.productid)
    await user.save();
    req.flash("success", "Added to cart");
    res.redirect("/shop");

})



module.exports = router;