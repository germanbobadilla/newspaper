function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const diff = endDate.getTime() - beginDate.getTime();
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDays;
}

console.log(calculateDaysBetweenDates('2020-01-01', '2020-01-10'));
// Path: copilot\index.js
// Compare this snippet from main.js:
