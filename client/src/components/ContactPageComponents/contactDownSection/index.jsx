import React from 'react'
import './contactDownSection.scss'

function ContactDownSection() {
  return (
    <section id='contactDownSection'>
        <form action="">
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email'  />
            <input type="text" placeholder='Subject' />
            <input type="text" placeholder='Your Message' className='messageInput'  />
            <button>SEND TO US</button>
        </form>
    </section>
  )
}

export default ContactDownSection