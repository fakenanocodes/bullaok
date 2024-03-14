import { useEffect } from 'react';

const LiteCoinWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="livecoinwatch-widget-6"
      lcw-coin="LTC"
      lcw-base="USD"
      lcw-period="d"
      lcw-color-tx="#ffffff"
      lcw-color-bg="#1f2434"
      lcw-border-w="1"
    ></div>
  );
};

export default LiteCoinWidget;
