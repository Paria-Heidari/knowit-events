import { EventList } from '@/components/eventList/eventList';
import { getFilteredEvents } from '@/data/data1';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button/button';
import ErrorAlert from '@/components/ui/button/errorAlert';

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
    return (
      <>
        <ErrorAlert>
          <p> No Event found for chosen filter!</p>
        </ErrorAlert>
        <div>
          <Button label='Show All Events' href='/events' />
        </div>
      </>
    );
  }

  return (
    <div>
      <EventList eventItem={filteredEvents} />;
    </div>
  );
}

export default FilteredEvents;
