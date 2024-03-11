import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling, you can customize it as needed
import carouselData from './carouselData'; // Ensure the path is correct
import './/../app/css/calendar.css';

interface ConcertCalendarProps {
  onSelectDate: (date: Date) => void;
}

const ConcertCalendar: React.FC<ConcertCalendarProps> = ({ onSelectDate }) => {
  // Ensuring the state can hold either a single Date, a range, or a string
  const [value, setValue] = useState<Date | [Date, Date] | string>(new Date());

  const handleChange = (newValue: any, event: React.MouseEvent<HTMLButtonElement> | undefined) => {
    setValue(newValue);
  };

  const findConcertByDate = (date: Date): number | undefined => {
    return carouselData.findIndex(concert =>
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
