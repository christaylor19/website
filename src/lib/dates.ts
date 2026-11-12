const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const monthYear = (value: string): string => {
  if (value === 'now') return 'now';
  const [year, month] = value.split('-');
  return `${MONTHS.at(Number(month) - 1) ?? ''} ${year}`.trim();
};

export const dateSpan = (from: string, to: string): string =>
  `${monthYear(from)} – ${monthYear(to)}`;
