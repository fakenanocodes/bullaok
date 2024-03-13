import { useEffect, useState } from 'react';

const useTimeAgo = (createdAt) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDateTime = new Date();
      const createdAtDate = new Date(createdAt);
      const timeDifferenceInMilliseconds = currentDateTime - createdAtDate;

      // Convert milliseconds to minutes
      const minutesDifference = Math.floor(
        timeDifferenceInMilliseconds / (1000 * 60)
      );

      if (minutesDifference < 60) {
        setTimeAgo(`${minutesDifference} mins ago`);
      } else if (minutesDifference < 1440) {
        // Less than 24 hours
        const hoursDifference = Math.floor(minutesDifference / 60);
        setTimeAgo(`${hoursDifference} hours ago`);
      } else {
        const daysDifference = Math.floor(minutesDifference / 1440);
        setTimeAgo(`${daysDifference} days ago`);
      }
    };

    calculateTimeAgo();

    // Update time every minute
    const interval = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [createdAt]);

  return timeAgo;
};

export default useTimeAgo;
