import { editUser, deleteUser } from "../controllers/userController";

const express = require("express");
const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export default userRouter;
