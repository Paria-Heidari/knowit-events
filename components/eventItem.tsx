import Image from 'next/image';
import { EventList } from './eventList';
import Link from 'next/link';

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

  const formattedDate = new Date(date).toLocaleDateString('en-US',{
    day:'numeric',
    month:'long',
    year: 'numeric',
  });

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <Image src={`/${image.src}`}  alt={image.alt} fill />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
};
