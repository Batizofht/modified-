import React from 'react'
import { AuthContext } from '../ahook/Auth'
import timelog from "../assets/5593982.png"
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import DocumentViewer from './Lete';

export const Sec = () => {
  const [selectedFilesu, setSelectedFilesu] = useState(null);
  const [clickedsu , setClickedsu] = useState(false);


  const handleFileChangesu = (event) => {
    const file = event.target.files[0];
    setSelectedFilesu(file);
 
      setClickedsu(true);
   

  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  const uploadtimesu = async() =>{
    const theit = new FormData();

    theit.append("file", selectedFilesu);
    theit.append("insertnewtimetable", "yes");
    theit.append("date", formattedDate);
    try{

      const resp = await axios.post('http://localhost:8080/project/phpbackened/upssu.php',theit);
      // console.log(selectedFile)
      console.log(resp.data)
   toast.success(resp.data);
   setClickedsu(false);

    }catch(error){
      console.log(error)
    }
  }

  const {user} = useContext(AuthContext)
  return (
    <div>

<center>
              <div>
                   <h4 className='text-success'>UPDLOAD A NEW TIMETABLE SUPERVISER</h4>
              </div>
            
            </center>
            <div className="upload">
      <label htmlFor="fileInputw" className="upload-button">
      <i style={{fontSize: 70}} className="bi bi-cloud-arrow-up "></i>
      </label>
      <input
        id="fileInputw"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChangesu}
      />
    
   
    </div>
        {selectedFilesu && (

        <div className="file-details">
          <center>
               <p>Selected file: {selectedFilesu.name}</p>
          <p>File size: {selectedFilesu.size} bytes</p>
          </center>
       
        </div>
      )}     
          
             
 <center>
  {clickedsu &&<button onClick={uploadtimesu} className='btn btn-primary rounded-pill fs-3 fw-bold my-4'>UPLOAD</button>}
 
  </center> 

  <DocumentViewer />

    </div>
  )
}

export default Sec