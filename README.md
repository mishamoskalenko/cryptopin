# Cryptopin

A web application that provides real-time information about various cryptocurrencies. It allows users to track token prices, market capitalization, trading volume, and 24-hour price changes.

## Live Demo

You can see the live demo of the project here: [https://mishamoskalenko.github.io/cryptopin/](https://mishamoskalenko.github.io/cryptopin/)

## About The Project

Cryptopin is a React-based application designed for cryptocurrency enthusiasts. It fetches data from the CoinGecko API to display a comprehensive list of tokens. The application features a clean and user-friendly interface, with a virtualized list for smooth scrolling and a skeleton loader for an improved user experience during data fetching.

## Features

-   **Real-time Data:** Fetches and displays the latest cryptocurrency data, updated every minute.
-   **Comprehensive Token Information:** Shows price, 24-hour change, trading volume, and market capitalization for each token.
-   **Efficient List Rendering:** Uses `react-window` to handle large lists of tokens smoothly.
-   **Loading and Error States:** Includes skeleton loaders for a better UX and handles API errors gracefully.
-   **Responsive Design:** The UI is built to be responsive and works on different screen sizes.

## Technologies Used

-   [React](https://reactjs.org/)
-   [React Router](https://reactrouter.com/)
-   [Axios](https://axios-http.com/)
-   [Sass](https://sass-lang.com/)
-   [CoinGecko API](https://www.coingecko.com/en/api)
-   [React Window](https://react-window.vercel.app/)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/mishamoskalenko/cryptopin.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the app in development mode
    ```sh
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
