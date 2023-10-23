import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Footer from './component/Footer'
import Register from './component/Register'
import Login from './component/Login'
import Navbar
 from './component/Navbar'
import Error from './component/Error'
import Student from './component/Student'
import Teacher from './component/Teacher'
import About from './component/About'
import { Timetables } from './user/Timetables'
import Dashboard from './user/Dashboard'
import { useContext } from 'react'
import { AuthContext } from './ahook/Auth'
import Nav from './user/Nav'
import Nothing from './user/Nothing'
import Class from './user/Class'
import Exam from './user/Exam'
import Chat from './user/Chat'
import DOS from './user/DOS'
import Admin from './component/Admin'
import Profile from './user/Profile'
import Adminslogin from './component/Admins'
import SittingPlan from './user/SittingPlan'
import Plan from './user/Plan'
import All from './user/All'
import ExPlan from './user/ExPlan'
import Schoolcode from './component/Schoolcode'
import Settings from './user/Settings.jsx';

const Layout = () => {
  return (
    <>
    
      <Navbar />
      
      <Footer />
    </>
  );
};
const Userlayout = () =>{
  const {user} = useContext(AuthContext);
  if(user){
    console.log("okay");
  }
  return(
    <>
   <Nav />
    </>
  )
}
const userrouter = createBrowserRouter([
  {
    path: '/',
    element: <Userlayout />,
    errorElement: <Nothing />,
 
    children: [
      {
        path: "/",
        element: <Dashboard />

      },
      {
         path: "/Dashboard",
         element: <Dashboard />
      },
      {
        path: "/Timetables",
        element: <Timetables />
      },
      {
        path:"/Class",
        element: <Class />
      },
      {
        path:"/Profile",
        element: <Profile />
      },
      {
        path: "/Exam",
        element: <Exam />
      }
      ,
      {
        path: "CHat",
        element: <Chat />
      },
      {
        path: "SittingPlan",
        element: <SittingPlan />
      },
      {
        path: "Plan",
        element: <Plan />
      }
      ,{
        path : "All",
        element : <All />
      },
      {
        path: "ExPlan",
        element: <ExPlan />
      },
      {
        path : "settings",
        element: <Settings />
      },
      {
        path:'ratings',
        element: <DOS />
      }
      // Add more routes for other user-specific components if needed
    ]
  },
 
]);
const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Admins",
        element: <Adminslogin />
      },
      {
        path:"/Home",
        element: <Home />
      }
      ,{
        path: "/Student",
        element:<Student />
      }
      ,
      {
        path: "/Teacher",
        element: <Teacher />
      }
      ,
      {
        path: "Admin",
        element: <Admin />
      }
      ,
      {
        path: "/About",
        element: <About />
      },
      {
      path: "/Register",
      element : <Register />
    }
      
    ],
  },
  {
    path: "/register",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: < Timetables/>,
  }, {
    path: "Schoolcode",
    element: <Schoolcode />
  }

]);

function App() {
  const {user} = useContext(AuthContext);
  const {loading} = useContext(AuthContext);
console.log("length ===>",user)

if(loading){
  return(
    <div>
        <div className='d-flex justify-content-center align-items-center text-center ' style={{height:"100vh"}}>
      <div className=''>
        
        <div className="text-center">
 
 <img style={{opacity:0.5}} src='https://switchiify.net.rw/u/classes/article/logoo.png' width="120" />
        </div>
        <div className="spinner-border " style={{ color:"blue"}} role="status">
   
   </div>
        <h1 className='text-muted fs-3'>Loading....</h1>
    
      </div>
    </div>
    </div>
  )
}

  return (
    <div >
      {
        user !=null  ?  
        <>
         <RouterProvider router={userrouter} /> 
        </>
         : 
        <> 
         <RouterProvider router={router} />
        </>
      }
   
    </div>
  )
}

export default App
