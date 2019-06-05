import React from 'react';
import { mount } from 'enzyme';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Calendar from './calendar';

describe('Calendar', () => {
  it('should render an enabled Day component for each event in the current month', () => {
    const component = mount((
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calendar
          today={new Date(2019, 2, 12)}
          events={[
            { date: '2019-03-10T15:39:24.197Z', onClick: () => {} },
            { date: '2019-03-20T15:39:24.197Z', onClick: () => {} },
            { date: '2019-04-12T15:39:24.197Z', onClick: () => {} }, // not in month
            { date: '2019-05-02T15:39:24.197Z', onClick: () => {} }, // not in month
          ]}
        />
      </MuiPickersUtilsProvider>
    ));

    const visibleDays = component.find('Day')
      .map(d => d.props().disabled)
      .filter(disabled => disabled === false);

    expect(visibleDays.length).toBe(2);
  });

  it('should format the day of the month corretly', () => {
    const component = mount((
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calendar
          today={new Date(2019, 2, 12)}
          events={[
            { date: '2019-03-03T15:39:24.197Z', onClick: () => {} },
            { date: '2019-03-10T15:39:24.197Z', onClick: () => {} },
          ]}
        />
      </MuiPickersUtilsProvider>
    ));

    const [third, tenth] = component.find('Day')
      .map(d => [d.props().disabled, d.props().children])
      .filter(([disabled]) => disabled === false)
      .map(([, children]) => children);

    expect(third).toBe('3');
    expect(tenth).toBe('10');
  });

  it('should handle day clicks correctly', () => {
    const onClick = jest.fn();

    const component = mount((
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calendar
          today={new Date(2019, 2, 12)}
          events={[
            { date: '2019-03-03T15:39:24.197Z', onClick },
          ]}
        />
      </MuiPickersUtilsProvider>
    ));

    const day = component.find('Day').at(7);

    day.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
