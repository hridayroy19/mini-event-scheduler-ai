import express from "express";
import { archiveEvent, createEvent, deleteEvent, getEvents } from "../controllers/event.controller";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", archiveEvent);

export default router;
