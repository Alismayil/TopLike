
import './App.css'
import HomePage from './page/homePage'
import {  Route, Routes } from "react-router-dom";
import ShopPage from './page/shopPage';
import ContactPage from './page/contactPage';
import BlogPage from './page/blogPage';
import AboutPage from './page/aboutPage';
import Wishlistpage from './components/WishlistPage';

function App() {

  return (
   <>
    <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/shop" element={<ShopPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/wishlist" element={<Wishlistpage />} /> 
      </Routes>
      
   </>
  )
}

export default App
