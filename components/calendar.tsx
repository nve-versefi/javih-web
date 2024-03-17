import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling, you can customize it as needed
import './/../app/css/calendar.css';

interface ConcertCalendarProps {
  onSelectDate: (date: Date) => void;
}

interface CarouselDataItem {
  _id: string;
  title: string;
  date: string;
  location: string;
  details: string;
  imageUrl: string;
}

const ConcertCalendar: React.FC<ConcertCalendarProps> = ({ onSelectDate }) => {
  const [value, setValue] = useState<Date | [Date, Date] | string>(new Date());
  const [concertData, setConcertData] = useState<CarouselDataItem[]>([]);

  useEffect(() => {
    const fetchConcertData = async () => {
      const response = await fetch('/api/conciertos');
      if (response.ok) {
        const data: CarouselDataItem[] = await response.json();
        setConcertData(data);
      }
    };

    fetchConcertData();
  }, []);

  const handleChange = (newValue: any, event: React.MouseEvent<HTMLButtonElement> | undefined) => {
    setValue(newValue);
  };

  const findConcertByDate = (date: Date): number | undefined => {
    return concertData.findIndex(concert =>
      new Date(concert.date).toDateString() === date.toDateString()
    );
  };

  const onDayClick = (date: Date) => {
    const concertIndex = findConcertByDate(date);
    if (concertIndex !== -1) {
      onSelectDate(date);
    }
  };

  return (
    <div className='flex m-8 justify-center'>
      <Calendar
        onChange={handleChange}
        value={value}
        onClickDay={onDayClick}
        tileContent={({ date, view }) => {
          const concertIndex = findConcertByDate(date);
          if (concertIndex !== -1) {
            return null; 
          }
        }}
        tileClassName={({ date, view }) => {
          const concertIndex = findConcertByDate(date);
          return concertIndex !== -1 ? 'highlight' : ''; // Custom class for highlighted dates
        }}
      />
    </div>
  );
};

export default ConcertCalendar;
