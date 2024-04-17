import express from "express";
import { registerUser,loginUser,getProfile } from "../cotrollers/user.controllers.js";
import isLoggedIn from "../MiddleWere/authentication.js";

const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.get("/profile", isLoggedIn,getProfile);

export default routes;
