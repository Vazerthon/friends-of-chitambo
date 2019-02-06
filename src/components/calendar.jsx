import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Calendar as MaterialCalendar, Day } from 'material-ui-pickers';

import { formatDayOfMonth, isSameDay } from '../helpers/date';

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
      selected={event}
      onClick={event ? event.onClick : () => {}}
    >
      {formatDayOfMonth(day)}
    </Day>
  );
};

export default function Calendar({ events }) {
  return (
    <Center>
      <div>
        <MaterialCalendar
          date={new Date()}
          onChange={noop}
          renderDay={renderDayWithEvents(events)}
        />
      </div>
    </Center>
  );
}

Calendar.propTypes = {
  events: PropTypes.arrayOf({
    date: PropTypes.instanceOf(Date),
    onClick: PropTypes.func,
  }).isRequired,
};
