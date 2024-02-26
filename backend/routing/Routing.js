import express from 'express';
import auth_router from './../controlls/auth/index.js';
import product_router from '../controlls/products/index.js';
const router = express.Router();
// auth
router.use("/auth", auth_router);

// product
router.use("/product", product_router);

export default router;