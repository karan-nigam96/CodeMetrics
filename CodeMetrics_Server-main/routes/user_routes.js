import express from 'express';
import { add, remove, fetchusernames } from '../controller/user_controller.js';

const router = express.Router();

router.post("/add", add);
router.post("/remove", remove);
router.get("/fetchusernames", fetchusernames);

export default router;
