import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='d-flex justify-content-center align-items-center text-center ' style={{height:"100vh"}}>
      <div className=''>
      <img src='https://switchiify.net.rw/u/classes/article/logoo.png' width="120" />
        <h1 className='text-muted fs-3'>Ooops, Seems the page you are trying to visit isn't available.</h1>
        <Link className='btn btn-primary rounded-pill' to="/">Go Home</Link>
      </div>
    </div>
  )
}

export default Error