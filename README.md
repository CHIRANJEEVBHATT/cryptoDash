# CryptoDash

CryptoDash is a responsive web application built with React that provides real-time cryptocurrency data including prices, trends, and related news. It fetches live data from CoinGecko and CryptoControl APIs and presents it in a clean, user-friendly interface.

## Features

- Live cryptocurrency data with price, market cap, 24h high/low, and more
- Currency selection between USD, INR, and EUR
- Interactive line charts showing historical trends (10-day)
- Crypto news blog using CryptoControl API
- Loading spinner while fetching data
- Responsive layout with a clean dark-themed UI



## Technologies Used

- React (Vite)
- Tailwind CSS
- Recharts (for line chart)
- React Router DOM
- CoinGecko API (for coin data)
- CryptoControl API (for news)



## Getting Started

## 1. Clone the repository

git clone https://github.com/your-username/cryptoDash.git
cd cryptoDash
2. Install dependencies
npm install
3. Run the development server
npm run dev
Visit the site in your browser at: http://localhost:3000

API Keys
CoinGecko API: No key required for basic usage.

CryptoControl API:

Visit https://cryptocontrol.io and sign up

Copy your public API key

Replace the placeholder key in your project
headers: { 'x-api-key': 'your_api_key_here' }
Folder Structure

src/
│
├── components/       // Reusable UI components (Header, Chart, BlogCard)
├── context/          // Currency context
├── pages/            // Main routes (Home, Coin, Blog)
├── App.jsx           // Main app routing and layout
└── main.jsx          // React entry point


Future Improvements
Authentication (Login/Sign Up)

Add to Watchlist

Buy/Sell functionality simulation

Filtering and sorting coins by price or rank

Pagination for blog/news articles

License
This project is free to use for learning and personal development purposes.
