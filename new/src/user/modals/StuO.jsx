import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import timelog from "../../assets/5593982.png"
import { AuthContext } from '../../ahook/Auth';
import { useContext } from 'react';

const Stuo = () => {
  const [positions, setPositions] = useState([]);
  const [col,setCol] = useState("");
  const [row, setRow] = useState("");
const [thero, setRoo] = useState("");
  const {user} = useContext(AuthContext);


  
  useEffect(() => {
 
    
   
    const inte = setInterval(()=>{
    
    const fetchDatas = async () => {
      try {
        // const theid = (user.student_id);
        const response = await axios.get(`http://localhost:8080/project/phpbackened/controll.php?checko=${user.student_id}`);
        setPositions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDatas();
  },2000)

  return () =>{ clearInterval(inte)}
  }, []);
  const room = positions.room;

  useEffect(()=>{
    if(positions.length != 0){

      setRoo("");
    if(positions.length!=0){
      positions.map((pos,index)=>{
  const column = index % 6 + 1;
  const row = Math.floor(index / 6) + 1;
  if(pos.students_id==user.student_id){
    setCol(column)
    setRow(row)
    setRoo(pos.room);
  }
 })
    }
  }
  },[positions])

  const getGridCells = () => {
    return positions.map((position, index) => {

  
      return (
        <div key={position.id} className="grid-cell">
          <img
            style={{ width: "400", height: 90,borderRadius:10,borderColor:"blue",borderWidth:2 }}
            src="https://previews.123rf.com/images/solargaria/solargaria1708/solargaria170800136/84949400-isolated-of-table-and-chair-for-classroom-education-concept-vector-illustration.jpg"
          />
          <br />
          <div>
            {position.students_id === user.student_id ? (
              <>
                <h5
                  style={{
                    zIndex: 1,
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "100%",
                    padding: 20,
                  }}
                >
                  {position.students_id}
                  
                </h5>
                <p>You</p>
              </>
            ) : (
              <>
                <h5
                  style={{
                    zIndex: 1,
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "5%",
                  }}
                >
                  {position.students_id}
                </h5>
                <h5
                  style={{
                    zIndex: 1,
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "5%",
                  }}
                >
                  {position.combination}
                </h5>
              </>
            )}
            
          </div>
        </div>
      );
    });
  };

  

  return (
    <>
      <center className='containera'>
        <center> <h4 className='text-primary fw-bold'>A LEVEL EXAMINATION <span style={{marginLeft:3}} className='btn btn-primary'> You are working in: 
                {thero === 'room1' ? (
                  <>S1 A</>
                ) : thero === 'room2' ? (
                  <>S1 B</>
                ) : thero === 'room3' ? (
                  <>S1 C</>
                ) : thero === 'room4' ? (
                  <>S1 D</>
                ) : thero === 'room5' ? (
                  <>S2 A</>
                ) : thero === 'room6' ? (
                  <>S2 B</>
                ) : thero === 'room7' ? (
                  <>S2 C</>
                ) : thero === 'room8' ? (
                  <>S2 D</>
                ) : thero ==='room9' ? (
                   <>S3 A</>
                ) : thero ==='room10' ? (
                  <> S3 B</>
                ) : thero === 'room11' ? (
                  <>S3 C</>
                ) : <></>
              }
              </span> </h4></center>
   
      {positions.length === 0 ? 
         <>
             <img style={{width:300}} src={timelog} />
          <h1 className='text-muted'>NO PLAN AVAILABLE </h1>
         </>
      :
      <>
         <h5>Row:{row},Column:{col}</h5>
        <div className="grid-container container">
          <div className="grid-row">
            {getGridCells().slice(0, 6)}
          </div>
          <div className="grid-row">
            {getGridCells().slice(6, 12)}
          </div>
          <div className="grid-row">
            {getGridCells().slice(12, 18)}
          </div>
          <div className="grid-row">
            {getGridCells().slice(18, 24)}
          </div>
          <div className="grid-row">
            {getGridCells().slice(24, 30)}
          </div>
          <div className="grid-row">
            {getGridCells().slice(30)}
          </div>
        </div>
        </>  
      }
      </center>
    </>
  );
};

export default Stuo;
