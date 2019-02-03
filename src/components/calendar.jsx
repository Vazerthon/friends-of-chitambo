import React from 'react';
import { Calendar, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function CalendarWidget() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Calendar date={new Date()} onChange={console.log} />
    </MuiPickersUtilsProvider>
  );
}
