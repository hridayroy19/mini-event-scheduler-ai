import { useState } from "react";
import type { EventType } from "../types/event";

interface EventFormProps {
  onAddEvent: (event: Omit<EventType, "id" | "category" | "archived">) => void;
}

const EventForm = ({ onAddEvent }: EventFormProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !date || !time) {
      alert("Title, Date, and Time are required!");
      return;
    }

    onAddEvent({ title, date, time, notes });
    setTitle("");
    setDate("");
    setTime("");
    setNotes("");
    setShowModal(false);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="search"
          className="w-full max-w-lg py-2  px-3 border rounded-3xl"
          placeholder="Search"
        />
        <button
          onClick={() => setShowModal(true)}
          className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create
        </button>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center ">
          <div className=" bg-gray-300  w-full max-w-md p-6 rounded-lg shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-red-700 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            {/* Modal Form */}
            <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
            <form onSubmit={handleSubmit} className="space-y-3 bg-amber-50">
              <input
                type="text"
                placeholder="Title"
                className="w-full border p-2 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="date"
                className="w-full border p-2 rounded"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                type="time"
                className="w-full border p-2 rounded"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <textarea
                placeholder="Notes (optional)"
                className="w-full border p-2 rounded"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventForm;
