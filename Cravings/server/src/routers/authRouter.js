import express from 'express'
import { UserLogin,UserRegister,UserLogout } from '../controllers/authControllers.js';
const router = express.Router();


router.post("/register",UserRegister);
router.post("/login",UserLogin);
router.get("/logout",UserLogout);

export default router;
