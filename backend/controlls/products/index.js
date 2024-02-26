
import express from 'express';
import { Createproduct } from './Product_controlls.js';
const product_router = express.Router();
product_router.get("/create", Createproduct);

export default product_router;