import React, {useState, useEffect} from 'react';
import axios from "axios";

const Converter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("btc");
    const [toCurrency, setToCurrency] = useState("usd");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, SetError] = useState("");

    const fetchCurrencies = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
      );
      setCurrencies(response.data);
    } catch (err) {
      setError("Failed to fetch currencies. Please try again later.");
    }
  };

    const fetchExchangeRate = async () => {
    if (!fromCurrency || !toCurrency) return;
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`
      );
      setExchangeRate(response.data[fromCurrency][toCurrency]);
      setConvertedAmount(amount * response.data[fromCurrency][toCurrency]);
    } catch (err) {
      setError("Failed to fetch exchange rate. Please try again later.");
    }
  };

    useEffect(() => {
    fetchCurrencies();
    }, []);

    useEffect(() => {
        fetchExchangeRate();
    }, [fromCurrency, toCurrency, amount]);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

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
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
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
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Exchange Rate:</strong> {exchangeRate || "Loading..."}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Converted Amount:</strong> {convertedAmount || "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Converter;

