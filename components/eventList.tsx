import { EventItem, EventItemProps } from './eventItem';

interface EventListProps {
  eventItem: EventItemProps[];
}

export const EventList = (props: EventListProps) => {
  return (
    <div>
      <ul>
        {props.eventItem.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            time={event.time}
            image={event.image}
            registerLink={event.registerLink}
          />
        ))}
      </ul>
    </div>
  );
};
