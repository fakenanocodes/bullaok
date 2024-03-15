import * as CryptoCharts from 'cryptocharts';
import { useEffect } from 'react';

const CryptoChart = () => {
  useEffect(() => {
    CryptoCharts.roiComparison({
      chart_id: 'roichart',
      cryptocompare_tickers: ['BTC', 'ETH'],
      iconomi_tickers: ['BLX', 'CAR'],
      last_days: 90,
      options: {
        colors: ['#88AA24', '#EF1273', '#122673', '#000000'],
        title: true,
        chart: {
          type: 'line',
        },
      },
    });
  }, []);

  return <div id="roichart"></div>;
};

export default CryptoChart;
