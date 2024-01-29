import { useRouter } from 'next/router';
import { getData } from '@/util/actions';

function EventDetail() {
  const router = useRouter();
  const eventId = router.query.eventId;

  return (
    <>
      <p>{`Event Details page ${eventId}`}</p>
    </>
  );
}

export const getStaticPaths = async () => {
  // if we need to pre generated for all the dynamic paths from the data source
  const events = await getData();
  const paths = events.data.map((event: { id: any }) => ({
    params: { eventId: event.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const eventId = params.eventId;
  const events = await getData();
  const event = events.data.find((event: { id: any }) => event.id === eventId);

  return {
    props: {
      event: event,
    },
  };
};

export default EventDetail;
