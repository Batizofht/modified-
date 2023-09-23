import axios from 'axios';
import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../ahook/Auth';

const Adminslogin = () => {
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
      const response = await axios.post("http://localhost:8080/project/phpbackened/admin.php", {
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
  const text = "Welcome Admin. Continue with your phone and password";
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

        <div className="">
            
        <center>
       <div className='pmpm'  style={{width:"100%",height:"35vh"}}>
        <div className='text-center'>
                 <p className='fw-bold text-primary'>Admin's email and password</p>
            </div>
            <div className="">
  <input type="text" className="form-control ifomo" name='phone' id="floatingInput" onChange={chanes} value={admin.phone} placeholder="Phone number"/>

</div>
<div className=" my-3">
  <input type="password" className="form-control ifomo" name='password' onChange={chanes} id="floatingInput"  value={admin.password}  placeholder="Password"/>

</div>
  <div className='text-center'>
                 <a className='btn btn-primary my-4 rounded-pill py-2' onClick={contiue} href=''>CONTINUE</a>
            </div>
</div> 
       </center>
       <center>
       <div className='dndn' style={{width:"100%",height:"35vh"}}>
        <div className='text-center'>
                 <p className='fw-bold text-primary'>Admin's email and password</p>
            </div>
            <div className="form-floating mb-3">
  <input type="text" className="form-control ifomo" name='phone' id="floatingInput" onChange={chanes} value={admin.phone} placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control ifomo" name='password' onChange={chanes} id="floatingInput"  value={admin.password}  placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Teacher's Password</label>
</div>
  <div className='text-center'>
                 <a className='btn btn-primary my-4 rounded-pill py-2' onClick={contiue} href=''>CONTINUE</a>
            </div>
</div> 
       </center>  
       
        </div>
    </div>
    <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </div>
  )
}

export default Adminslogin