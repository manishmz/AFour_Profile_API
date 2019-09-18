import express from 'express';
import userController from "../controllers/userController";
import { apiVersion } from "../configs/appConfig";

const router = express.Router();
const baseUrl = `/user`;
router.post(`/add`, userController.addUser);
router.get(`/getAll`, userController.getAllUser);

export { baseUrl, router };