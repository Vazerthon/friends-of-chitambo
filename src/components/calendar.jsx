import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Calendar as MaterialCalendar, Day } from '@material-ui/pickers';

import { formatDayOfMonth, isSameDay } from '../helpers/date';

MaterialCalendar.displayName = 'MaterialCalendar';

const noop = () => {};

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const renderDayWithEvents = events => (day, _, isDayInCurrentMonth) => {
  const event = events.find(e => isSameDay(e.date, day));
  return (
    <Day
      disabled={!event}
      hidden={!isDayInCurrentMonth}
      selected={!!event}
      onClick={event ? event.onClick : () => {}}
    >
      {formatDayOfMonth(day)}
    </Day>
  );
};

export default function Calendar({ today, events }) {
  const eventDates = events.map(({ date }) => new Date(date));
  const maxEventDate = Math.max(...eventDates);
  const minEventDate = Math.min(...eventDates);

  return (
    <Center>
      <div>
        <MaterialCalendar
          date={today}
          onChange={noop}
          renderDay={renderDayWithEvents(events)}
          minDate={minEventDate}
          maxDate={maxEventDate}
        />
      </div>
    </Center>
  );
}

Calendar.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    onClick: PropTypes.func,
  })).isRequired,
};
