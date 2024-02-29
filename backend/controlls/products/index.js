
import express from 'express';
import { CommentUpdateproduct, Commentproduct, Createproduct, Getproduct, LikeUpdateproduct, Likeproduct } from './Product_controlls.js';
const product_router = express.Router();
product_router.post("/create", Createproduct);
product_router.get("/all", Getproduct);
product_router.put("/like", Likeproduct);
product_router.put("/like/update", LikeUpdateproduct);
product_router.put("/rate", Commentproduct);
product_router.put("/rate/update", CommentUpdateproduct);


export default product_router;