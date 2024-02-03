import express from 'express'
import { signup } from '../contollers/auth.controller.js';
import { signin,google } from '../contollers/auth.controller.js';

const router=express();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google)
export default router;