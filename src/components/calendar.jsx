import React from 'react';
import { Calendar as MaterialCalendar } from 'material-ui-pickers';

export default function Calendar() {
  return (
    <MaterialCalendar date={new Date()} onChange={console.log} />
  );
}
