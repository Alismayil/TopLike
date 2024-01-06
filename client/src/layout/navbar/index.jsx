import React, { useContext, useEffect, useState } from 'react'
import './navbar.scss'
import axios from 'axios'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";
import { FaCommentAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { SearchContext } from '../../context/searchContext/searchContext';
import { BasketContext } from '../../context/basketContext/basketContext';
import { WishlistContext } from '../../context/wishlistContext/wishlistContext';

function Navbar() {
  const [pagename, setPagename] = useState('')
  const [shopsubmenu, setShopsubmenu] = useState('')
  const [websiteicon, setWebsiteicon] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [goLogin, setGoLogin] = useState(false)
  const [goRegister, setGoRegister] = useState(false)
  const [scrollDown, setScrollDown] = useState(false);
  const [isOpenSeacrh, setIsOpenSeacrh] = useState(false)

  const { handleSearch } = useContext(SearchContext)

  // ------------------------------
  const {HandleIsOpenBasket , HandleCountVal,HandleDelete, basket, isOpenBasket,subtotal}=useContext(BasketContext)
  // ------------------------------

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollDown(scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  async function WebSiteIconAxios() {
    const res = await axios.get("http://localhost:4001/websiteicon")
    setWebsiteicon(res.data)
  }
  async function PageNameAxios() {
    const res = await axios.get("http://localhost:4001/pagename")
    setPagename(res.data)
  }
  async function ShopSubmenuAxios() {
    const res = await axios.get("http://localhost:4001/shopsubmenu")
    setShopsubmenu(res.data)
  }
  function HandleOpen() {
    setIsOpen(!isOpen)
    setGoRegister(!goRegister)

  }
  function HandleIsOpenSeacrh() {
    setIsOpenSeacrh(!isOpenSeacrh)
  }
  function HandleGoLogin() {
    setGoLogin(true)
    setGoRegister(false)

  }
  function HandleGoRegister() {
    setGoRegister(!goRegister)
  }


  useEffect(() => {
    WebSiteIconAxios()
    ShopSubmenuAxios()
    PageNameAxios()
  }, [])

  return (
    <>

      <nav className={scrollDown ? 'scrolled' : ''}>
        <div className="navbarHiddenMenuBtnBox">
          <button>
            <RiMenu2Line />
          </button>
        </div>
        <div className="navbarIconBox">
          {
            websiteicon && websiteicon.map((item) => (
              <>
                <img src={item.websiteicon1} alt="" className='navbarImg1' /></>
            ))
          }
          {
            websiteicon && websiteicon.map((item) => (
              <>
                <img src={item.websiteicon2} alt="" className='navbarImg2' /></>
            ))
          }
        </div>
        <div className="navbarPageNamesBox">
          {
            pagename && pagename.map((item) => (
              <div className='pageNameAxiosBox'>
                <Link style={{ color: "white", textDecoration: "none" }} to={item.url}>
                  <p>{item.pagename}
                    <span>{item.comment === "Hot" ? <div className='hot'><FaCommentAlt style={{ color: "#e62e05" }} /><h6>Hot</h6></div> : <></>}</span>
                  </p>
                </Link>
              </div>
            ))

          }
        </div>
        <div className="navbarFuncBox">
          <div className="searchBtnBox">
            <button onClick={HandleIsOpenSeacrh}>
              <IoSearch />
            </button>
          </div>
          <div className="userBtnBox">
            <button onClick={HandleOpen}>
              <FaRegUser />
            </button>
          </div>
          <div className="wishlistBtnBox">
            <Link to={"/wishlist"}>
            <button>
              <FaRegHeart />
            </button>
            </Link>
          </div>
          <div className="basketBtnBox">
            <button onClick={HandleIsOpenBasket}>
              <RiRedPacketLine />
              {basket.length !== 0 ?<div className="basketBall"></div> :" "}
              
            </button>
          </div>

        </div>
      </nav>
      <div className={`openLoginBox ${isOpen ? "open" : ""}`}>
        <div className={`loginBox ${goLogin ? "loginOpen" : ""}`}>
          <p onClick={HandleOpen} className='closeBtn'>
            <IoCloseSharp />
          </p>
          {
            websiteicon && websiteicon.map((item) => (
              <>
                <img src={item.websiteicon2} alt="" />
                </>
            ))
          }
          <div className="loginLine"></div>
          <span>Great to have you back!</span>
          <form action="">
            <input type="text" placeholder='Email adress' />
            <input type="text" placeholder='Password' />
            <p>Forgot your password?</p>
          </form>
          <button>LOG IN</button>
          <div className="changeRegisterBox">
            <p>Don’t have an account?<span onClick={HandleGoRegister}>Register now</span></p>
          </div>
        </div>
        <div className={`registerBox ${goRegister ? "registerOpen" : ""}`}>
          <p onClick={HandleOpen} className='closeBtn'>
            <IoCloseSharp />
          </p>
          <span>REGISTER</span>
          <form action="">
            <input type="text" placeholder='Email adress' />
            <input type="text" placeholder='Password' />
          </form>
          <button>REGISTER</button>
          <div className="changeRegisterBox">
            <p onClick={HandleGoLogin}>Back to login</p>
          </div>
        </div>
      </div>
      <div className={`searchBox ${isOpenSeacrh ? "openSearch" : ""}`}>
        <p onClick={HandleIsOpenSeacrh} className='closeBtn'>
          <IoCloseSharp />
        </p>
        <form action="">
          <input type="text" placeholder='Search' onChange={(e) => handleSearch(e.target)} />
          <IoMdSearch style={{ fontSize: '70px', color: " #ffab00" }} />
        </form>
      </div>
      <div className={`basketOpenBox ${isOpenBasket ? "openBasket" : ''}`}>
        <div className="basketBox">
          <div className="basketUpBox">
            <button onClick={HandleIsOpenBasket}>
              <IoCloseSharp />
            </button>
            <p>Shopping Cart</p>
            <span>{basket.length}</span>
          </div>
          <div className="basketDownBox">
            <p>${subtotal}.00</p>
            {
              basket && basket.map((item)=>(
                <div className='basketCard'>
                <p>{item.name}</p>
                <button onClick={()=>HandleDelete(item._id)}>x</button>
                <button onClick={()=>HandleCountVal(true, item)}>+</button>
                <p>QTY:{item.count}</p>
                <button onClick={()=>HandleCountVal(false, item)}>-</button>
                <p>${item.total}.00</p>
                </div>
              ))
            }
</div>
        </div>
      </div>
      {/* <div className="submenu">
          {
            shopsubmenu && shopsubmenu.map((item)=>(
              <>
              <p>{item.shopsubmenu}</p>
              </>
            ))
          }
      </div> */}
    </>
  )
}

export default Navbar