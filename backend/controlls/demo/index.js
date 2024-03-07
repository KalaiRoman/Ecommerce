import express from 'express';
import { createDemo, getDemo } from './Demo_controlls.js';

const demo_router = express.Router();

demo_router.post("/create", createDemo)
demo_router.post("/get", getDemo)

export default demo_router;