"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("../controllers/event.controller");
const router = express_1.default.Router();
router.get("/", event_controller_1.getEvents);
router.post("/", event_controller_1.createEvent);
router.delete("/:id", event_controller_1.deleteEvent);
router.put("/:id", event_controller_1.archiveEvent);
exports.default = router;
