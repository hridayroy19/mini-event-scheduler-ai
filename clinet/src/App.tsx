import { useEffect, useState } from "react";
import type { EventType } from "./types/event";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

const App = () => {
  const [events, setEvents] = useState<EventType[]>([]);

  const loadEvents = async () => {
    const res = await fetch("http://localhost:5000/events");
    const data = await res.json();
    setEvents(data);
  };

  const handleAddEvent = async (
    newEvent: Omit<EventType, "id" | "category" | "archived">
  ) => {
    const res = await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    const data = await res.json();
    setEvents((prev) => [...prev, data]);
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/events/${id}`, { method: "DELETE" });
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const handleArchive = async (id: string) => {
    await fetch(`http://localhost:5000/events/${id}`, { method: "PUT" });
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, archived: true } : event
      )
    );
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="min-h-screen lg:w-[1200px] lg:px-4 md:px-3 mx-auto mt-10 mb-10 bg-gray-100 p-4">
      <div>
        <p> Templetes </p>
        <h1 className="text-4xl text-gray-800  font-extrabold mt-2 00 mb-4">
          Mini Event Scheduler
        </h1>
      </div>

      <section>
        <EventForm onAddEvent={handleAddEvent} />
      </section>

      <section className="mt-6">
        <h2 className="text-xl mb-7 font-semibold ">Upcoming Events...</h2>
        <EventList
          events={events}
          onDelete={handleDelete}
          onArchive={handleArchive}
        />
      </section>
    </div>
  );
};

export default App;
