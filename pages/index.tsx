import { Inter } from 'next/font/google'
import { getFeaturedEvents } from '@/data/data1';
import { EventList } from '@/components/eventList/eventList';
import Head from 'next/head';
 

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  return (
    <>
    <Head>
      <title>KnowiEvents</title>
      <meta name='description' content='Find Knowit events'/>
    </Head>
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
