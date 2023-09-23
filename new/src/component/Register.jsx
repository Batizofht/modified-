import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ahook/Auth';


const Register = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conp, setConp] = useState('');
  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');

  const navigation = useNavigate();
  const location = useLocation();
  const params = location.state;
  const {logged} = useContext(AuthContext)
  useEffect(() => {
    if (params) {
      
    }else{
      navigation('/Schoolcode');
    }
  }, []);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if(phone && password && fname && sname && conp){
      if(password == conp ){
        if(password.length >= 6){
        
       
    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('sname', sname);
    formData.append('phone', phone);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8080/project/phpbackened/regi.php', formData);
      console.log(response.data);

      if (response.data === 'exists') {
        toast.error('User already exists');
      } else if (typeof response.data =='number') {
        toast.success("LOGED IN SUCCESSFULL");
        console.log(response.data)
        setTimeout(() =>{

        
        localStorage.setItem("admin", JSON.stringify(response.data));
       
        location.href="/"
       
        const nownow = (response.data);
        logged(nownow);
      },3000)
      }
    } catch (error) {
      console.log(error);
    }
  }else{
    toast.error("PASSWORD SHOULD BE ATLEAST OF MORE THAN SIX CHARACTERS")
  }
}else{
  toast.error("PASSWORD AND CONFIRM PASSWORD DOESNT MUCH")
}
}else{
toast.error("NO FIELED SHOULD BE EMPT")
}
  };
const paramss = params.okay;
  return (
<div className="container">
  <div className="row justify-content-center align-items-center customers">
    <div className="col-12 col-md-6">
      {/* <h1>{paramss}</h1> */}
      <h1 className="fs-2 my-2 text-muted fw-bold">New Account Register</h1>
      <form className='form-control' action="">
      <div className="form-floating mb-3">
        <input
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          type="text"
          className="form-control"
          id="floatingFirstName"
          placeholder="First Name"
        />
        <label htmlFor="floatingFirstName">First Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          value={sname}
          onChange={(e) => setSname(e.target.value)}
          type="text"
          className="form-control"
          id="floatingLastName"
          placeholder="Last Name"
        />
        <label htmlFor="floatingLastName">Last Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          className="form-control"
          id="floatingPhone"
          placeholder="Phone"
        />
        <label htmlFor="floatingPhone">Phone</label>
      </div>
      <div className="form-floating mb-3">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input
          value={conp}
          onChange={(e) => setConp(e.target.value)}
          type="password"
          className="form-control"
          id="floatingConfirmPassword"
          placeholder="Confirm Password"
        />
        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
      </div>

      <button className="btn btn-primary my-2 rounded-pill p-3" onClick={handleSubmit}>
        CONTINUE
      </button></form>
    </div>
    <div className="col-12 col-md-3 hidden">
      <h1>EDUCATION BRINGS JOY</h1>
    </div>
  </div>
  <ToastContainer className="Toastify__toast-container--top-center" />
</div>

  );
};

export default Register;
