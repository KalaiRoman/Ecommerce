
import express from 'express';
import { createUserNew, LoginUser } from './Auth_controlls.js';
import { create_unknowuser } from './AuthunKnow_controlls.js';
const auth_router = express.Router();
auth_router.post("/register", createUserNew);
auth_router.post("/login", LoginUser);
auth_router.post("/unknow/register", create_unknowuser);

export default auth_router;