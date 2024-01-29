import { Inter } from 'next/font/google'
import { getFeaturedEvents } from '@/data/data1';
import { EventList } from '@/components/eventList/eventList';
import { EventItemProps } from '@/components/eventItem/eventItem';
 

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  return (
    <>
     <EventList eventItem={props.allFeaturedEvents} />
    </>
  )
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return{
    props:{
      allFeaturedEvents: featuredEvents
    }
  }
  
}
