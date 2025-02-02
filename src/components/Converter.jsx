import React, {useState, useEffect} from 'react';
import axios from "axios";

//Configuration for coinGecko API
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-tgw3nSSrZCLFbSDoNFZ3G9yh";

//Create axios instance with default config
const api = axios.create({
  baseURL: COINGECKO_API,
  headers: {
  'x-cg-demo-api-key': API_KEY
    }
  });

const Converter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("usd");
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCurrencies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get('/coins/markets',{
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
          'x-cg-demo-api-key': API_KEY
        }
      });

      if (!response.data) {
        throw new Error('Invalid response format');
      }
      
      const availableCurrencies = response.data.map(coin => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        current_price: coin.current_price
      }));

      if (availableCurrencies.length === 0) {
        throw new Error('No valid currency data recieved');
      }

      setCurrencies(availableCurrencies);

      //Set initial fromCurrency
      if (availableCurrencies.length > 0) {
        setFromCurrency(availableCurrencies[0].id);
      }

      setIsLoading(false);
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to fetch currencies. Please try again later.");
      setIsLoading(false);
    }
  };

    const fetchExchangeRate = async () => {
    if (!fromCurrency) return;
    try {
      setError(null);
      const response = await api.get('/simple/price', {
        params: {
          ids: fromCurrency,
          vs_currencies: toCurrency,
          'x-cg-demo-api-key': API_KEY
        }
      });

      if (!response.data || !response.data[fromCurrency]) {
        throw new Error ('Invalid price data recieved');
      }

      const rate = response.data[fromCurrency][toCurrency];
      setExchangeRate(rate);
      setConvertedAmount(amount * rate);
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to fetch exchange rate. Please try again later.");
      }
    };
  

  useEffect(() => {
    fetchCurrencies();
    }, []);

  useEffect(() => {
    if (fromCurrency) {
      fetchExchangeRate();
    }
  }, [fromCurrency, toCurrency, amount]); 

  const handleAmountChange = (e) => {
      const value = parseFloat(e.target.value);
      setAmount(value > 0 ? value : 1);
    };
  
  // Show Loading state
  if (isLoading) {
    return(
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-xl">Loading currencies...</div>
    </div>
    );
  }

  //Show Error State 
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-red-500">{error}</div>
        <button 
          onClick={fetchCurrencies}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  // //Only render the main UI if we have currencies
  // if (currencies.length === 0) {
  //   return (
  //     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
  //       <div className="text-xl">No currencies available</div>
  //     </div>
  //   );
  // }

  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        Cryptocurrency Converter
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0"
            step="any"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">From:</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name} ({currency.symbol.toUpperCase()})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">To:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="usd">USD</option>
            <option value="usd">EUR</option>
            <option value="usd">GBP</option>
            <option value="usd">JPY</option>
          </select>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Exchange Rate:</strong> {exchangeRate ? exchangeRate.toFixed(6) : "Loading..."}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Converted Amount:</strong> {convertedAmount ? convertedAmount.toFixed(2) : "Loading..."} {toCurrency.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Converter;