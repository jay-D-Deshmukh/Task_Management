import { Router } from "express";

import isLoggedIn from "../MiddleWere/authentication.js";
import authorizationRole from "../MiddleWere/authorizationRoles.js";
import { createTask, getTask } from "../cotrollers/task.controllers.js";

const router = Router();

router.post("/", isLoggedIn, authorizationRole("ADMIN"), createTask);
  
router.get("/list", getTask);

export default router;
