import React from 'react'
import { AuthContext } from '../ahook/Auth'
import timelog from "../assets/5593982.png"
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import DocumentViewer from './Let';
import Sec from './Sec';
export const Timetables = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [clicked , setClicked] = useState(false);
  const [loading, setThel] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
 
      setClicked(true);
   

  };
  const navigation = useNavigate();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  const uploadtime = async() =>{
    const theit = new FormData();

    theit.append("file", selectedFile);
    theit.append("insertnewtimetable", "yes");
    theit.append("date", formattedDate);
    try{

      const resp = await axios.post('http://localhost:8080/sihs/upssss.php',theit);
      // console.log(selectedFile)
      console.log(resp.data)
   toast.success(resp.data);
   setClicked(false);

    }catch(error){
      console.log(error)
    }
  }

  const {user} = useContext(AuthContext)
  return (
    <div className='container'>
          <div class="container">
        <header class="d-flex justify-content-center py-3">
          {
            user.admintype === "DM" ?
              <>
                <ul class="nav nav-pills">
                  <li onClick={()=>navigation("/Dashboard")} class="nav-item"><a href="#" class="nav-link">Home</a></li>
             

                  <li class="nav-item"><a href="#"  class=" nav-link" aria-current="page">Sitting Plan</a></li>
                
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
                <ul class="nav nav-pills">
                  <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li>
          
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
        <div className='d-flex justify-content-center '>
          <div>
            <h1 className='fw-bold text-primary fs-5'>TIME TABLE SPACE</h1>
           
  
    {user.admintype =='DM' &&<>
      <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
      >
        Exam timetable
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false"
      >
        Supervise
      </button>
    </li>
 

  
  </ul></>}
          
          </div>

        </div>
        <div className='d-flex justify-content-center '>
          <div>
          
            {user.admintype == 'DM' && 
            <>
           

            </>
            } 
          </div>
 
        </div>
      
      {
        user.admintype == "DM" ?  <>
  <div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <center>
              <div>
                   <h4 className='text-success'>UPDLOAD A NEW TIMETABLE</h4>
              </div>
            
            </center>
            <div className="upload">
              
            <center>
            <label htmlFor="fileInput" className="upload-button">
      <i style={{fontSize: 70}} className="bi bi-cloud-arrow-up "></i>
      </label>
      <input
        id="fileInput"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div className="file-details">
          <center>
               <p>Selected file: {selectedFile.name}</p>
          <p>File size: {selectedFile.size} bytes</p>
          </center>
       
        </div>
      )}
            </center>
      
    </div>
          
            <br />
             
 <center>
  {clicked &&<button onClick={uploadtime} className='btn btn-primary rounded-pill fs-3 fw-bold my-4'>UPLOAD</button>}
 
  </center> 
  <DocumentViewer />
  

  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <center>
    <Sec />
    </center>
   
  </div>
  
</div>
</> : <>
      
        <DocumentViewer />
        </>
      }
      </div>
      <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
    </div>
  )
}
