import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../context/CoinContext';
import LineChart from '../components/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-SrZzc5CFJ7KpsYT1BDaskLpN'
      }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-SrZzc5CFJ7KpsYT1BDaskLpN'
      }
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (!coinData || !historicalData) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="w-[65px] h-[65px] border-4 border-gray-300 border-t-[#4500c6] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="text-white px-4 sm:px-6 md:px-12 py-10">
      

      <div className="flex flex-col items-center text-center mb-10">
        <img
          src={coinData.image.large}
          alt={coinData.name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {coinData.name} <span className="uppercase text-gray-400">({coinData.symbol})</span>
        </h1>
      </div>
<div className="bg-[rgba(84,3,255,0.15)] rounded-2xl p-3 sm:p-4 md:p-5 mb-10 shadow-lg w-full max-w-[560px] mx-auto">
  <LineChart historicalData={historicalData} />
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        <div className="bg-[#1e1e2f] p-4 sm:p-5 rounded-xl shadow-md">
          <p className="text-gray-400 text-xs sm:text-sm">Crypto Market Rank</p>
          <p className="text-lg sm:text-xl font-semibold">{coinData.market_cap_rank}</p>
        </div>

        <div className="bg-[#1e1e2f] p-4 sm:p-5 rounded-xl shadow-md">
          <p className="text-gray-400 text-xs sm:text-sm">Current Price</p>
          <p className="text-lg sm:text-xl font-semibold">
            {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
          </p>
        </div>

        <div className="bg-[#1e1e2f] p-4 sm:p-5 rounded-xl shadow-md">
          <p className="text-gray-400 text-xs sm:text-sm">Market Cap</p>
          <p className="text-lg sm:text-xl font-semibold">
            {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </p>
        </div>

        <div className="bg-[#1e1e2f] p-4 sm:p-5 rounded-xl shadow-md">
          <p className="text-gray-400 text-xs sm:text-sm">24H High</p>
          <p className="text-lg sm:text-xl font-semibold text-green-400">
            {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}
          </p>
        </div>

        <div className="bg-[#1e1e2f] p-4 sm:p-5 rounded-xl shadow-md">
          <p className="text-gray-400 text-xs sm:text-sm">24H Low</p>
          <p className="text-lg sm:text-xl font-semibold text-red-400">
            {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Coin;