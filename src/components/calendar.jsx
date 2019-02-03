import React from 'react';
import format from 'date-fns/format';
import { Calendar as MaterialCalendar, Day } from 'material-ui-pickers';

const events = [
  new Date('4th Feb 2019'),
  new Date('20th Feb 2019'),
  new Date('8th Feb 2019'),
  new Date('14th Feb 2019'),
];

const noop = () => {};
const dayOfMonth = date => format(date, 'd');
const renderDay = (day, _, isDayInCurrentMonth) => (
  <Day
    disabled={false}
    current={false}
    hidden={!isDayInCurrentMonth}
    selected={false}
  >
    {dayOfMonth(day)}
  </Day>
);

export default function Calendar() {
  return (
    <MaterialCalendar
      date={new Date()}
      onChange={noop}
      renderDay={renderDay}
    />
  );
}
