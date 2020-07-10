import format from 'date-fns/format';
import parseIso from 'date-fns/parseISO';

// eslint-disable-next-line import/prefer-default-export
export const formatFullDate = dateString => format(parseIso(dateString), 'do MMMM yyyy', { awareOfUnicodeTokens: true });
