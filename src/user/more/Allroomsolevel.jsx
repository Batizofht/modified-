import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
function MyVerticallyCenteredModal(props) {
  const name = props.theroom;

  const { theroom, isButtonClicked, onButtonClick } = props;
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalca, setTotalcan] = useState(0);

  const [totali, setTotali] = useState({
    s1a: 0,
    s1b: 0,
    s1c: 0,
    s1d: 0,
    s2a: 0,
    s2b: 0,
    s2c: 0,
    s2d: 0,
    s3a: 0,
    s3b: 0,
    s3c: 0,
    s3d: 0
    
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/sihs/controll.php/sihs/controll.php?allthestudentsolevel=${name}`
        );
        const data = response.data;
        setPositions(data);
        console.log(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  useEffect(()=>{
    
  let   s1a = 0;
  let   s1b = 0;
   let  s1c = 0;
  let   s1d = 0;
  let   s2a = 0;
  let   s2b = 0;
   let  s2c = 0;
  let   s2d = 0;
  let   s3a = 0;
  let   s3b = 0;
  let  s3c = 0;
   let  s3d = 0;
   let total_ca = 0;
  
     positions.map((position, index)=> {
       if(position.combination =='S1 A' ){
  
         if(position.students_id =='X'){
 
         }else{
          s1a +=1;
         }
       }
       if(position.combination =='S1 B' ){
         console.log("yes")
         if(position.students_id =='X'){
 
         }else{
          s1b +=1;
         }
       }
       if(position.combination =='S1 C' ){
        console.log("yes")
        if(position.students_id =='X'){

        }else{
         s1c +=1;
        }
      }
      if(position.combination =='S1 D' ){
        console.log("yes")
        if(position.students_id =='X'){

        }else{
         s1d +=1;
        }
      }
      if(position.combination =='S2 A' ){
  
        if(position.students_id =='X'){

        }else{
         s2a +=1;
        }
      }
      if(position.combination =='S2 B' ){
        console.log("yes")
        if(position.students_id =='X'){

        }else{
         s2b +=1;
        }
      }
      if(position.combination =='S2 C' ){
       console.log("yes")
       if(position.students_id =='X'){

       }else{
        s2c +=1;
       }
     }
     if(position.combination =='S2 D' ){
       console.log("yes")
       if(position.students_id =='X'){

       }else{
        s2d +=1;
       }
     }
     if(position.combination =='S3 A' ){
  
      if(position.students_id =='X'){

      }else{
       s3a +=1;
      }
    }
    if(position.combination =='S3 B' ){
      console.log("yes")
      if(position.students_id =='X'){

      }else{
       s3b +=1;
      }
    }
    if(position.combination =='S3 C' ){
     console.log("yes")
     if(position.students_id =='X'){

     }else{
      s3c +=1;
     }
   }
   if(position.combination =='S3 D' ){
     console.log("yes")
     if(position.students_id =='X'){

     }else{
      s3d +=1;
     }
   }
   if(position.students_id !='X'){
    total_ca += 1 ;
    console.log("the num ===>",total_ca)
    setTotalcan(total_ca)
  }
     })
     setTotali({
   s1a:s1a,
   s1b:s1b,
   s1c:s1c,
   s1d:s1d,
   s2a:s2a,
   s2b:s2b,
   s2c:s2c,
   s2d:s2d,
   s3a:s2a,
   s3b:s3b,
   s3c:s3c,
   s3d:s3d,
     });
   }, [positions])
 
   console.log(totali.s6mcb)
 

  const room = positions.room;
  const studentsDivRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => studentsDivRef.current,
  });
  const getGridCells = () => {
    return positions.map((position, index) => (
      <div key={position.id} className="grid-cell1">
        <img
          style={{ width: '400', height: 90,borderRadius:10, }}
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
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className='text-success'>{name}</h1>

        </Modal.Title>
        <div className='mx-5'>
          <button className='btn btn-primary rounded-pill fw-bold' onClick={handlePrint}><i className="bi bi-printer-fill"></i> Print Students</button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div ref={studentsDivRef}>
          <center className="containera">
            <center>
              <h4 className="text-primary fw-bold">0' LEVEL EXAMINATION
                <br />
                </h4>
                <p className='text-primary fs-5 fw-bold'>
                {name === 'room1' ? (
                  <>S1 A</>
                ) : name === 'room2' ? (
                  <>S1 B</>
                ) : name === 'room3' ? (
                  <>S1 C</>
                ) : name === 'room4' ? (
                  <>S1 D</>
                ) : name === 'room5' ? (
                  <>S2 A</>
                ) : name === 'room6' ? (
                  <>S2 B</>
                ) : name === 'room7' ? (
                  <>S2 C</>
                ) : name === 'room8' ? (
                  <>S2 D</>
                ) : name ==='room9' ? (
                   <>S3 A</>
                ) : name ==='room10' ? (
                  <> S3 B</>
                ) : name === 'room11' ? (
                  <>S3 C</>
                ) : <></>
              }
               : {totalca} Candidates
              </p>
        </center>
        <div  style={{overflowX:"scroll"}} className='d-flex justify-content-center'>
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
            <div className="grid-container">
              <div className="grid-row">{getGridCells().slice(0, 6)}</div>
              <div className="grid-row">{getGridCells().slice(6, 12)}</div>
              <div className="grid-row">{getGridCells().slice(12, 18)}</div>
              <div className="grid-row">{getGridCells().slice(18, 24)}</div>
              <div className="grid-row">{getGridCells().slice(24, 30)}</div>
              <div className="grid-row">{getGridCells().slice(30)}</div>
            </div>
          </>
        )}
      </center>
    </div>
      </Modal.Body >
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal >
  );
}

const Allroomsolevel = () => {
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
          'http://localhost:8080/sihs/controll.php/sihs/controll.php?allroomsolevel=yes'
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
      <h3 className="text-center text-muted">All examination rooms for o'level</h3>
      <div>
        <p className="text-center text-success fw-bold">extract and convert to pdf</p>
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
              <td>O level Block</td>
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

export default Allroomsolevel;
