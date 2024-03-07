
import express from 'express';
import { CommentUpdateproduct, favortProduct, Commentproduct, Createproduct, Getproduct, LikeUpdateproduct, Likeproduct, TopProducts } from './Product_controlls.js';
const product_router = express.Router();
product_router.post("/create", Createproduct);
product_router.get("/all", Getproduct);
product_router.put("/like", Likeproduct);
product_router.put("/like/update", LikeUpdateproduct);
product_router.put("/rate", Commentproduct);
product_router.put("/rate/update", CommentUpdateproduct);
product_router.post("/top", TopProducts);
product_router.put("/fav", favortProduct);






export default product_router;