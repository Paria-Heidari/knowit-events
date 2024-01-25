import fs from 'fs/promises';
import path from 'path';
import { EventList } from '@/components/eventList/eventList';
import { EventSearch } from '@/components/eventSearch/eventSearch';
import { useRouter } from 'next/router';

const years = [2021, 2022, 2023, 2024];
const months = [
  { value: 1, label: 'Jan' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },

  // ... other months
];
const buttonText = 'Search';
export const AllEvents = (props: { events: any; }) => {
  const {events} = props;
  // const events = getAllEvents();
  const router = useRouter();
  console.log(events)

  const findEventHandler = (year: any, months: any) => {
    const fullPath = `/events/${year}/${months}`;
  };

  return (
    <div>
      <EventSearch
        years={years}
        months={months}
        buttonText={buttonText}
        onSearch={findEventHandler}
      />
      <EventList eventItem={events} />
    </div>
  );
};

// will pre-render a page at build time using the props
// write server-side code directly in getStaticProps - ex. fetching data
export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    // Specify 'utf-8' encoding to convert Buffer to string
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const events = JSON.parse(jsonData);

    return {
      props: {
        events: events.data,
      },
      // Incremental Static Generation (ISR)
      revalidate: 20
    };
};

export default AllEvents;
