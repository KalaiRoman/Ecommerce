import express from 'express';
import auth_router from './../controlls/auth/index.js';
import product_router from '../controlls/products/index.js';
import unknowcart_router from '../controlls/unknowcart/index.js';
const router = express.Router();
// auth
router.use("/auth", auth_router);

// product
router.use("/product", product_router);

// cart
router.use("/cart", unknowcart_router);


export default router;