import express from "express";
import { getUsers, getLogin, addUser } from "../controller/user.js";

const router = express.Router();

router.get('/', getUsers);

router.get('/auth', getLogin);

router.post('/', addUser);

export default router;