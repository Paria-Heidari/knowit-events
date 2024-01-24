import { EventList } from '@/components/eventList/eventList';
import { getFilteredEvents } from '@/data/data';
import { useRouter } from 'next/router';

function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...!</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p> No Event found for chosen filter!</p>;
  }

  return (
    <div>
      <EventList eventItem={filteredEvents} />;
    </div>
  );
}

export default FilteredEvents;
