import { format, isToday, isYesterday } from 'date-fns';

const useDateSeparator = (messageDate, prevDate) => {
  if (prevDate && prevDate.toDateString() === messageDate.toDateString()) {
    return null; // Return null when the date remains the same
  }

  let dateSeparator = null;

  if (isToday(messageDate)) {
    dateSeparator = 'Today';
  } else if (isYesterday(messageDate)) {
    dateSeparator = 'Yesterday';
  } else {
    dateSeparator = format(messageDate, 'MMMM d, yyyy');
  }

  return dateSeparator;
};

export default useDateSeparator;
