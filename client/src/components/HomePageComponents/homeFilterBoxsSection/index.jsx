import React, { useEffect, useState } from 'react'
import './homeFilterBoxsSection.scss'
import axios from 'axios'

function HomeFilterBoxsSection() {
    const [homefilter, setHomefilter] = useState('')

    async function HomeFilterAxios() {
        const res=await axios.get("http://localhost:4001/homefilter")
        setHomefilter(res.data)
    }
    useEffect(() => {
        HomeFilterAxios()
    }, [])
    
  return (
    <section id='homeFilterBoxsSection'>
        {
            homefilter && homefilter.map((item)=>(
                <div className="filterBox">
                <img src={item.image} alt="" />
                <div className="filterBoxHoverBox"><p>{item.filtername}</p></div>
            </div>
            ))
        }
    </section>
  )
}

export default HomeFilterBoxsSection