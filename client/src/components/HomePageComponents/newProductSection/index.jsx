import React, { useContext, useEffect, useState } from 'react'
import './newProductSection.scss'
import axios from 'axios'
import { GoHeart } from "react-icons/go";
import { RiRedPacketLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import {SearchContext} from "../../../context/searchContext/searchContext"
import { BasketContext } from '../../../context/basketContext/basketContext';
import Loading from '../../loadingPage';
import { WishlistContext } from '../../../context/wishlistContext/wishlistContext';
import { GoHeartFill } from "react-icons/go";

function NewProductSection() {
    const {search}=useContext(SearchContext)
    const [shopProduct, setShopProduct] = useState('')
  const [loading, setLoading] = useState(true)

  const {HandleAddBasket }=useContext(BasketContext)
  const {HandleAddWishlist, wishlist}=useContext(WishlistContext)


    async function ShopProductAxios() {
        const res=await axios.get("http://localhost:4001/shopproduct")
        setShopProduct(res.data)
        setLoading(false)
    }

    useEffect(() => {
        ShopProductAxios()
    }, [])
    
  return (
    <section id='newProductSection'>
        <div className="newProductUpText">
            <h1>New Product</h1>
        </div>
        <div className="newsProductCardsBox">
        { loading ? (<Loading/>) :
             (
                shopProduct
                .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
                .map((item)=>(
                    <div className="shopProductCard">
                        <div className="shopProductImgBox">
                            {item.status === 'sale' ?
                            <div className="saleBox">
                            Sale
                        </div> :''}
                            
                                <div className="wishlistBox" onClick={()=>HandleAddWishlist(item)}>
                              { wishlist.length !== 0 ?<GoHeartFill />  : <GoHeart />}
                                </div>
                                <div className="basketBox" onClick={()=>HandleAddBasket(item)}>
                                <RiRedPacketLine />
                                </div>
                                <div className="detailBox">
                                <IoIosSearch />
                                </div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className="shopProductTextBox">
                            <h3>{item.name}</h3>
                            <p>${item.newprice}.00<span>{item.oldprice}</span></p>
                        </div>
                    </div>
                ))
             )
        }
        </div>
        
    </section>
  )
}

export default NewProductSection