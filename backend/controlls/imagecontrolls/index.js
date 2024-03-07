
import express from 'express';
import { imageCreate, imageFind } from './imageControlls.js';
const image_router = express.Router();
image_router.post("/create", imageCreate);
image_router.post("/get", imageFind);


export default image_router;