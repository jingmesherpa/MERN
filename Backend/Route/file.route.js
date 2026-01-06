import { Router } from "express";
import { uploadFileController } from "../Controller/file.controller.js";
import { upload } from "../middleware/multer.js";

export const fileRouter = Router();

fileRouter.post("/upload", upload.single("upload"), uploadFileController);
