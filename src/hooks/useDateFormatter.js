function formatDateWithSuffix(date) {
  const options = { month: 'long', day: 'numeric' };
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);

  // Add the "th", "st", "nd", or "rd" suffix
  const suffix =
    day >= 11 && day <= 13
      ? 'th'
      : day % 10 === 1
      ? 'st'
      : day % 10 === 2
      ? 'nd'
      : day % 10 === 3
      ? 'rd'
      : 'th';

  return date
    .toLocaleDateString('en-US', options)
    .replace(/(\d)$/, `$1${suffix}`);
}

export default formatDateWithSuffix;
;