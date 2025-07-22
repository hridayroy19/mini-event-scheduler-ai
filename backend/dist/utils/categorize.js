"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorizeEvent = categorizeEvent;
function categorizeEvent(title, notes) {
    const workKeywords = ["meeting", "client", "project"];
    const personalKeywords = ["birthday", "family", "party"];
    const combined = (title + " " + (notes || "")).toLowerCase();
    if (workKeywords.some((word) => combined.includes(word)))
        return "Work";
    if (personalKeywords.some((word) => combined.includes(word)))
        return "Personal";
    return "Other";
}
