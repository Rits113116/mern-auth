import express from 'express'
import { signin, signup, google, signout } from '../contollers/auth.controller.js';

const router=express();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google)
router.get('/signout', signout);
export default router;