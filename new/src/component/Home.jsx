import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Home = () => {
    const [text, setText] = useState("");
    const sentence = "WELCOME TO SIHS PORTAL";
    const delay = 200;
    useEffect(() => {
        let timeoutId;
        if (text.length < sentence.length) {
          timeoutId = setTimeout(() => {
            setText(sentence.substring(0, text.length + 1));
          }, delay);
        } else {
          timeoutId = setTimeout(() => {
            setText("");
          }, 2000); // Wait 2 seconds before clearing the text and starting over
        }
        return () => clearTimeout(timeoutId);
      }, [text, sentence, delay]);

      const navigation = useNavigate();
  return (
    <div className='container'>
        <div className="d-flex   justify-content-center my-5" style={{width: "100%"}}>
            <div className='text-center' >
                <div className='d-flex' style={{borderBottom:"",height:80}}>
                     <h1  className='text-primary fw-bold welcome'>
                    {text} 
                     </h1>
                     <i style={{fontSize:30,marginLeft:10,paddingTop:2,transform: 'rotate(316deg)',marginTop:-10}} className='bi bi-pencil text-success'></i>
                </div>
                <div>
                    
                </div>
            <p className='fw-bold'> <span>In</span>  All Things To Serve.</p>
            {/* <p className='fw-bold text-success'>   Ad Majorem Dei Glorian.</p> */}
            


            </div>
           
        </div>

        <div className="d-flex   justify-content-center mt-5">
            
         
       
    
        <div className='text-center'>
                 <p className='fw-bold text-primary'>STUDENT ID</p>
            </div>
    
 </div>
 <div className="d-flex   justify-content-center">
        <div>
          </div>        
        
        <input onFocus={()=>navigation("../Student")} 
        type="text" className="form-control ifomo" placeholder="If you are a student write in your ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />

     </div>
     <div className="d-flex   justify-content-center">
            <div className='text-center'>
                     <a className='btn btn-primary my-4 rounded-pill py-2'>CONTINUE</a>
                </div>
     </div>

     <div className="alert alert-success text-center" role="alert">
  <h4 className="alert-heading">Welcome all the Jesuits Community</h4>
  <p>We are proud of creating a new school portal that will include all the school activities and other plans so that all can be in one througth this school community platform. All the energy has been put so that this platform get to live and we hope it will change the future education of the school.</p>
  <hr />

  <p className="mb-0">Stay hungry, Stay foolish</p>
  <p>Sometimes life's going to hit you in the head with a brick. Don't lose faith.</p>
  <p>Innovation distinguishes between a leader and a follower.</p>
  <p>Your time is limited, so don’t waste it living someone else’s life.</p>
  <h4><center>For u.</center></h4>
</div>

<div >
  <center>
    <h4>Our sponsors.</h4>
  </center>
<div className="container mt-5 sponsored-card">
      <div className="row row-cols-2 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 ">
            <div className="card-body">
         <center><img style={{width:70,height:40,borderRadius:20}} src="https://switchiify.net.rw/assets/img/favicon.jpg" alt="" /></center>
              <h5 className="card-title">SWITCHIIFY PLATFORMS</h5>
              <p>Devlopment support</p>
              <p className="card-text">Switchiify's mission is to share and grow the world's knowledge. Not all knowledge can be written down, but much of that which can be, still isn't.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
 <center>  <img  src='https://switchiify.net.rw/u/classes/article/logoo.png' style={{}} width="80" /></center>
              <h5 className="card-title">SAINT IGNATIUS HS</h5>
              <p className="card-text">Saint Ignatius High School is a private school owned by the Society of Jesus in Rwanda. It is located in Kigali, Gasabo district in Kimironko sector.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
            <img src="https://switchiify.net.rw/u/classes/article/1593493892.jpeg" className="img-fluid rounded-5" alt="" />
              <h5 className="card-title">TEACHER'S STAFF</h5>
              <p className="card-text">SUPPORTED US WITH IDEAS AND MOTIVATION</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
            <img className='rounded-3' style={{width:100}} src="https://cdn.britannica.com/22/116022-050-9E638E3E/Saint-Ignatius-Loyola-founder-Jesuit-order-engraving-Nicolas-Bazin-1703-Metropolitan-Museum-of-Art.jpg" alt="" />
              <h5 className="card-title">GOD</h5>
              <p className="card-text">Thank you, God, for your divine assistance in helping me successfully finish this project. Your guidance and support have been instrumental in my journey, and I am filled with immense gratitude for your blessings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Home