import { Request, Response } from "express";
import { randomUUID } from "crypto";
import { events, EventType } from "../models/event.model";
import { categorizeEvent } from "../utils/categorize";

export const getEvents = (req: Request, res: Response) => {
  const sorted = events.sort(
    (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
  );
  res.json(sorted);
};

export const createEvent = (req: Request, res: Response) => {
  const { title, date, time, notes } = req.body;

  if (!title || !date || !time) {
    return res.status(400).json({ message: "Title, date, and time are required" });
  }

  const category = categorizeEvent(title, notes);

  const newEvent: EventType = {
    id: randomUUID(),
    title,
    date,
    time,
    notes,
    category,
    archived: false,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};

export const deleteEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = events.findIndex((e) => e.id === id);

  if (index === -1) return res.status(404).json({ message: "Event not found" });

  events.splice(index, 1);
  res.status(200).json({ message: "Deleted successfully" });
};

export const archiveEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  const event = events.find((e) => e.id === id);

  if (!event) return res.status(404).json({ message: "Event not found" });

  event.archived = true;
  res.status(200).json(event);
};
