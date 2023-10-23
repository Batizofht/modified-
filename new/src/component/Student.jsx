import axios from 'axios';
import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../ahook/Auth';

const Student = () => {
  const [studeid, setStudi] = useState("");
  const [passwords,SetPasswords] = useState('')
  const [showPassField,SetShowPassField] = useState(false);
  const [showText,SetShowText] = useState(false)
  const {logged} = useContext(AuthContext)
  const navigate = useNavigate();

  function togglePassword (e) {
    e.preventDefault()
    SetShowText(prevShowPassword => !prevShowPassword);
    
    var inputField = document.getElementsByClassName("passInput")[0]
    var inputbutton = document.getElementsByClassName("showedPass")[0]

    if(inputField.type === "password") {
        inputbutton.textContent = "Hide"
    } else {
        inputbutton.textContent = "Show"    
    }
}

  const changezabaye = (e) =>{

   setStudi(e.target.value) ;
  }

  const apassword = (e) => {
    SetPasswords(e.target.value)
  }

  const contiue = async(e) =>{
    e.preventDefault();
    // console.log(studeid);
    if(!studeid){
      toast.error("THE STUDENT ID CAN'T BE EMPTY");
    }else{
    try{
      const response =
      await axios.post("http://localhost:8080/project/phpbackened/controll.php", 
      {
        studeid: studeid,
        what: "POST",
        password:null,
      }
      ,
      {
        headers: {
          'Content-Type': 'application/json'
        }
    })

      // console.log(response.data)
      if(typeof response.data=== 'number'){
        toast.success("LOGED IN SUCCESSFULL");
        
     
        
        localStorage.setItem("users", JSON.stringify(response.data));
      
        location.href="/"
       const nownow = (response.data);
        logged(nownow);

      }
      else if (typeof response.data === "boolean") {
        e.preventDefault();
        console.log(response.data)
        toast.info("You already have a password. Please Enter Your Password")
        SetShowPassField(true)
      }
      else{
        toast.error("USER DOESN'T EXIST. PLEASE MAKE SURE YOU ARE REGISTERED AS A SIHS STUDENT");
      }
      console.log(response.data)
    }catch(error){
      toast.error(error);
      console.log(error)
    }
    }
  }
  const nowcontinue = async (e) => {
    try{
      const response =
      await axios.post("http://localhost:8080/project/phpbackened/controll.php", 
      {
        studeid: studeid,
        what: "POST",
        ispassword:"yes",
        password:passwords,
      }
      ,
      {
        headers: {
          'Content-Type': 'application/json'
        }
    })

      // console.log(response.data)
      if(typeof response.data=== 'number'){
        toast.success("LOGED IN SUCCESSFULL");
        
     
        
        localStorage.setItem("users", JSON.stringify(response.data));
      
        location.href="/"
       const nownow = (response.data);
        logged(nownow);

      }
      else if (typeof response.data === "string") {
        e.preventDefault();
        toast.error("Double-check your password.")
      }
      else{
        toast.error("USER DOESN'T EXIST. PLEASE MAKE SURE YOU ARE REGISTERED AS A SIHS STUDENT");
      }
    }catch(error){
      toast.error(error);
      console.log(error)
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

        
        <div className="alert alert-info alert-dismissible fade show text-center" role="alert">
  <strong>Hill students!!</strong> Use your student id and only write the numbers on it eg SH039 write 39 or SH420 write 420.
  <br />
  <p>If you meet any challenge contact the school developers or approach them at school.</p>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>


        <div className="d-flex   justify-content-center ">
            
         
       
        
            <div className='text-center'>
                     <p className='fw-bold text-primary'>STUDENT ID</p>
                </div>
  </div>
    <div className="d-flex  flex-column justify-content-center align-items-center">
            
         
    
  <input onChange={changezabaye}  type="text" 
  value={studeid} className="form-control ifomo my-2" placeholder="If you are a student write in your ID" 
  aria-label="Recipient's username" aria-describedby="basic-addon2" />
 <div style={{opacity: showPassField ? '1': '0' , position: showPassField ? 'relative' : 'absolute', transition: 'opacity 0.5s ease' , bottom: showPassField ? ' ' : '-10em'}}
   className="d-flex  flex-column justify-content-center align-items-center w-100">
 <input type={showText ? "text" : "password"} placeholder='Enter your password' className='form-control ifomo my-2 passInput' 
 onChange={apassword}  value={passwords} aria-label="Student's password"/>
    <button className="showedPass" onClick={togglePassword}>Show</button>
</div>
 </div> 
<div className="d-flex   justify-content-center ">
            
         
       
        
        
  <div className='text-center'>
                 <a className='btn btn-primary my-4 rounded-pill py-2' onClick={ showPassField ? nowcontinue : contiue} >{showPassField ? 'LOGIN' : 'CONTINUE'}</a>
            </div>
</div> 



    </div>
    <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </div>
  )
}

export default Student