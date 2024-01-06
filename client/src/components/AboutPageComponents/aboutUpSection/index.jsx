import React from 'react'
import './aboutUpSection.scss'
import { Link } from "react-router-dom";

function AboutUpSection() {
    return (
        <section id='aboutUpSection'>
            <h3>About Us</h3>
            <div>
                <Link to={"/"} style={{ color: 'black', textDecoration: "none" }}>
                    <p>Home</p>
                </Link>
                <span style={{ color: "white ", fontSize: '40px' }}>/</span>
                <span>About Us</span>
            </div>
        </section>
    )
}

export default AboutUpSection