import React, { useContext, useState } from 'react';
import { AuthContext } from '../ahook/Auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Allrooms from './more/Allrooms';

const Dashboard = () => {
  const [time] = useState(new Date().getDate());
  const [thedate] = useState(new Date().getHours());
  const [thedatem] = useState(new Date().getMinutes());
  const [thedatems] = useState(new Date().getSeconds());
  const [daymo] = useState(new Date().getDay());

  const location = useLocation();
  const pathName = location.pathname;
  const navigation = useNavigate();
  console.log(pathName);

  const { user } = useContext(AuthContext);

  const chifg = () => {
    navigation('/SittingPlan');
  };
  return (
    <div className='container' >
      <div class="container" >
        <header class="d-flex justify-content-center py-3">
          {
            user.admintype === "DM" ?
              <>
                <ul class="nav nav-pills">
                  <li class="nav-item"><a href="#" class=" btn btn-primary rounded-pill  text-light" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Announcement</a></li>

                  <li class="nav-item"><a href="#" class="nav-link">Sitting Plan</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Notification</a></li>
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
                  <li class="nav-item"><a href="#" class=" btn btn-primary rounded-pill  text-light" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Class</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Chat</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Sitting Plan</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Notification</a></li>
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

      <div className='d-flex justify-content-center'>
        <form className='form-control b-none' style={{ width: "70%", border: "none" }}>
          <center></center>
          <div class="form-floating mb-3">

            <input type="email" class="form-control mydashforminput" id="floatingInput" placeholder="name@example.com" />
            <label style={{ color: "blue", marginInline: 40 }} for="floatingInput">SEARCH OR CLICK /.  </label>
            <i style={{ position: "absolute", top: 10, left: 20 }} className='bi bi-search fs-3 h3-primary text-primary'></i>
          </div>
        </form>
      </div>
      {/* main */}
      <div>
        <div className='container'>
          {
            user.admintype == "DM" ?
              <>
                <h3 style={{ fontSize: 20 }} className='text-success'>THE BEYOND SCHOOL.</h3>
              </>
              :
              <>
                <h3 style={{ fontSize: 30 }} className='text-success'>Your class is: {user.streams}</h3>
              </>
          }

          {time >= 0 && time < 12 ?
            <>
              <h3 style={{ color: "blue", fontSize: 30, fontWeight: "bold", marginBottom: 20, marginHorizontal: 20 }}>Good morning {user.firstname}, {user.secondname}{user.username}. How are you doing. Hope morning is better for you.</h3>
            </>
            :
            <>
              {time >= 12 && time <= 16 ?
                <>
                  <h3 style={{ color: "blue", fontSize: 30, fontWeight: "bold", marginBottom: 20, marginHorizontal: 20 }}>Good afternoon {user.firstname}, {user.secondname}{user.username}. Where do you want to go this afternoon.</h3>
                </>
                :
                <>
                  <h3 style={{ color: "blue", fontSize: 30, fontWeight: "bold", marginBottom: 20, marginHorizontal: 20 }}>Good Evining {user.firstname}, {user.secondname}{user.username}. How are you doing. Hope evening is better for you.</h3>
                </>
              }
            </>
          }


        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='card carddahs'>
            <div className='card-body'>
              <div className='content'>
                <h4><span className='badge '><i className='bi bi-lightbulb-fill ' style={{ color: "black", fontSize: 20 }}></i></span> What's new</h4>


              </div>
            </div>

          </div>

        </div>
        <div className='col'>
          <div className='card carddahs'>
            <div className='card-body'>
              <div className='content'>
                {user.admintype === "DM" ?
                  <>
                    <h4> <i className='bi bi-book-half'></i> New sitting plan</h4>
                    <span className='badge text-bg-danger rounded-pill fs-5' style={{ position: "absolute", right: 0, top: 0 }}>3</span>
                    <p>Non of sitting plan confirmed. Confirm it to be visible or you can click the below.</p>
                    <center>
                      <button onClick={chifg} className='btn btn-primary rounded-pill fw-bold p-3'>GENERATE NEW SITTING PLAN </button>
                    </center>
                  </>
                  :
                  <>
                    <h4> <i className='bi bi-book-half'></i> Class works </h4>
                    <span className='badge text-bg-danger rounded-pill fs-5' style={{ position: "absolute", right: 0, top: 0 }}>6</span>
                  </>
                }
             
              </div>
            </div>

          </div>
        </div>
        <div className='col'>
          <div className='card carddahs'>
            <div className='card-body'>
              <div className='content'>

                <h4><i className='bi bi-calendar-range'></i> School Calendar</h4>
                <h1>{thedate}:{thedatem}:{thedatems}</h1>
              </div>
            </div>

          </div>
        </div>

        
      </div>
   
    <div className='container'  >
      <div className=''>
        <div>
          <center>
             <h3 className='py-2 text-muted'>Your Calendar Calendar</h3>
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
        onChange={setTheactivedate}  value={theactivedate}/>
        </div>
       
      </div>
     
    </div>

  <Allrooms />
    </div>
  )
}

export default Dashboard