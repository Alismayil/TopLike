import React from 'react'
import './contactUpSection.scss'
import { Link } from "react-router-dom";


function ContactUpSection() {
  return (
    <section id='contactUpSection'>
            <h3>Contact</h3>
            <div>
                <Link to={"/"} style={{ color: 'white', textDecoration: "none" }}>
                    <p>Home</p>
                </Link>
                <span style={{ color: "gray ", fontSize: '40px' }}>/</span>
                <span>Contact</span>
            </div>
    </section>
  )
}

export default ContactUpSection