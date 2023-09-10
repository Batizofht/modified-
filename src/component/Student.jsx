import axios from 'axios';
import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../ahook/Auth';

const Student = () => {
  const [studeid, setStudi] = useState("");
 const {logged} = useContext(AuthContext)
  const navigate = useNavigate();
  const changezabaye = (e) =>{

   setStudi(e.target.value) ;
  }
  const contiue = async(e) =>{
    e.preventDefault();
    // console.log(studeid);
    if(!studeid){
      toast.error("THE STUDENT ID CAN'T BE EMPTY");
    }else{
    try{
      const response = await axios.post("http://localhost:8080/sihs/controll.php", {
        studeid: studeid,
        what: "POST",
      }
      ,
      {
        headers: {
          'Content-Type': 'application/json'
        }
    })

      // console.log(response.data)
      if(typeof response.data==='number'){
        toast.success("LOGED IN SUCCESSFULL");
     
        
        localStorage.setItem("users", JSON.stringify(response.data));
      
        location.href="/"
       const nownow = (response.data);
        logged(nownow);

      }else{
        toast.error("USER DOES'NT EXISTS. PLEASE MAKE SURE YOU ARE RESGISTERED AS A SAINT IGNATIUS HIGH SCHOOL");
      }
    }catch(error){
      toast.error(error);
      console.log(error)
    }
    }
  }
  const text = "Welcome Student. Continue with your ID";
  return (
    <div>
      <div className='container'>
        <div className="d-flex   justify-content-center my-5" style={{width: "100%"}}>
            <div className='text-center' >
                <div className='d-flex' style={{borderBottom:""}}>
                     <h1  className='text-primary fw-bold welcome'>
                    {text} 
                     </h1>
                     <i style={{fontSize:30,marginInline:20,marginTop:-10,transform: 'rotate(316deg)'}} className='bi bi-pencil text-success'></i>
                </div>
                <div>
                    
                </div>
            <p className='fw-bold'> <span></span> Your beyond class in one portal</p>
            


            </div>
           
        </div>

        
        <div class="alert alert-info alert-dismissible fade show text-center" role="alert">
  <strong>Hill students!!</strong> Use your student id and only write the numbers on it eg SH039 write 39 or SH420 write 420.
  <br />
  <p>If you meet any challenge contact the school developers or approach them at school.</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>


        <div className="d-flex   justify-content-center ">
            
         
       
        
            <div className='text-center'>
                     <p className='fw-bold text-primary'>STUDENT ID</p>
                </div>
  </div>
    <div className="d-flex   justify-content-center ">
            
         
       

  <input onChange={changezabaye}  type="text" value={studeid} class="form-control ifomo" placeholder="If you are a student write in your ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
 
</div> 
<div className="d-flex   justify-content-center ">
            
         
       
        
        
  <div className='text-center'>
                 <a className='btn btn-primary my-4 rounded-pill py-2' onClick={contiue} href=''>CONTINUE</a>
            </div>
</div> 



    </div>
    <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </div>
  )
}

export default Student