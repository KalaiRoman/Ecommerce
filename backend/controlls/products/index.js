
import express from 'express';
import { Createproduct, Getproduct } from './Product_controlls.js';
const product_router = express.Router();
product_router.post("/create", Createproduct);
product_router.get("/all", Getproduct);


export default product_router;