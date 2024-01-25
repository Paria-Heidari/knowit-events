export const data = [
  {
    id: 'e1',
    title: 'KXO: Kino',
    description: 'Vil du være med på Vega Scene og se filmen',
    location: ' Vega Scene - Hausmannsgate 28',
    date: '2022-04-20',
    time: '18:45',
    registerLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdacl1s2dtjMM-Vqvkkp40V0qDZvoQ8Aeorc9Rdee-7yIGPtQ/viewform?pli=1',
    image: {
      src: 'images/event1.jpg',
      alt: 'event1',
    },
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'KXO: After work & Bordtennis ',
    description:
      'Vi inviterer dere alle til å bli med på en fantastisk kveld med moro, latter og sportslig konkurranse! Den 9. februar arrangerer vi en eksklusiv afterwork-event kombinert med en spennende bordtennisturnering som vil sette dine ferdigheter på prøve. Det blir to klasser med forskjellige nivåer, så meld deg på uansett om du skal være med å spille, eller bare for det sosiale ',
    location: 'Arena',
    date: '2024-02-09',
    time: '16:00',
    registerLink: 'https://forms.gle/JuJx3m1MTXS4Hez4A',
    image: {
      src: 'images/event2.jpg',
      alt: 'event2',
    },
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: {
      src: 'images/event3.jpg',
      alt: 'event3',
    },
    isFeatured: false,
  },
];

export function getAllEvents() {
  return data;
}

export function getFeaturedEvents() {
  return data.filter((event) => event.isFeatured);
}

export function getEventById(id: any) {
  return data.find((event) => event.id === id);
}

export function getFilteredEvents(filterData) {
  const { year, month } = filterData;

  const FilteredData = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return FilteredData;
}
