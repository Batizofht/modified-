import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ahook/Auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Allrooms from './more/Allrooms';
import Allroomsolevel from './more/Allroomsolevel';

const Dashboard = () => {
  const [time, setTime] = useState(new Date().getHours());
  const [positions, setPositions] = useState([]);
  const [thedate, setThedate] = useState(new Date().getHours());
  const [thedatem, setThedatem] = useState(new Date().getMinutes());
  const [thedatems, setThedatems] = useState(new Date().getSeconds());
  const [days, setDays] = useState(new Date().getDay());
  const location = useLocation();
  const [tora, setTora] = useState(0);
  const pathName = location.pathname;
  const navigation = useNavigate();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  const [theactivedate, setTheactivedate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      setThedate(hours);
      setThedatem(minutes);
      setThedatems(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chifg = () => {
    navigation("/SittingPlan");
  };
  const {user} = useContext(AuthContext);
const plans = () =>{
  if(user.user_type=="DN"){
  }else{
    navigation("/Plan")
  }
}
  useEffect(() => {
    const inte = setInterval(()=>{
    const fetchDatas = async () => {
      if(user.lelel =='A'){
        try {
          // const theid = (user.student_id);
  
          const response = await axios.get(`http://localhost:8080/project/phpbackened/controll.php?check=${user.student_id}`);
          setPositions(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }else{
        try {
          // const theid = (user.student_id);
  
          const response = await axios.get(`http://localhost:8080/project/phpbackened/controll.php?checko=${user.student_id}`);
          setPositions(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
   
    };

    fetchDatas();
  },2000)

 
  return () =>{ clearInterval(inte)}
  }, []);

  useEffect(() => {
    const inteto = setInterval(()=>{
    const fetchDatass = async () => {
      try {
        // const theid = (user.student_id);
        const response = await axios.get(`http://localhost:8080/project/phpbackened/controll.php?totalsss=students`);
        setTora(response.data);
        console.log(response.dtat);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDatass();
  },2000)
  return () =>{ clearInterval(inteto)}
}, []);
  return (
    <div className='container'>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
        {
            user.admintype === "DM" ?
              <>
                <ul class="nav nav-pills">
                  <li class="nav-item"><a href="#" class="btn btn-primary rounded-pill">Home</a></li>
              

                  <li class="nav-item"><a href="#" onClick={()=>navigation("/SittingPlan")}  class=" nav-link " aria-current="page" >Sitting Plan</a></li>
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
                <ul className="nav nav-pills">
                  <li  class="nav-item"><a  href="#"  className='btn btn-primary rounded-pill  text-light ' aria-current="page">Home</a></li>
                 
                
                  <li  className="nav-item mx-3">  {user.profile ?
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
      <div class="alert alert-info alert-dismissible fade show text-center" role="alert">
  <strong>Hii users!!!</strong> Soon you will be able to add your profile picture. And able to search your class mate, teacher etc.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <div className='d-flex justify-content-center'>
        <form className='form-control b-none' style={{ width: "70%", border: "none" }}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control mydashforminput" id="floatingInput" placeholder="name@example.com" />
            <label style={{ color: "blue", marginInline: 40 }} htmlFor="floatingInput">SEARCH OR CLICK /.  </label>
            <i style={{ position: "absolute", top: 10, left: 20 }} className='bi bi-search fs-3 h3-primary text-primary'></i>
          </div>
        </form>
      </div>

      <div>
        <div className='container'>
          {user.admintype === "DM" ?
            <h3 style={{ fontSize: 20 }} className='text-success'>THE BEYOND SCHOOL.</h3> :

            <>
            {user.admintype === "TR" ? <>
            <h3 style={{ fontSize: 30 }} className='text-success'>You are a teacher.</h3>
            </> : <>
            <h3 style={{ fontSize: 30 }} className='text-success'>Your class is: {user.streams}</h3>
            </>}
            </>
            
          }

          {time >= 0 && time < 12 ?
            <h3 style={{ color: "blue", fontSize: 30, fontWeight: "bold", marginBottom: 20, marginHorizontal: 20 }}>
              Good morning {user.firstname}, {user.secondname}{user.username}. Get ready to embark on an incredible journey filled with knowledge, inspiration, spiritual and fun..
            </h3> :
            time >= 12 && time <= 16 ?
              <h3 style={{ color: "blue", fontSize: 30, fontWeight: "bold", marginBottom: 20, marginHorizontal: 20 }}>
                Good afternoon {user.firstname}, {user.secondname}{user.username}. Where do you want to go this afternoon?
              </h3> :
              <h3 style={{ color: "blue", fontSize: 30, fontWeight: "bold", marginBottom: 20, marginHorizontal: 20 }}>
                Good evening {user.firstname}, {user.secondname}{user.username}. How are you doing? Hope evening is better for you.
              </h3>
          }
        </div>
      </div>
      <div className='row'>
  <div className='col-md-4'>
    <div className='card carddahs'>
      <div className='card-body'>
        <div className='content'>
          <h4>
            <span className='badge'>
              <i className='bi bi-lightbulb-fill' style={{ color: "black", fontSize: 20 }}></i>
            </span> What's new
          </h4>
          {positions.length !== 0 && (
            <div className='alert alert-info' style={{ marginBottom: 4 ,height:60,padding:-100}}>
              <p style={{ fontWeight: "bold" }}>The sitting plan is available.</p>
              <p style={{ textDecoration: "underline", color: "red", cursor: "pointer",marginTop:-20 }} onClick={() => navigation("../Plan")}>Check it.</p>
            </div>
          )}
          <div className='alert alert-danger' style={{ marginBottom: 4 ,height:60,padding:-100}}>
            <p style={{ fontWeight: "bold", color: "white" }}>Exams coming soon?</p>
            <p style={{ textDecoration: "underline", color: "green", cursor: "pointer",marginTop:-20     }}>Are you ready.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='card carddahs'>
      <div className='card-body'>
        <div className='content'>
          {user.admintype === "DM" ? (
            <>
              <h4> <i className='bi bi-book-half'></i> New sitting plan</h4>
              <span className='badge bg-danger rounded-pill fs-5' style={{ position: "absolute", right: 0, top: 0 }}>{tora}</span>
              <p>None of the sitting plans are confirmed. Confirm them to make them visible or click the button below.</p>
              <div className='text-center'>
                <button onClick={chifg} className='btn btn-primary rounded-pill fw-bold p-2'>
                  GENERATE NEW SITTING PLAN
                </button>
              </div>
            </>
          ) : (
            <>
              {user.admintype === 'TR' ? (
                <>
                  <h4> <i className='bi bi-book-half'></i> Class works Given</h4>
                  <span className='badge bg-danger rounded-pill fs-5' style={{ position: "absolute", right: 0, top: 0 }}>0</span>
                  <p>Seems no class activity available right now.</p>
                </>
              ) : (
                <>
                  <h4> <i className='bi bi-book-half'></i> Class works</h4>
                  <span className='badge bg-danger rounded-pill fs-5' style={{ position: "absolute", right: 0, top: 0 }}>0</span>
                  <p>Seems no class activity available right now.</p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='card carddahs'>
      <div className='card-body'>
        <div className='content'>
          <h4><i className='bi bi-calendar-range'></i> School Calendar</h4>
          <center></center>
          <h5>
            {days === 1 ? "Monday" :
              days === 2 ? "Tuesday" :
                days === 3 ? "Wednesday" :
                  days === 4 ? "Thursday" :
                    days === 5 ? "Friday" :
                      days === 6 ? "Saturday" :
                        "Sunday"
            }
          </h5>
          <h1 className='text-success' style={{ fontSize: 60, marginTop: -15 }}>{thedate}:{thedatem}:{thedatems}</h1>
          <h3>{formattedDate}</h3>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className='container'>
        <div>
          <center>
            <h3 className='py-2 text-muted'>Your Calendar</h3>
          </center>
          <Calendar
            nextLabel='month>>'
            nextAriaLabel='Go to next month'
            next2Label='year>>'
            next2AriaLabel='Go to next year'
            prevLabel='<<month'
            prevAriaLabel='Go to prev month'
            prev2Label='<<year'
            prev2AriaLabel='Go to prev year'
            onChange={setTheactivedate}
            value={theactivedate}
          />
        </div>
      </div>
      {user.admintype == 'DM' && <>
      <Allrooms />
<Allroomsolevel />
      </>}

    </div>
  );
}

export default Dashboard;
