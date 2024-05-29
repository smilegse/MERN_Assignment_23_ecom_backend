const express = require('express');
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController');
const AuthVerification = require('../middlewares/AuthVerification');


const router = express.Router();

// Product
router.get('/ProductBrandList',ProductController.ProductBrandList);
router.get('/ProductCategoryList',ProductController.ProductCategoryList);
router.get('/ProductSliderList',ProductController.ProductSliderList)

router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:CategoryID',ProductController.ProductListBySmilier)
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)

// User
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification,UserController.UserLogout)
router.post('/CreateProfile',AuthVerification,UserController.CreateProfile)
router.post('/UpdateProfile',AuthVerification,UserController.UpdateProfile)
router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)




router.post('/SaveWishList')
router.post('/RemoveWishList')
router.get('/WishList')
router.post('/SaveCartList')
router.post('/RemoveCartList')
router.get('/CartList')

module.exports = router;