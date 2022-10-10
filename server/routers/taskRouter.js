import express from "express";
import taskController from "../controllers/taskController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/createtask", auth, taskController.createTask);
router.get("/gettask", auth, taskController.getTask);

export default router;
