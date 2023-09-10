import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ahook/Auth'
import Generate from './modals/Generate'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Gens from './modals/Generate'
import Allrooms from './more/Allrooms'
import { useNavigate } from 'react-router-dom'
import Allroomsolevel from './more/Allroomsolevel'
const SittingPlan = () => {
   const [waitings, setWaitings] = useState(false);
   const [waitings2, setWaitings2] = useState(false);
    const {user} = useContext(AuthContext);
    const openItsMODAL = () =>{
      
        const modal = document.getElementById("exampleModal");
        window.$(modal).modal('show')
    }
    const elvsss = async () => {
      let roomNumber = 1;
      const baseURL = "http://localhost:8080/sihs/virtual_class/alevel.php?";
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
          const url = roomNumber === 1 ? `${baseURL}room=room1` : `${baseURL}room=room${roomNumber}`;
          response = await axios.get(url);
    
         
          console.log(response.data);
    
          if (typeof response.data === "string" && response.data.includes("Fatal error")) {
            // Stop the program if the specific error message is returned
            toast.success("The sitting plan has been set successfuly. Check if it meets your expectation");
      
            setTimeout(() => {
              setWaitings(false);
            }, 2000);
            break;
          }
    
          roomNumber++;
    
        
        } catch (error) {
          console.log(error);
          break;
        }
      }
    };
    
    const clear = async () => {
      try {
        const response = await axios.get("http://localhost:8080/sihs/controll.php?clear");
        const data = response.data;
         console.log(data)
        if(data==true){
          toast.info("ALL ROOMS ARE CLEARED. YOU HAVE TO GENERATE NEW SITTING PLAN.")
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };




    /////////////////////////////////////////////////////////
    /////////////////////////

    const olevel = async () => {
      let roomNumber = 1;
      const baseURL = "http://localhost:8080/sihs/virtual_class/olevel.php?";
      let response = null;
    
      const confirmation = confirm("DO YOU REALLY WANT TO GENERATE A NEW SITTING PLAN FOR ALEVEL.");
    
      if (!confirmation) {
        console.log("no");
        return;
      }
    
      console.log("yes");
      setWaitings2(true);
    
      while (true) {
        try {
          const url = roomNumber === 1 ? `${baseURL}room=room1` : `${baseURL}room=room${roomNumber}`;
          response = await axios.get(url);
          if (typeof response.data === "string" && response.data.includes("Fatal error")) {
            // Stop the program if the specific error message is returned
            toast.success("The sitting plan has been set successfuly. Check if it meets your expectation");
            setTimeout(() => {
              setWaitings2(false);
            }, 2000);
            break;
          }
    
          roomNumber++;
    
        
        } catch (error) {
          console.log(error);
          break;
        }
      }
    };
    //////////////////////////
    const navigation = useNavigate();
    const clearo = async () => {
      try {
        const response = await axios.get("http://localhost:8080/sihs/controll.php?clearolevel=www");
        const data = response.data;
     
        if(data ==1){
          toast.info("ALL O LEVEL ROOMS ARE CLEARED, YOU HAVE TO RE GENARATE AGAIN NEW SITTING PLAN.")
        }
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
                  <li class="nav-item"><a onClick={()=>navigation("/Dashboard")} href="#" class="nav-link">Home</a></li>
              

                  <li class="nav-item"><a href="#"  class=" btn btn-primary rounded-pill  text-light" aria-current="page">Sitting Plan</a></li>
         
                  <li class="nav-item">  {user.profile ?
                    <>

                    </>
                    :
                    <>
                      <img src='https://img.freepik.com/premium-vector/3d-boy-cartoon-character-head-with-headphones-social-network-profile-vector-illustration_480270-393.jpg?w=2000' className='rounded-pill mx-2' style={{ width: 40, height: 40 }} />
                    </>
                  } <span className='text-primary fw-bold'>{user.firstname}{user.username}</span> </li>
                </ul>
              </>
              :

              <>
                <ul class="nav nav-pills">
                  <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Class</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Chat</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Sitting Plan</a></li>
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
          }

        </header>
      </div>
      <div className='container'>
      <div className=''>
        <center>
            <h3 className='fw-bold text-success'>GENERATE NEW SITTING PLAN</h3>
        </center>
                
                
            </div>
        <div className='d-flex justify-content-center' >
            
            <div className='my-3'>
            {waitings2 ? 
              <>
               <button class="btn btn-primary mx-3 rounded-pill py-2 px-3" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm " role="status" aria-hidden="true"></span>
  <span className='fw-bold' style={{marginLeft:3}}>Generating the plan...</span>
</button>
<p className='text-success'>Bear with us as it may take few seconds.</p>
              </>
              :
            <>
              <button onClick={olevel} className='mx-3 rounded-pill py-2 px-3'>GENERATE FOR O'LEVEL</button>
            </>
            }
            </div>
            <div className='my-3'>
              {waitings ? 
              <>
               <button class="btn btn-primary mx-3 rounded-pill py-2 px-3" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm " role="status" aria-hidden="true"></span>
  <span className='fw-bold' style={{marginLeft:3}}>Generating the plan...</span>
</button>
<p className='text-success'>Bear with us as it may take few seconds.</p>
              </>
              :
            <>
              <button onClick={elvsss} className='mx-3 rounded-pill py-2 px-3'>GENERATE FOR A'LEVEL</button>
            </>
            }
              
            </div>
        </div>
      </div>
    
    </div>

    <div className='container'>
      <center>
        <button onClick={clearo} className='btn btn-primary rounded-pill mx-4'>CLEAR O' LEVEL</button>
        <button  onClick={clear} className='btn btn-primary rounded-pill my-4'>CLEAR A' LEVEL</button>
      </center>
      <center>
       <p className='text-muted' style={{fontSize:30}}>When you finish generating all data can be shown here.</p>
      </center>
    
        <Allrooms />
        <Allroomsolevel />
  

    </div>
    <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </>
  )
}

export default SittingPlan