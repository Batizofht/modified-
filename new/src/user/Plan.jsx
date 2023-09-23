import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../ahook/Auth'
import Generate from './modals/Generate'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Gens from './modals/Generate'
import Stu from './modals/Stu'
import Stuo from './modals/StuO'
const Plan = () => {
   const [waitings, setWaitings] = useState(false);
    const {user} = useContext(AuthContext);

    /////////////////
    const navigation = useNavigate();
    ///////////////////////
    const openItsMODAL = () =>{
      
        const modal = document.getElementById("exampleModal");
        window.$(modal).modal('show')
    }
    const elvsss = async () => {
      let roomNumber = 1;
      const baseURL = "http://localhost:8080/project/phpbackened/virtual_class/alevel.php?";
      let response = null;
    
      const confirmation = confirm("DO YOU REALLY WANT TO GENERATE A NEW SITTING PLAN FOR ALEVEL.");
    
      if (!confirmation) {
        console.log("no");
        return;
      }
    
      console.log("yes");
      setWaitings(true);
    
      while (true) {
        try {
          const url = roomNumber === 1 ? `${baseURL}room=1` : `${baseURL}room=room${roomNumber}`;
          response = await axios.get(url);
    
          toast.info(response.data);
          console.log(response.data);
    
          if (typeof response.data === "string" && response.data.includes("Fatal error")) {
            // Stop the program if the specific error message is returned
            break;
          }
    
          roomNumber++;
    
          setTimeout(() => {
            setWaitings(false);
          }, 2000);
        } catch (error) {
          console.log(error);
          break;
        }
      }
    };
    
    const clear = async () => {
      try {
        const response = await axios.get("http://localhost:8080/project/phpbackened/controll.php?clear");
        const data = response.data;
        setPositions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  return ( <>
    <div className='container'>
                 <div class="container">
        <header class="d-flex justify-content-center py-3">
          {
            user.admintype === "DM" ?
              <>
                <ul class="nav nav-pills">
                  <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Announcement</a></li>

                  <li class="nav-item"><a href="#"  class=" btn btn-primary rounded-pill  text-light" aria-current="page">Sitting Plan</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Notification</a></li>
                  <li class="nav-item">  {user.profile ?
                    <>

                    </>
                    :
                    <>
                      <img src='https://img.freepik.com/premium-vector/3d-boy-cartoon-character-head-with-headphones-social-network-profile-vector-illustration_480270-393.jpg?w=2000' className='rounded-pill' style={{ width: 40, height: 40 }} />
                    </>
                  } <span className='text-primary fw-bold'>{user.firstname}{user.username}</span> </li>
                </ul>
              </>
              :

              <>
                <ul className="nav nav-pills">
                  <li  class="nav-item"><a onClick={()=>navigation("../Dashboard")} href="#" className="nav-link" aria-current="page">Home</a></li>
             
                  
                  <li className="nav-item">  {user.profile ?
                    <>

                    </>
                    :
                    <>
                      <img src='https://img.freepik.com/premium-vector/3d-boy-cartoon-character-head-with-headphones-social-network-profile-vector-illustration_480270-393.jpg?w=2000' className='rounded-pill' style={{ width: 40, height: 40 }} />
                    </>
                  } <span className='text-primary fw-bold'>{user.firstname}{user.username}</span> </li>
                </ul>
              </>
          }

        </header>
      </div>
      
    
    </div>

    <div className='container'>

      <center>
       <p className='text-muted' style={{fontSize:25}}>Check Where You Are Sitting In Exams.</p>
      </center>
    {
      user.lelel =='A' ? 
      <>
       <Stu />
      </>
      :
      <Stuo />
    }
         
  

    </div>
    <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </>
  )
}

export default Plan