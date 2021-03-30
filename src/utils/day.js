import dayjs from 'dayjs';

export function convertIOS(date) {
  const dateFormated = dayjs(date).format('DD-MM-YYYY HH:mm:ss');
  return dateFormated;
}
