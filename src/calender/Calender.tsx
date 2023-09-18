import React from 'react';
import Cell from './Cell';
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from 'date-fns';

const daysofweek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

interface CalendarProps {
  value?: Date;
  onChange?: (value: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  value = new Date(),
  onChange,
}) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixdays = startDate.getDay();
  const suffixdays = 6 - endDate.getDay();

  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(add(value, { months: 1 }));
  const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange && onChange(add(value, { years: 1 }));

  const handleclick = (index: number) => {
    const date = setDate(value, index);
    onChange && onChange(date);
  };
  return (
    <div className="w-[400px] border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell onClick={prevYear}>{'<<'}</Cell>
        <Cell onClick={prevMonth}> {'<'}</Cell>
        <Cell className="col-span-3">{format(value, 'MMMM yyyy')}</Cell>
        <Cell onClick={nextMonth}>{'>'}</Cell>
        <Cell onClick={nextYear}>{'>>'}</Cell>
        {daysofweek.map((day) => (
          <Cell key={day} className="text-sm font-bold uppercase">
            {day}
          </Cell>
        ))}

        {Array.from({ length: prefixdays }).map((_, index) => (
          <Cell key={index} children={undefined} />
        ))}
        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const iscurrentdate = date === value.getDate();

          return (
            <Cell
              isActive={iscurrentdate}
              onClick={() => handleclick(date)}
              key={date}
            >
              {date}
            </Cell>
          );
        })}
        {Array.from({ length: suffixdays }).map((_, index) => (
          <Cell key={index} children={undefined} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
