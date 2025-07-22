import type { EventType } from "../types/event";

interface Props {
  event: EventType;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
}

const EventItem = ({ event, onDelete, onArchive }: Props) => {
  return (
    <div
      className={`p-4 bg-white w-[360px]  rounded shadow-lg border-l-4 ${
        event.category === "Work"
          ? "border-blue-500"
          : event.category === "Personal"
          ? "border-green-500"
          : "border-yellow-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          {event.title}{" "}
          {event.archived && (
            <span className="text-sm text-gray-500">(Archived)</span>
          )}
        </h3>
        <span className="text-sm text-gray-600 font-bold">
          {event.category}
        </span>
      </div>
      <p className="text-sm mt-2 text-gray-700">
        📅 {event.date} | 🕒 {event.time}
      </p>
      {event.notes && <p className="text-sm mt-3">{event.notes}</p>}

      <div className="mt-5 flex gap-2">
        <button
          className="text-sm px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </button>
        {!event.archived && (
          <button
            className="text-sm px-3 py-1 bg-gray-600 text-white rounded-full hover:bg-gray-700"
            onClick={() => onArchive(event.id)}
          >
            Archive
          </button>
        )}
      </div>
    </div>
  );
};

export default EventItem;
