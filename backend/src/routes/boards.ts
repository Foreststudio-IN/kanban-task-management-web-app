import express from "express";
import * as BoardsController from "../controllers/boards";

const router = express.Router();

router.get("/", BoardsController.getBoards);

router.post("/", BoardsController.createBoard);

router.put("/:boardId", BoardsController.updateBoard);

export default router;