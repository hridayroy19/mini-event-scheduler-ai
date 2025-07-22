import type { EventType } from "../types/event";
import EventItem from "./EventItem";

interface Props {
  events: EventType[];
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
}

const EventList = ({ events, onDelete, onArchive }: Props) => {
  return (
    <div className="  ">
      <div className="space-y-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
        {events.length === 0 ? (
          <p className="text-gray-600">No events found.</p>
        ) : (
          events
            .sort(
              (a, b) =>
                a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
            )
            .map((event) => (
              <EventItem
                key={event.id}
                event={event}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default EventList;
