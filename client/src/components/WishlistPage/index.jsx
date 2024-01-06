import React, { useContext } from 'react'
import './wishlistPage.scss'
import NotMeanSection from '../notMeanSection'
import { WishlistContext } from '../../context/wishlistContext/wishlistContext'
import { BasketContext } from '../../context/basketContext/basketContext'


function Wishlistpage() {
  const {HandleDeleteWishlist, wishlist}=useContext(WishlistContext)
  const {HandleAddBasket}=useContext(BasketContext)
  return (
    <>
    <NotMeanSection/>
    <section id='wishlistpage'>
    {
      wishlist && wishlist.map((item)=>(
        <div>
          <p>{item.name }</p>
          <button onClick={()=>HandleDeleteWishlist(item._id)}>delete</button>
        <button onClick={()=>HandleAddBasket(item._id)}>Basket</button>
        </div>
      ))
    }
    </section>
    </>
    
  )
}

export default Wishlistpage