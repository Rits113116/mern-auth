import express from 'express'
import { signup } from '../contollers/auth.controller.js';

const router=express();

router.post("/signup",signup)

export default router;