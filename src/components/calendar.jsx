import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Calendar as MaterialCalendar, Day } from 'material-ui-pickers';
import isSameDay from 'date-fns/isSameDay';

const noop = () => {};
const dayOfMonth = date => format(date, 'd');
const renderDayWithEvents = events => (day, _, isDayInCurrentMonth) => {
  const event = events.find(e => isSameDay(e.date, day));
  return (
    <Day
      disabled={!event}
      hidden={!isDayInCurrentMonth}
      selected={event}
      onClick={event ? event.onClick : () => {}}
    >
      {dayOfMonth(day)}
    </Day>
  );
};

export default function Calendar({ events }) {
  return (
    <MaterialCalendar
      date={new Date()}
      onChange={noop}
      renderDay={renderDayWithEvents(events)}
    />
  );
}

Calendar.propTypes = {
  events: PropTypes.arrayOf({
    date: PropTypes.instanceOf(Date),
    onClick: PropTypes.func,
  }).isRequired,
};
