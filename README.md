Mini Event Scheduler with AI Categorization  

Project Overview  
This is a Mini Event Scheduler application built with React (TypeScript and Tailwind CSS) for the frontend and Node.js (Express and TypeScript) for the backend. Users can create, view, update, delete, and archive events. Events are automatically categorized as Work, Personal, or Other based on keywords in the title or notes, demonstrating a simple AI-like categorization logic.


Features
Add events with Title, Date, Time, and optional Notes.

Automatic event category assignment based on keyword matching.

View all events sorted by date and time ascending.

Delete events.

Archive events (toggle status).

Responsive UI styled with Tailwind CSS.

Backend REST API with Express and TypeScript.

In-memory event storage (no database).

Input validation and error handling.


Tech Stack

| Layer    | Technology                      |
| -------- | ------------------------------- |
| Frontend | React, TypeScript, Tailwind CSS |
| Backend  | Node.js, Express, TypeScript    |
| Styling  | Tailwind CSS                    |
| API      | RESTful API (JSON)              |

Folder Structure
/client     # React frontend
/server     # Express backend

API Endpoints:

| Method | Endpoint      | Description                                 |
| ------ | ------------- | ------------------------------------------- |
| GET    | `/events`     | Get all events (sorted by date and time)    |
| POST   | `/events`     | Create a new event (auto categorizes event) |
| PUT    | `/events/:id` | Archive (mark as archived) an event         |
| DELETE | `/events/:id` | Delete an event by ID                       |

AI Categorization Logic
Events are categorized based on keywords in title and notes fields.

Work: keywords like "meeting", "project", "client", "deadline"

Personal: keywords like "birthday", "family", "party", "anniversary"

Other: if no keyword matches


Contact
For any questions, feel free to contact me. hrhridoyroy503@gmail.com

Thank you for reviewing my Mini Event Scheduler projec