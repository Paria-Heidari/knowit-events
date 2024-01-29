import fs from 'fs/promises';
import path from 'path';

export const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const events = JSON.parse(jsonData);
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getData();

  const featuredData = allEvents.filter((event: { isFeatured: boolean }) => {
    event.isFeatured;
  });

  return featuredData;
};

export const getFilteredEvents = async (filterData) => {
  const { year, month } = filterData;
  
  const events = await getData();

  const filteredEvents = events.data.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
