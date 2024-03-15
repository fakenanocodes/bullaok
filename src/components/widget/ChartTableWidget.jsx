import { useEffect } from 'react';

const ChartTableWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://price-static.crypto.com/latest/public/static/widget/index.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="w-full border border-red-500"
      id="crypto-widget-CoinList"
      data-design="classic"
      data-coin-ids="1,166,382,20,2180,1986,1120"
    ></div>
  );
};

export default ChartTableWidget;
