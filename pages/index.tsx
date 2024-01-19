import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getFeaturedEvents } from '@/data/data';
import { EventList } from '@/components/eventList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const allFeaturedEvents = getFeaturedEvents();

  console.log(allFeaturedEvents);
  return (
    <>
     <EventList eventItem={allFeaturedEvents} />
    </>
  )
}
