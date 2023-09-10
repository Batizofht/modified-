import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
 
const Schoolcode = () => {
    const [code, setCode]=useState("");
const navigation = useNavigate();
        const tome =()=>{
        
                axios.get(`http://localhost:8080/sihs/regi.php?getcode=${code}`).then(
                    function(response){
                        
                        console.log(response.data);
                        if(response.data ===1){
                            const params = {okay: 'yes' };
                          
                              navigation("/Register", {state : params});
                        }else{
                            toast.warning("WAIT ARE U A MEMBER OF SIHS? YOU CAN'T ENTER IF YOU HAVE NO CODE.")
                        }
                      
                    }
                ).catch(function(error){
                    console.log(error)
                })
            
       
            }
  
  return (
    <div  className='container'>
        <center>
            <h1>To proove that you are a member of Jesuits School Community at SIHS write in school code.</h1>
            <input style={{width:"50%"}} value={code} onChange={(e)=>setCode(e.target.value)} className='form-control' type="text" placeholder='Write in the school code' />
            <button onClick={tome} className='btn btn-primary rounded-pill my-4'>DONE</button>
        </center>
        <ToastContainer className="Toastify__toast-container--top-center" />
    </div>
  )
}

export default Schoolcode