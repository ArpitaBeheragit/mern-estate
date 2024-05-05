import express from 'express';
import { getProfile, google, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();
router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google',google)
router.get('/profile',getProfile)
export default router;