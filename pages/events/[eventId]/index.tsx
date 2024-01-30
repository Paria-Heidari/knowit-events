import { getData } from '@/util/actions';
import ErrorAlert from '@/components/ui/button/errorAlert';
import { getEventById } from '@/data/data1';
import Head from 'next/head';

function EventDetail(props) {
  const event = props.event;

  if (!event) {
    return (
      <div>
        <p>Loading...!</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <p>{event.title}</p>
      <p>{`Event Details page ${event.id}`}</p>
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
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
      eventId: eventId,
    },
    revalidate: 30,
  };
};

export default EventDetail;
