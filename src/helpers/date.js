import format from 'date-fns/format';
import dateFnsIsSameDay from 'date-fns/isSameDay';
import parseIso from 'date-fns/parseISO';

export const formatFullDate = dateString => format(parseIso(dateString), 'do MMMM yyyy', { awareOfUnicodeTokens: true });

export const formatDayOfMonth = dateString => format(parseIso(dateString), 'd');

export const isSameDay = (d1, d2) => dateFnsIsSameDay(parseIso(d1), parseIso(d2));
