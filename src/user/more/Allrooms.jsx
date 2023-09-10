import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function MyVerticallyCenteredModal(props) {
  const name = props.theroom;

  const { theroom, isButtonClicked, onButtonClick } = props;
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalca ,setTotalcan] = useState(0);
  const [totali, setTotali] = useState({
    s4mcb: 0,
    s4mpc: 0,
    s4mce: 0,
    s5mcb: 0,
    s5mpc: 0,
    s5mce: 0,
    s6mcb: 0,
    s6mpc: 0,
    s6mce: 0,
  });

  useEffect(() => {
    const timew = setInterval(()=>{

   
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/sihs/controll.php/sihs/controll.php?allthestudents=${name}`
        );
        const data = response.data;
        setPositions(data);
        console.log(data);
        setTimeout(()=>{
 setIsLoading(false);
        },3000)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },3000);

  return () =>{clearInterval(timew)}
  }, [name]);

  const room = positions.room;
  const studentsDivRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => studentsDivRef.current,
  });

  ////////////////////////////////////////////////////////////////////

  
  useEffect(()=>{
   let s4mpc = 0;
   let s4mce = 0;
   let s4mcb = 0;
   let s5mpc = 0;
   let s5mce = 0;
   let s5mcb = 0;
   let s6mpc = 0;
   let s6mce = 0;
   let s6mcb = 0;
   let total_ca = 0;
    positions.map((position, index)=> {
      if(position.combination =='S4 MPC' ){
 
        if(position.students_id =='X'){

        }else{
         s4mpc +=1;
        }
      }
      if(position.combination =='S4 MCB' ){
        console.log("yes")
        if(position.students_id =='X'){

        }else{
         s4mcb +=1;
        }
      }
      if(position.combination =='S4 MCE' ){
        console.log(position.combination)
        if(position.students_id =='X'){

        }else{
         s4mce +=1;
        }
      }
      if(position.combination =='S6 MPC' ){
        console.log(position.combination)
        if(position.students_id =='X'){

        }else{
         s6mpc +=1;
        }
      }
      if(position.combination =='S6 MCE'){
        console.log(position.combination)
       if(position.students_id =='X'){

       }else{
        s6mce +=1;
       }
        
      }
      if(position.combination =='S6 MCB'  ) {
        console.log(position.combination)
        if(position.students_id =='X'){

        }else{
         s6mcb +=1;
        }
        
      }
      if (position.combination == 'S5 MPC' ) {
        console.log(position.combination);
        if(position.students_id =='X'){

        }else{
         s5mpc +=1;
        }
      }
      if(position.combination =='S5 MCE' ){
        console.log(position.combination)
        if(position.students_id =='-'){

        }else{
         s5mce +=1;
        }
      }
      if(position.combination ==='S5 MCB' ){
        console.log(position.combination)
        if(position.students_id =='-'){

        }else{
         s5mcb +=1;
        } 
       
      }
      if(position.students_id !='X'){
        total_ca += 1 ;
        console.log("the num ===>",total_ca)
        setTotalcan(total_ca)
      }
     
    })

  
    setTotali({
      s4mcb: s4mcb,
      s4mpc: s4mpc,
      s4mce: s4mce,
      s5mcb: s5mcb,
      s5mpc: s5mpc,
      s5mce: s5mce,
      s6mcb: s6mcb,
      s6mpc: s6mpc,
      s6mce: s6mce,
    });
  }, [positions])
 
  
console.log(totalca);
  console.log(totali.s6mcb)


  const getGridCells = () => {
    return positions.map((position, index) => (
      <div key={position.id} className="grid-cell">
        <img
          style={{ width: '400', height: 90 ,borderRadius:10,}}
          src="https://previews.123rf.com/images/solargaria/solargaria1708/solargaria170800136/84949400-isolated-of-table-and-chair-for-classroom-education-concept-vector-illustration.jpg"
          alt="Table and Chair"
        />
        <br />
        <div>
          <h5 style={{ zIndex: 1, backgroundColor: 'blue', color: 'white', borderRadius: '5%' }}>
            {position.students_id}
          </h5>
          <h5 style={{ zIndex: 1, backgroundColor: 'blue', color: 'white', borderRadius: '5%' }}>
            {position.combination}
          </h5>
        </div>
      </div>
    ));
  };

  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className='text-success'>{name}</h1>


       
        </Modal.Title>
         <div className='mx-5'>
        <button className='btn btn-primary rounded-pill fw-bold'  onClick={handlePrint}><i className="bi bi-printer-fill"></i> Print Students</button>
        </div>

      </Modal.Header>
      <Modal.Body>
      <div ref={studentsDivRef}>
        <center className="containera">
          <center>
            <h4 className="text-primary fw-bold">A' LEVEL EXAMINATION
            <br/>
         {name == 'room1' ?
                  <>
                    S4 MPC
                  </>
                  :
                  <>
                    {name == 'room2' ? "S4 MCE" :
                      <>
                        {name == 'room3' ? "S4 MCB" : <>
                          {name == 'room4' ? "S5 MPC" : <>
                            {name == 'room5' ? "S5 MCE" : <>
                              {name =='room6' ? "S5 MCB" : <>
                                {name =='room7' ? "S6 MCB" :  <>
                                {name =='room8' ? "S6 MPC" : "S6 MCE" }
                                </>}
                              </>}
                            </>}
                          </>}
                        </>}
                      </>}
                  </>
                } : {totalca} Candidates
             </h4>
          </center>
         
           <div style={{overflowX:"scroll"}} className='d-flex justify-content-center'>
          {Object.entries(totali).map(([key, value]) => (
           
              <div  key={key}> 
             {value != 0 && <p style={{textTransform: 'uppercase'}} className='text-success fs-4 fw-bold mx-2'>{key}: {value}</p>}
                
    
  </div>

  
))}
  </div>
          {isLoading ? (
            <div className="spinner-grow bg-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              <div className="grid-containera">
                <div className="grid-row11">{getGridCells().slice(0, 5)}</div>
                <div className="grid-row11">{getGridCells().slice(5, 10)}</div>
                <div className="grid-row11">{getGridCells().slice(10, 15)}</div>
                <div className="grid-row11">{getGridCells().slice(15, 20)}</div>
                <div className="grid-row11">{getGridCells().slice(20, 25)}</div>
                <div className="grid-row11">{getGridCells().slice(25,30)}</div>
              </div>
            </>
          )}
        </center>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Allrooms = () => {
  const [room, setRooms] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [pickedone, setPicked] = useState('');
  const [isButtonClicked, setButtonClicked] = useState(false);

  const view = (room) => {
    setModalShow(true);
    setPicked(room);
    setButtonClicked(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/sihs/controll.php/sihs/controll.php?allrooms=yes'
        );
        const data = response.data;
        setRooms(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    console.log('Button clicked in the parent component!');
  };

  return (
    <div className="container">
      <div class="alert alert-info alert-dismissible fade show my-5" role="alert">
  <strong>Hii user!</strong> Always use land scape while printing.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <h3 className="text-center text-muted">All examination rooms of a'level</h3>
      <div>
        <p className="text-center text-success fw-bold">Extract and convert to pdf</p>
        <div className="d-flex justify-content-center ">
          <h4 className="mx-4">
            <i className="bi bi-filetype-pdf"></i>DOWNLOAD PDF
          </h4>
          <h4>
            <i className="bi bi-printer"></i>PRINT SITTING PLAN
          </h4>
        </div>
      </div>

      <table
        className="table"
        style={{ color: 'blue', border: '2px solid rgba(0,0,0,0.3)', borderRadius: '100%' }}
      >
        <thead className="bg-primary text-light fw-bold text-center" style={{ borderRadius: '100%' }}>
          <tr>
            <th scope="col">Block Name</th>
            <th scope="col">All classes</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {room.map((therooms, index) => (
            <tr key={index}> 
              <td>A level Block</td>
              <td>{therooms.room}</td>
              <td>
                <Button variant="primary" onClick={() => view(therooms.room)}>
                  View Students In This Room
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        theroom={pickedone}
        isButtonClicked={isButtonClicked}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Allrooms;
