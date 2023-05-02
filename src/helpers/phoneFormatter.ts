export function formatPhone(value: string) {
  const onlyNumbers = value.replace(/[^\d]/g, '');

  if (onlyNumbers.length <= 2) {
    return `(${onlyNumbers}`;
  }

  if (onlyNumbers.length <= 7) {
    const ddd = onlyNumbers.slice(0, 2);
    const firstPart = onlyNumbers.slice(2, 7);

    return `(${ddd}) ${firstPart}`;
  }

  if (onlyNumbers.length <= 10) {
    const ddd = onlyNumbers.slice(0, 2);
    const firstPart = onlyNumbers.slice(2, 6);
    const secondPart = onlyNumbers.slice(6, 10);

    return `(${ddd}) ${firstPart}-${secondPart}`;
  }

  const ddd = onlyNumbers.slice(0, 2);
  const firstPart = onlyNumbers.slice(2, 7);
  const secondPart = onlyNumbers.slice(7, 11);

  return `(${ddd}) ${firstPart}-${secondPart}`;
}
