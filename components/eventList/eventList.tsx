import { EventItem, EventItemProps } from '../eventItem/eventItem';
import styles from './eventList.module.css';

interface EventListProps {
  eventItem: EventItemProps[];
}

export const EventList = (props: EventListProps) => {

  return (
      <ul className={styles.list}>
        {props.eventItem.map(event => (
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
  );
};
