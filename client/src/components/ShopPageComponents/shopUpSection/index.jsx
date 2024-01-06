import React from 'react'
import './shopUpSection.scss'
import { Link } from "react-router-dom";

function ShopUpSection() {
    return (
        <section id='shopUpSection'>
            <h3>Shop</h3>
            <div>
                <Link to={"/"} style={{ color: 'white', textDecoration: "none" }}>
                    <p>Home</p>
                </Link>
                <span style={{ color: "gray ", fontSize: '40px' }}>/</span>
                <span>Shop</span>
            </div>
        </section>
    )
}

export default ShopUpSection