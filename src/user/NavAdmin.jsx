import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../ahook/Auth'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import "./css.css"
const Nav = () => {
  const navigate = useNavigate();
  const [homeactive, setActive] = useState("itr");
const logout = ()=>{
  localStorage.removeItem("users");
  navigate("/");
  

}
// const location = useLocation();

// const pathName = location.pathname;
// if(pathName =="/"){
//   setActive("itractive");
// }
  const{user} = useContext(AuthContext);
  return (
    <div>
    <div style={{position:"fixed"}} class="container-fluid">
		   <div class="row">
		   <div class="col-md-3 col-lg-2 sidebar">
				<h3 style={{fontWeight:"bold",color:"#007BFF"}}>SIHS PROTAL</h3>
        <img src='https://switchiify.net.rw/u/classes/article/logoo.png' style={{width:130,marginLeft:-10}}/>
        <div className='overf'>
				  <ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Class">My Class</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Chat">Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">Timetables</NavLink></li>
            <li><NavLink activeClassName="active" className="itr" to="/Exam">Exams</NavLink></li>
            
           
         
				  </ul>
        </div>  
        <div  className='downmenu'>
          <div className='menua'>
            <center>
                 <h4>SIHS Portal</h4>
            <p>Version: 0.001</p>
            </center>
         
          </div>
          <div  className='dropdown'>
            <a className='btn  dropdown-toggle text-light fw-bold' style={{width:"100%"}} data-bs-toggle='dropdown' aria-expanded='false'>
              {user.profile ? 
              <>
          
              </>
              :
              <>
     <img src='https://img.freepik.com/premium-vector/3d-boy-cartoon-character-head-with-headphones-social-network-profile-vector-illustration_480270-393.jpg?w=2000' className='rounded-pill' style={{width:40,height:40}} />
              </>
              }
             
         <span style={{color:"white"}}> {user.firstname}</span> 
            </a>

              <ul class="dropdown-menu dropuser">
                 <li><Link class="dropdown-item " to='Pro'>{user.firstname} Profile</Link></li>
                 <li><Link class="dropdown-item " to="Notification">Notificatiom</Link></li>
                 <li><Link class="dropdown-item " to="Settings">Settings</Link></li>
                 <li><hr class="dropdown-divider" /></li>
                 <li><Link class="dropdown-item " onClick={logout} >Log out</Link></li>
              </ul>

          </div>
        
        </div>
			</div>
		   	<div class="col-md-9 col-lg-10 main-content">
		   <Outlet />
		   	</div>
		   </div>
    </div>
    </div>
  )
}

export default Nav