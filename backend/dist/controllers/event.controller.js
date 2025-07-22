"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.archiveEvent = exports.deleteEvent = exports.createEvent = exports.getEvents = void 0;
const crypto_1 = require("crypto");
const event_model_1 = require("../models/event.model");
const categorize_1 = require("../utils/categorize");
const getEvents = (req, res) => {
    const sorted = event_model_1.events.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    res.json(sorted);
};
exports.getEvents = getEvents;
const createEvent = (req, res) => {
    const { title, date, time, notes } = req.body;
    if (!title || !date || !time) {
        return res.status(400).json({ message: "Title, date, and time are required" });
    }
    const category = (0, categorize_1.categorizeEvent)(title, notes);
    const newEvent = {
        id: (0, crypto_1.randomUUID)(),
        title,
        date,
        time,
        notes,
        category,
        archived: false,
    };
    event_model_1.events.push(newEvent);
    res.status(201).json(newEvent);
};
exports.createEvent = createEvent;
const deleteEvent = (req, res) => {
    const { id } = req.params;
    const index = event_model_1.events.findIndex((e) => e.id === id);
    if (index === -1)
        return res.status(404).json({ message: "Event not found" });
    event_model_1.events.splice(index, 1);
    res.status(200).json({ message: "Deleted successfully" });
};
exports.deleteEvent = deleteEvent;
const archiveEvent = (req, res) => {
    const { id } = req.params;
    const event = event_model_1.events.find((e) => e.id === id);
    if (!event)
        return res.status(404).json({ message: "Event not found" });
    event.archived = true;
    res.status(200).json(event);
};
exports.archiveEvent = archiveEvent;
