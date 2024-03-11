// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {
//   setDeposite,
//   setTransfer,
//   setWithDrawal,
// } from '../../store/reducers/transact_reducer';

// const navigate = useNavigate();
// const dispatch = useDispatch();

// const handleWitDrawal = () => {
//   dispatch(setWithDrawal(true));
//   dispatch(setDeposite(false));
//   dispatch(setTransfer(false));
// };
// const handleWitDeposit = () => {
//   dispatch(setWithDrawal(false));
//   dispatch(setDeposite(true));
//   dispatch(setTransfer(false));
// };
// const handleWitTransfer = () => {
//   dispatch(setWithDrawal(false));
//   dispatch(setDeposite(false));
//   dispatch(setTransfer(true));
// };

let trans = [
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'helenmaike@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'ndubes@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'helenmaike@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'ndubes@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
];

// let hello = {{
//         path: 'transfer',
//         Component: Transaction,
//       },
//       {
//         path: 'withdraw',
//         Component: Withdrawal,
//       },
//       {
//         path: 'deposit',
//         Component: Deposit,
//       },
//     }

//   these are the coins will need to pass depending on the coin you selected [litecoin,ripple,ethereum,bitcoin,tether]

// Function to convert a coin amount to USD using CoinGecko API

// Function to convert USD amount to a coin equivalent
// async function convertToCoin(coin, usdAmount) {
//   // First convert USD to BTC to use existing 'convertToUSD' function
//   const btcEquivalent = await convertToUSD(coin, usdAmount);

//   // Extract BTC amount from the formatted string
//   const btcAmount = parseFloat(btcEquivalent.split(' ')[0]);

//   // Calculate coin equivalent based on the USD price of the coin
//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
//   const response = await fetch(url);
//   const data = await response.json();

//   // Check if coin exists in the data
//   if (!data[coin]) {
//     throw new Error(`Coin ${coin} not found in API response`);
//   }
//   // console.log(data);
//   const price = data[coin].usd; // Get USD price per coin
//   const coinEquivalent = usdAmount / price; // Calculate coin equivalent

//   return `${coinEquivalent.toFixed(8)} ${coin}`; // Return formatted coin amount with 8 decimal places
// }

// async function convertCoinToCoin(fromCoin, toCoin, amount) {
//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCoin},${toCoin}&vs_currencies=usd`;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   // Check if coins exist in the data
//   if (!data[fromCoin] || !data[toCoin]) {
//     throw new Error(
//       `Coins '${fromCoin}' or '${toCoin}' not found in API response`
//     );
//   }

// Get USD prices per coin
// const fromCoinPrice = data[fromCoin].usd;
// const toCoinPrice = data[toCoin].usd;

// Calculate conversion rate (toCoin price per 1 unit of fromCoin)
//   const conversionRate = toCoinPrice / fromCoinPrice;

//   // Calculate equivalent amount in the target coin
//   const targetAmount = amount * conversionRate;

//   return `${targetAmount.toFixed(8)} ${toCoin}`; // Return formatted target coin amount with 8 decimal places
// }
// Example usage
// (async () => {
//   try {
//     const usdEquivalent = await convertToUSD('tether', 1);
//     console.log(usdEquivalent); // Output: 1999250.00 USD

//     const btcEquivalent = await convertToCoin('tether', 1000);
//     console.log(btcEquivalent);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();

// useEffect(() => {
//   const convertToUSD = async (coin, amount) => {
//     const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
//     const { data } = await axios.get(url);

//     // Check if coin exists in the data
//     if (!data[coin]) {
//       throw new Error(`Coin ${coin} not found in API response`);
//     }

//     const price = await data[coin].usd; // Get USD price per coin
//     console.log('Coin Data', price, data);
//     const usdEquivalent = amount * price; // Calculate USD equivalent

//     return usdEquivalent; // Return formatted USD amount
//   };

//   let converted = convertToUSD(convertWallet, amount);
//   console.log('CONVERTED', converted, convertWallet);
//   setUsdtAmount(converted);
// }, [convertWallet]);
