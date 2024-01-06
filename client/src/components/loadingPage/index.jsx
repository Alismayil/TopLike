import React from 'react'
import './loading.scss'
import loadingGif from '../../image/Infinity.gif'

function Loading() {
  return (
    <section id='loading'>
      <img src={loadingGif} alt="" />
    </section>
  )
}

export default Loading