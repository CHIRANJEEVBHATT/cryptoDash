import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CoinContext } from '../context/CoinContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value) {
      case "usd" : {
        setCurrency({name : "usd" , symbol : "$"});
        break;
      }
       case "eur" : {
        setCurrency({name : "eur" , symbol : "€"});
        break;
      }
      case "inr" : {
        setCurrency({name : "inr" , symbol : "₹"});
        break;
      }
      default: {
        setCurrency({name : "usd" , symbol : "$"});
        break;
      }
    }
  }
  return (
    <nav className="bg-gray-900 text-white font-serif shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-3">
        
        <div className="flex items-center space-x-3">
          <img src="cryptologo.png" alt="Crypto Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold">CryptoDash</h1>
  </div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <Link className="hover:text-teal-400 transition cursor-pointer">Home</Link>
          <Link className="hover:text-teal-400 transition cursor-pointer">Features</Link>
          <Link className="hover:text-teal-400 transition cursor-pointer">Pricing</Link>
          <Link className="hover:text-teal-400 transition cursor-pointer">Blog</Link>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <select onChange={currencyHandler} className="bg-gray-800 text-white border border-gray-600 px-2 py-1 rounded-md">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>

          <button className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg transition">
            <span>Sign Up</span>
            <img src="/signup-icon.png" alt="" className="w-4 h-4" />
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <ul className="flex flex-col space-y-2 text-lg">
            <li className="hover:text-teal-400 transition cursor-pointer">Home</li>
            <li className="hover:text-teal-400 transition cursor-pointer">Features</li>
            <li className="hover:text-teal-400 transition cursor-pointer">Pricing</li>
            <li className="hover:text-teal-400 transition cursor-pointer">Blog</li>
          </ul>

          <div className="flex flex-col space-y-3 mt-3">
            <select className="bg-gray-800 text-white border border-gray-600 px-2 py-1 rounded-md">
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
            </select>

            <button className="flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg transition">
              <span>Sign Up</span>
              <img src="/signup-icon.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;
