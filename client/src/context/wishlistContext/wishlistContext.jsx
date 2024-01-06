import React, { createContext, useState } from 'react'

export const WishlistContext=createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])

    function HandleAddWishlist(x) {
        const product=wishlist.find(item=>item._id === x._id)
        if (product) {
            setWishlist(wishlist.filter(item=>item._id !== x._id))
        }
        else{
            setWishlist([...wishlist, x])

        }
    }
    function HandleDeleteWishlist(_id) {
        setWishlist(wishlist.filter(x=>x._id !== _id))
    }
    const data={
        HandleAddWishlist,
        HandleDeleteWishlist,
        wishlist,
        setWishlist
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider