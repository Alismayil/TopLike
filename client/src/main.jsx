import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './layout/navbar/index.jsx';
import Footer from './layout/footer/index.jsx';
import SearchProvider from './context/searchContext/searchContext.jsx';
import BasketProvider from './context/basketContext/basketContext.jsx';
import WishlistProvider from './context/wishlistContext/wishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <BasketProvider>
        <WishlistProvider>
          <SearchProvider>
            <Navbar />
            <App />
            <Footer />
          </SearchProvider>
        </WishlistProvider>
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>
)
