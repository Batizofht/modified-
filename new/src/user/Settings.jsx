import react from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ahook/Auth'
import { useState } from 'react'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



export default function Settings () {
    const{user} = useContext(AuthContext);
    const [newPass,SetNewPass] = useState('');
    const [ogPass,SetOgPass] = useState('');
    const [oldPass,SetOldPass] = useState('')
    const formDatas = new FormData();

    const [showNewPass,SetShowNewPass] = useState(false);
    const [showOgPass,SetShowOgPass] = useState(false);
    const [showOldPass,SetShowOldPass] = useState(false);
    const [showButton,SetShowButton]   = useState(true)
    const [resetPass, IsResetTrue] = useState (false);
    const [showOthers,SetShowOthers] = useState(false)
    

    const updateP = async (e) => {
        e.preventDefault();
        
        const the_id = user.student_id;

        if ( (newPass.trim() === '') || (ogPass.trim()) === '' ) {
            toast.error("Error. Empty fields.")
        }

        else if(newPass !== ogPass ) {
            toast.error("Passwords do not match!");
        }
        
        else if ((newPass === ogPass)&&( newPass.trim() && ogPass.trim() )!== ''){
                if(newPass.length <= 6) {
                    toast.warning("Password must be more than 6 characters ! ")
                }
                else{
            alert("Confirm Password?")
        
            // FORM DATas

            formDatas.append('newPassword',ogPass);
            formDatas.append('id',the_id);
            
            try{
            const response = await axios.post("http://localhost:8080/project/phpbackened/password.php",formDatas);

            console.log(response.data);
            
            if (response.data === 1) {
                toast.success("Password was reset successfully.")
                location.reload();
            } else if(response.data === "2") {
                toast.error("Password reset failed. Try again.")
            }
            
            else if (response.data ==='3') {
                toast.error("Can not update password.")
            }
        } catch (error) {
            console.error("Password reset error: ", error);
            toast.error("An error occurred while resetting your password. Please try again.")
            }
        }
        }


    };

    const checking = async (e) => {
        e.preventDefault();

        const the_old = oldPass;

        if(the_old === user.passwords) {
            SetShowOthers(true)
            toast.success("Success! You can now proceed to changing your password.")
        }else {
            SetShowOthers(false)
            toast.error("Old password does not match! Double-check your old password again.")
        }

    }

function toggleNewPassword (e) {
    e.preventDefault()
    SetShowNewPass(prevShowPassword => !prevShowPassword);
    
    var inputField = document.getElementsByClassName("input-1")[0]
    var inputbutton = document.getElementsByClassName("showP-1")[0]

    if(inputField.type === "password") {
        inputbutton.textContent = "Hide"
    } else {
        inputbutton.textContent = "Show"    
    }
}


    function toggleOgPassword (e) {
        e.preventDefault()
        SetShowOgPass(prevShowPassword => !prevShowPassword);

    var inputField = document.getElementsByClassName("input-2")[0]
    var inputbutton = document.getElementsByClassName("showP-2")[0]

    if(inputField.type === "password") {
        inputbutton.textContent = "Hide"
    } else {
        inputbutton.textContent = "Show"    
    }
    }

    function toggleOldPassword (e) {
        e.preventDefault()
        SetShowOldPass(prevShowPassword => !prevShowPassword);
        
        var inputField = document.getElementsByClassName("input-3")[0]
        var inputbutton = document.getElementsByClassName("showP-3")[0]
    
        if(inputField.type === "password") {
            inputbutton.textContent = "Hide"
        } else {
            inputbutton.textContent = "Show"    
        }
    }

    function Reset() {
        // e.preventDefault()
        IsResetTrue(resetted => !resetted);

        SetShowButton(false);
        setTimeout(() => {
          SetShowButton(null);
        },500);

        // var resetDiv = document.getElementsByClassName("ifReset")[0]
        // var resetButton = document.getElementsByClassName("clickReset")[0]

        
    }

    


    return (
        <>
        <div className="settings">
            <div className="profile border pt-5">
                
                <div className="profiles-1 d-flex">
                 <h2 className="text-primary fw-bold">Profiles Section</h2>
                <div className="pro-icon my-2">
            {user.profile ? 
              <>
          <img src='' />
              </>
              :
              <>
     <img src='https://img.freepik.com/premium-vector/3d-boy-cartoon-character-head-with-headphones-social-network-profile-vector-illustration_480270-393.jpg?w=2000' className='rounded-pill' style={{width:60,height:60}} />
              </>
              }

              
              <small> <a href="#">change profile?</a> </small>
              </div>
              <div className="pro-names mx-3 my-2">
                <h4 className="text-primary my-0">{user.firstname}  {user.secondname}</h4>
                <h6> Class: {user.streams} &nbsp;&nbsp;&nbsp;&nbsp; Id: {user.student_id} </h6>

              </div>
              </div>

              <div className="profiles-2 my-4 w-100 ">
                


                <div className="inputs w-75">

                {
                 user.passwords === '' ? 
                
                <>

                <div className="alert alert-info alert-dismissable text-center fade show w-100" role="alert">
                    Hello Students&#33; 
                New features have arrived, now you can set your own passwords.
                <button type="button" className="btn-close " style={{position: 'absolute', right: '1em'}} data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <div className=" w-75 d-flex justify-content-center ">
                
                <form className='form-control' onSubmit={updateP}  encType="multipart/form-data"
                 style={{ width: "70%", border: "none" }} method="POST">
                
                <div className="form-floating">

                <input value={newPass} onChange= { (e) => SetNewPass(e.target.value) } 
                type={showNewPass ? "text" : "password"} className="form-control my-2 input-1" id="floatingPasswords" placeholder="Password" />
                <label htmlFor="floatingPasswords">New Password</label>
                <span className="show">
                    <button className="showP-1" onClick={toggleNewPassword}>Show</button>
                    </span>
                </div>

                <div className="form-floating">
                <input value={ogPass} onChange= { (e) => SetOgPass(e.target.value) } 
                type={showOgPass ? "text" : "password"} className="form-control my-2 input-2" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Re-Enter Password</label>
                <span className="show">
                    <button className="showP-2" onClick={toggleOgPassword}>Show</button>
                    </span>
                </div>
                    <input type="text" name="id" value={user.student_id} style={{opacity: '0', position: 'absolute', right:'1em', width: '10px'}} 
                    readOnly={true} />
               
                <div className="w-100 d-flex justify-content-center">
          <button type="submit" 
           className="submit-btn btn btn-primary w-auto m-0"  >Submit</button>
           </div>
                </form>
                
                </div>                
                </>
                :
             <>
        {user.passwords !== '' ? 
        <>
        <div style={{height: '50vh'}} className="flex-column d-flex justify-content-center">
    <div className="alert alert-dismissable fade show alert-info text-center w-100 ">Dear User, Your password is already set!
    <button type="button" className="btn-close " style={{position: 'absolute', right: '1em'}} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
                    <div className='d-flex  justify-content-center'>
    {showButton &&  <button className={showButton === null ? 'hidden btn btn-primary w-30 clickReset' : 'btn btn-primary w-30 clickReset'} value={resetPass} onClick={() => setTimeout(Reset,500) } >Click here to reset</button> }
    </div>

        <div className="ifReset" style={{opacity: resetPass ? 1 : 0,transition : 'opacity 1s ease'}} >
            <div className="form-floating mt-1 mb-2 show w-75">
        <input type={showOldPass ? "text" : "password"} value={oldPass} onChange={ (e) =>  SetOldPass(e.target.value) }
         className="form-control input-3" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Old Password</label>
        <span className="show">
    <button className="showP-3" onClick={toggleOldPassword}>Show</button>
    </span>
            </div>
            <div className="d-flex justify-content-center w-75">
            <button className="btn btn-primary" onClick={checking}>Check</button>
            </div>
        </div>
                    

            <div className='ifTrue w-75' style={{display: showOthers ? 'flex' : 'none', flexDirection: showOthers ? 'column' : '' }}>
            
            <form className='form-control w-100 p-0' onSubmit={updateP}  encType="multipart/form-data"
                 style={{ border: "none" }} method="POST">
                
                <div className="form-floating">

                <input value={newPass} onChange= { (e) => SetNewPass(e.target.value) } 
                type={showNewPass ? "text" : "password"} className="form-control my-2 input-1" id="floatingPasswords" placeholder="Password" />
                <label htmlFor="floatingPasswords">Set New Password</label>
                <span className="show">
                    <button className="showP-1" onClick={toggleNewPassword}>Show</button>
                    </span>
                </div>

                <div className="form-floating">
                <input value={ogPass} onChange= { (e) => SetOgPass(e.target.value) } 
                type={showOgPass ? "text" : "password"} className="form-control my-2 input-2" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Re-Enter Password</label>
                <span className="show">
                    <button className="showP-2" onClick={toggleOgPassword}>Show</button>
                    </span>
                </div>
                    <input type="text" name="id" value={user.student_id} style={{opacity: '0', position: 'absolute', right:'1em', width: '10px'}} 
                    readOnly={true} />
               
                <div className="w-100 d-flex justify-content-center">
          <button type="submit" 
           className="submit-btn btn btn-primary w-auto m-0"  >Submit</button>
           </div>
                </form>

            </div>

    </div>
        </>
            :
            <></>
         }
             </>   
            }

        
            </div>
              </div>
            </div>
        </div>

        <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
     
        </>
    )
}