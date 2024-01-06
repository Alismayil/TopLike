import React, { useEffect, useState } from 'react'
import './footer.scss'
import axios from 'axios'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

function Footer() {
  const [footer, setFooter] = useState('')

  async function FooterAxios() {
    const res=await axios.get("http://localhost:4001/footer")
    setFooter(res.data)
  }

  useEffect(() => {
    FooterAxios()
  }, [])
  
  return (
    <footer>
      <div className="footerLeftBox">
      <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" />
      <p>The simple, delicate and light design
makes it comfortable for everyone.</p>
<div className="socialMediaBox">
<FaTwitter className='icon' />
<FaDribbble className='icon' />
<FaBehance className='icon' style={{fontSize:"33px"}} />
<FaInstagram className='icon' style={{fontSize:"28px"}} />
</div>
      </div>
      <div className="footerRightBox">
        {
          footer && footer.map((item)=>(
             <div className="footerBox">
              <span>{item.maintext}</span>
              <div className="footerLine"></div>
              <p>{item.othertext1}</p>
              <p>{item.othertext2}</p>
              <p>{item.othertext3}</p>
              <p>{item.othertext4}</p>
              <p>{item.othertext5}</p>
              <p>{item.othertext6}</p>
              <p>{item.othertext7}</p>
              <p>{item.othertext8}</p>
              <p>{item.othertext9}</p>
          </div>
          ))
        }
         
      </div>
      <div className="copyRider">
        <p>© Copyright 2024 | TopBike By <p>Ali.Ismayil.</p> Powered by Af104.</p>
        <div className="cardImages">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1613576066" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer