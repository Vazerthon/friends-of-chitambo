import format from 'date-fns/format';
import dateFnsIsSameDay from 'date-fns/isSameDay';

export const formatFullDate = date => format(date, 'do MMMM YYYY');

export const formatDayOfMonth = date => format(date, 'd');

export const isSameDay = dateFnsIsSameDay;
