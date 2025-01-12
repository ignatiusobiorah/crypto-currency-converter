This project is a Cryptocurrency Converter that allows users to convert between different currencies in real-time using the CoinLayer API. The application provides an intuitive interface for selecting currencies, entering amounts, and viewing conversion results with live exchange rates.

Features

Real-time Exchange Rates: Fetches the latest currency exchange rates from CoinLayer.

Currency Selection: Supports a wide range of cryptocurrencies and fiat currencies.

Amount Conversion: Converts entered amounts based on the selected currency pair.

Error Handling: Displays user-friendly error messages in case of API failures or network issues.

Responsive Design: Designed with Tailwind CSS to provide a seamless experience on desktop, tablet, and mobile devices.

Getting Started

Follow these steps to set up and run the project locally:

Prerequisites

Node.js installed on your machine.

A valid CoinLayer API key.

Installation

Clone the repository:

git clone https://github.com/yourusername/crypto-converter.git

Navigate to the project directory:

cd crypto-converter

Install dependencies:

npm install

Create an .env file in the root directory and add your CoinLayer API key:

REACT_APP_COINLAYER_API_KEY=your_api_key_here

Start the development server:

npm run dev

Open your browser and navigate to:

http://localhost:5173

Usage

Enter the amount you want to convert in the input field.

Select the From currency from the dropdown menu.

Select the To currency from the dropdown menu.

View the converted amount and the current exchange rate displayed below.

Project Structure

crypto-converter/
├── src/
│   ├── components/
│   │   ├── Converter.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── .env
├── package.json
└── README.md

Converter.jsx: Core component handling currency conversion logic.

App.jsx: Root component.

main.jsx: Entry point for the application.

Technologies Used

React: JavaScript library for building user interfaces.

Axios: For making HTTP requests to the CoinLayer API.

Tailwind CSS: For responsive and modern styling.

CoinLayer API: For fetching real-time exchange rates.

Challenges Faced

Handling CORS Issues:

The CoinGecko API was initially used but faced CORS policy restrictions. Switching to CoinLayer resolved this issue.

Error Handling:

Implemented robust error messages for failed API requests or network problems.

State Management:

Managed multiple state variables like currencies, exchange rates, and converted amounts using React hooks (useState and useEffect).

Future Improvements

Historical Exchange Rates: Add charts to display historical trends for selected currency pairs.

Favorites Feature: Allow users to save frequently used currency pairs.

Dark Mode: Enhance the UI with a dark mode toggle.