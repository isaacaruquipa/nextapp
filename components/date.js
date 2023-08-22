import { isValid, parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (!dateString || !isValid(parseISO(dateString))) {
    return <span>Fecha inválida</span>;
  }

  const date = parseISO(dateString);
  const formattedDate = format(date, 'LLLL d, yyyy');

  return (
    <time dateTime={dateString}>{formattedDate}</time>
  );
}
