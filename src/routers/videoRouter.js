import {
  uploadVideo,
  watchVideo,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";

const express = require("express");
const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id", watchVideo);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);

export default vidieoRouter;
