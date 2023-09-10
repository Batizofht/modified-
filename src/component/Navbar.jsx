import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

  const navigation = useNavigate();
   const homepage = () =>{
    navigation("/");
   }
   const home = () =>{
    navigation("/");
   }
  return (
    <>
    <div className='container'>

   
   <nav className="navbar navbar-expand-lg bg-primary text-light">
  <div className="container">

      <img onClick={homepage} src='https://switchiify.net.rw/u/classes/article/logoo.png' style={{position:"absolute",left:-12,cursor:"pointer"}} width="80" />
    <a onClick={home} className="navbar-brand text-light fw-bold " style={{marginLeft:60,cursor:"pointer"}} >SIHS PORTAL</a>
  
    <button className="navbar-toggler text-primary bg-light rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <span className="navbar-toggler-icon text-light custom-icon"></span>
</button>

    <div className="collapse container navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink activeClassName  className="nav-link" aria-current="page" to="/Home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link"  to="/Student">STUDENTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName className="nav-link" to='Teacher'>TEACHERS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName className="nav-link" to='/About'>ABOUT</NavLink>
        </li>
      </ul>
      <Link to='/Admins' style={{color:"blue",marginRight:20}}  className="navbar-text btn btn-light  fw-bold rounded-pill">
        Admin
      </Link>
      <Link to='/Admins' style={{color:"blue",marginRight:-20}}  className="navbar-text btn btn-light  fw-bold rounded-pill">
        E-Learning
      </Link>
    </div>
  </div>
</nav> 


<div class="offcanvas offcanvas-end bg-primary "  style={{borderTopLeftRadius:10, borderBottomLeftRadius:10,width:200}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
  <h1 className='text-light'>Explore</h1>
    <button  type="button" class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink activeClassName  className="nav-link" aria-current="page" to="/Home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link"  to="/Student">STUDENTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName className="nav-link" to='Teacher'>TEACHERS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName className="nav-link" to='/About'>ABOUT</NavLink>
        </li>
      </ul>
      <Link to='/Admins' style={{color:"blue",marginRight:20}}  className="navbar-text btn btn-light  fw-bold rounded-pill">
        Admin
      </Link>
 <div className='mt-3'>
     <Link to='/Admins' style={{color:"blue",marginRight:-20}}  className="navbar-text btn btn-light  fw-bold rounded-pill">
        E-Learning
      </Link>
      <h6 class="offcanvas-title text-light py-3" id="offcanvasWithBothOptionsLabel ">Jesuits Community</h6>
      <p className='text-light'>Saint Ignatious HS</p>
      <p className='text-light'>From: Switchiify</p>
      <p className='text-light'>2023</p>
 </div>
   
  </div>
</div>
</div>
    <Outlet />
    </>
   
  )
}

export default Navbar 