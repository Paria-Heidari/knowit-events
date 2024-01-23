import { EventList } from '@/components/eventList/eventList';
import { getAllEvents } from '@/data/data';
import { EventSearch } from '@/components/eventSearch/eventSearch';
import { useRouter } from 'next/router';

const years = [2021, 2022, 2023];
const months = [
  { value: 1, label: 'Jan' },
  { value: 2, label: 'Feb' },
  // ... other months
];
const buttonText = 'Search';
export const AllEvents = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, months)=>{
    const fullPath = `/event/${year}/${months}`;

    router.push(fullPath)

  }

  return (
    <div>
      <EventSearch years={years} months={months} buttonText={buttonText} onSearch={findEventHandler}/>
      <EventList eventItem={events} />
    </div>
  );
};

export default AllEvents;
