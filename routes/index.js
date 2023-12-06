const express = require('express')
const router = express.Router()

router.get("/", function(req, res) {
    const products = [{ name: "p1", price: 300 }, { name: "p2", price: 1200 }, { name: "p3", price: 200 }]
    res.render("index", { products: products })
})


module.exports = router