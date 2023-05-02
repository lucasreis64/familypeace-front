export function formatDate(string: string) {
  if(!string)
    return '';
  const date = new Date(string);
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  const formattedDate = `${utcDate.getUTCFullYear()}-${(utcDate.getUTCMonth() + 1).toString().padStart(2, '0')}-${utcDate.getUTCDate().toString().padStart(2, '0')}`;

  return formattedDate;
}
