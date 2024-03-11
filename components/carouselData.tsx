// carouselData.tsx

interface CarouselDataItem {
    title: string;
    date: string;
    location: string;
    details: string;
    imageUrl: string;
  }

const carouselData = [
    {
      title: 'Título 1',
      date: '2024-03-18T20:00:00.000Z',
      location: 'Localización 1',
      details: 'Orquesta 1',
      imageUrl: '/images/piano.png',
    },
    {
        title: 'Título 2',
        date: 'Fecha y Hora 2',
        location: 'Localización 2',
        details: 'Orquesta 2',
        imageUrl: '/images/violin.jpg',
      },
      {
        title: 'Título 3',
        date: 'Fecha y Hora 3',
        location: 'Localización 3',
        details: 'Orquesta 3',
        imageUrl: '/images/arpa.jpg',
      },
      {
        title: 'Título 4',
        date: 'Fecha y Hora 4',
        location: 'Localización 4',
        details: 'Orquesta 4',
        imageUrl: '/images/cactus.jpg',
      },
      {
        title: 'Título 5',
        date: 'Fecha y Hora 5',
        location: 'Localización 5',
        details: 'Orquesta 5',
        imageUrl: '/images/drums.jpeg',
      },
      {
        title: 'Título 6',
        date: '2024-06-19T20:00:00.000Z',
        location: 'Localización 6',
        details: 'Orquesta 6',
        imageUrl: '/images/orquesta.jpg',
      },
      {
        title: 'Título 7',
        date: '2024-04-08T20:00:00.000Z',
        location: 'Localización 7',
        details: 'Orquesta 7',
        imageUrl: '/images/trumpet.jpg',
      },
      {title: 'Orquesta 1',
      date:'2024-06-17T20:00:00.000Z',
    location: 'Mi Casa',
  details: 'Orgia',
imageUrl: '/images/trumpet.jpg'}
    // ... more items
  ];
  
  export default carouselData;
  