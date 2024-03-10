import express from 'express';
import auth_router from './../controlls/auth/index.js';
import product_router from '../controlls/products/index.js';
import unknowcart_router from '../controlls/unknowcart/index.js';
import demo_router from '../controlls/demo/index.js';
import image_router from '../controlls/imagecontrolls/index.js';
import coupon_router from '../controlls/couponcontroll/index.js';
const router = express.Router();
// auth
router.use("/auth", auth_router);

// product
router.use("/product", product_router);

// cart
router.use("/cart", unknowcart_router);

// demo

router.use("/demo", demo_router)

// image
router.use("/image", image_router)

// coupom
router.use("/coupon", coupon_router)



export default router;