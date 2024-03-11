import { useEffect, useState } from 'react';

const useCurrencyFormatter = (amount) => {
  const [formattedAmount, setFormattedAmount] = useState('');

  useEffect(() => {
    const formatAmount = () => {
      if (amount !== undefined && !isNaN(amount)) {
        const formatted = parseFloat(amount).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD', // Adjust the currency as needed
          minimumFractionDigits: 2,
        });
        setFormattedAmount(formatted);
      }
    };

    formatAmount();
  }, [amount]);

  return formattedAmount;
};

export default useCurrencyFormatter;
