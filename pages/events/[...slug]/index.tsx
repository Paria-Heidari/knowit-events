import { EventList } from '@/components/eventList/eventList';
import { Button } from '@/components/ui/button/button';
import ErrorAlert from '@/components/ui/button/errorAlert';
import { getFilteredEvents } from '@/util/actions';
import { years } from '../index';
 

export default function FilteredEvents(props: { filteredEvents: any; }) {
  const {filteredEvents} = props;

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

export const getStaticPaths =async () => {
  if(years){
    const allYears= years;
    const paths: { params: { slug: string[]; }; }[] = [];

    allYears.forEach((year) => {
      for (let month = 1; month <= 12; month++) {
        paths.push({ params: { slug: [year.toString(), month.toString()] } });
      }
    });

    return{
      paths,
      fallback:true
    }
  }
}


export const getStaticProps = async (context: { params: { slug: any; }; }) => {
  const filterData = context.params.slug

  if (!filterData) {
    return <p>Loading...!</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return{
    props:{
      filteredEvents: filteredEvents
    }
  }

  
}

