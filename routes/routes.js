const express = require("express");
const router = express.Router();
const products = require("../controllers/controllers_products");


router.get("/miniapi", products.goHome);


router.get('/products/:name?', products.getProducts);
router.get('/create', products.createProduct);
// router.post('/products/create', products.createProduct);

router.put('/products/edit/:name?', products.editProduct);
router.delete('/products/delete/:name', products.deleteProduct);

module.exports = router;