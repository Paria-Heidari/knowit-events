import { EventList } from '@/components/eventList/eventList';
import { Button } from '@/components/ui/button/button';
import ErrorAlert from '@/components/ui/button/errorAlert';
import { getFilteredEvents } from '@/util/actions';

export default function FilteredEvents(props) {
  const { filteredEvents } = props;

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

export const getServerSideProps = async (context: {
  params: { slug: any };
}) => {
  const filterData = context.params.slug;

  if (!filterData) {
    return <p>Loading...!</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  console.log(filteredEvents);

  return {
    props: {
      filteredEvents: filteredEvents,
    },
    // notFound: true
  };
};
