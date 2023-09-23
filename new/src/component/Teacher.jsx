import axios from 'axios';
import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../ahook/Auth';

const Teacher = () => {
  const [admin, setStudi] = useState({
    phone: "",
    password: ""
  });
 const {logged} = useContext(AuthContext)
  const navigate = useNavigate();
  const  chanes= (e) =>{
  
   const {name, value} = e.target;
   setStudi((prevData) =>({...prevData, [name]: value}))
  }
  
console.log(admin)
  const contiue = async(e) =>{
    e.preventDefault();
    // console.log(studeid);
    if(!admin.phone && !admin.password){
      toast.error("NO FIELD SHOULD BE  EMPTY");
    }else{
    try{
      const response = await axios.post("http://localhost:8080/project/phpbackened/adminteacher.php", {
        adminphone: admin.phone,
        adminpass: admin.password,
        ADMIN: "ADMIN",
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
        console.log(response.data)
  
        localStorage.setItem("admin", JSON.stringify(response.data));
       
        location.href="/"
       
        const nownow = (response.data);
        logged(nownow);

      }else{
        toast.error(response.data);

      }
    }catch(error){
      toast.error(error);
      console.log(error)
    }
    }
  }
  const text = "Welcome Teacher. Continue with your email";
  return (
    <div>
      <div className='container'>
        <div className="d-flex   justify-content-center my-5" style={{width: "100%"}}>
            <div className='text-center' >
                <div className='d-flex' >
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

        <div className="d-flex flex-column   justify-content-center my-5 " style={{width: "100%"}}>
            
         

       <center>
       <div className='pmpm'  style={{width:"100%"}}>
        <div className='text-center'>
                 <p className='fw-bold text-primary'>Teacher's email and password</p>
            </div>
            <div class="">
  <input type="text" class="form-control ifomo" name='phone' id="floatingInput" onChange={chanes} value={admin.phone} placeholder="Phone number"/>

</div>
<div class=" my-3">
  <input type="password" class="form-control ifomo" name='password' onChange={chanes} id="floatingInput"  value={admin.password}  placeholder="Password"/>

</div>
  <div className='text-center'>
                 <a className='btn btn-primary my-4 rounded-pill py-2' onClick={contiue} href=''>CONTINUE</a>
                 <br />
                 <Link to='../Schoolcode' className='text-primary'>Register if you have no account.</Link>
            </div>
</div> 
       </center>
       <center>
       <div className='dndn' style={{width:"100%",height:"35vh"}}>
        <div className='text-center'>
                 <p className='fw-bold text-primary'>Teacher's email and password</p>
            </div>
            <div class="form-floating mb-3">
  <input type="text" class="form-control ifomo" name='phone' id="floatingInput" onChange={chanes} value={admin.phone} placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control ifomo" name='password' onChange={chanes} id="floatingInput"  value={admin.password}  placeholder="name@example.com"/>
  <label for="floatingInput">Teacher's Password</label>
</div>

  <div className='text-center' style={{marginBottom:2000}}>
 
                 <a className='btn btn-primary my-4 rounded-pill py-2' onClick={contiue} href=''>CONTINUE</a>
                 <br />
                 <Link to='../Schoolcode' className='text-primary'>Register if you have no account.</Link>
               
            </div>
</div> 
       </center>
       
  
    

</div>

    </div>
    
    
    
    <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </div>
  )
}

export default Teacher