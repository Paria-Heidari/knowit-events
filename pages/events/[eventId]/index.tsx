import { getEventById } from '@/data/data';
import { useRouter } from 'next/router';
import React from 'react';

function EventDetail() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  return <>Event Details page</>;
}

export default EventDetail;