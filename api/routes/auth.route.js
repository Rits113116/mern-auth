import express from 'express'
import { signup } from '../contollers/auth.controller.js';
import { signin } from '../contollers/auth.controller.js';

const router=express();

router.post("/signup",signup)
router.post("/signin",signin)
export default router;