import { Router } from 'express';
import { createCoupon } from './Coupon_controll.js';

const coupon_router = Router();

coupon_router.post("/create", createCoupon)
export default coupon_router;