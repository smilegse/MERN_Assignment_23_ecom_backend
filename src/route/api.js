const express = require('express');
const ProductController=require('../controllers/ProductController')



const router = express.Router();

// Product
router.get('/ProductBrandList',ProductController.ProductListByBrand)

module.exports = router;