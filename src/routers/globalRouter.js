import { handleHome, handleSearch } from "../controllers/videoController";

import { handleJoin, handleLogin } from "../controllers/userController";
const express = require("express");
const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/search", handleSearch);
globalRouter.get("/login", handleLogin);
userRouter.get("/join", handleJoin);
