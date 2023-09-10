import React from 'react'

const Footer = () => {
  return (
    <div>
        
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-primary rounded-5">
    <p className="col-md-4 mb-0 text-body-secondary text-light fw-bold px-5">Sant Ignatius HS <br/>From: <span style={{fontSize:13}}>SICP</span> </p>


    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center ">
    <img src='https://switchiify.net.rw/u/classes/article/logoo.png' width="80" />
    </a>

    <ul className="nav col-md-4 justify-content-end px-5">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-light">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Students</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Teachers</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">SICP</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer