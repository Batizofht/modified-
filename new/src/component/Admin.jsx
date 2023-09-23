import React, { useState } from 'react'
import axios from 'axios'
import './ADMIN/adim.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin = () => {
  const [formData, setFormData] = useState({
    class: '',
    stream: '',
    file: null
  });
const [cli, setCli] = useState(false);
  const handleChange = (event) => {
    if (event.target.name === 'file') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event) => {
   
    event.preventDefault();
   setCli(true)
    const formDatas = new FormData();
formDatas.append('class', formData.class);
formDatas.append('stream', formData.stream);
formDatas.append('file', formData.file);
formDatas.append("STUDENTS","yes")

    axios
      .post('http://localhost:8080/sihs/insert.php', formDatas)
      .then(response => {
        // Handle successful response
        console.log(response.data)
        if(response.data ==1){
          console.log(response.data)
          setCli(false);
          toast.success("THE STUDENTS ARE SUCCESSFULLY UPLOADED")
        }else{
          setCli(false);
          toast.error("THEY HAVE BEEN AN ERROR IN UPLOADING STUDENTS")

        }
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

// console.log(formData);
  return (
    <>
   
    <div className='d-flex justify-content-center'>
      <form className='form-control thegaform' style={{width:"50%"}} onSubmit={handleSubmit} encType="multipart/form-data" method='POST'>
        <div>
        <div class="mb-3">
          <center>
            <label for="formFile" class="form-label text-primary fs-3 fw-bold ">ADMIN ADD STUDENTS</label>
          </center>
  
  <input class="form-control" onChange={handleChange} name="file" type="file" id="formFile" />
</div>
           
        </div>
       
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput"  name="class" onChange={handleChange}  placeholder="class" />
  <label for="floatingInput">Class</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword"  name="stream" onChange={handleChange}  placeholder="stream" />
  <label for="floatingPassword">Stream</label>
</div>
       <center className=''>
  
          <button disabled={cli}   className='btn btn-primary my-3 rounded-pill px-4 d-flex' type="submit" value="UPLOAD">      {cli && <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>} <span className='fs-4 px-2 fw-bold'> UPLOAD STUDENTS</span></button>
       </center>
      
      </form>

      <center> <ToastContainer className="Toastify__toast-container--top-center" /></center>
     
    </div> 
    </>
  );
};

export default Admin;
