import express from "express";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} from "../controllers/noteController.js";
import { userAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/createNote", createNote);

router.get("/:id", /* userAuth, */ getNoteById);

router.put("/updateNote/:id", updateNote);

router.delete("/deleteNote/:id", deleteNote);

export default router;
