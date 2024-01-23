import Image from 'next/image';
import { Button } from '../ui/button/button';
import styles from './eventItem.module.css';
import { LocationIcon } from '../icons/locationIcon';
import { CalendarIcon } from '../icons/calendarIcon';
import { ArrowRight } from '../icons/arrowRight';

export interface EventItemProps {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: string;
  time?: string;
  registerLink?: string;
  image: {
    src: string;
    alt: string;
  };
  isFeatured?: boolean;
}

export const EventItem = (props: EventItemProps) => {
  const {
    id,
    title,
    description,
    location,
    date,
    time,
    registerLink,
    image,
    isFeatured,
  } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      {/* <Image
        src={`/${image.src}`}
        alt={image.alt}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      /> */}
      <Image
        src={`/${image.src}`}
        alt={image.alt}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '200px', height: '190px' }}
      />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.dateTime}>
            <span className={styles.icon}>
              <CalendarIcon />
              <time>{formattedDate}</time>
            </span>
          </div>
          <div className={styles.address}>
            <span className={styles.icon}>
              <LocationIcon />
              <address>{location}</address>
            </span>
          </div>
        </div>
        <div className={styles.explore}>
          <Button href={exploreLink} className={styles.btn}>
            <span className={styles.icon}>
              Explore Event <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
