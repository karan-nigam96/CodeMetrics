import express from 'express';
import { login, register ,userid} from '../controller/authcontroller.js';
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/userid",userid);

export default router;
