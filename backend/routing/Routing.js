import express from 'express';
import auth_router from './../controlls/auth/index.js';
const router = express.Router();
// auth
router.use("/auth", auth_router);
export default router;