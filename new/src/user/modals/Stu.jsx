import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import { AuthContext } from '../../ahook/Auth';
import { useContext } from 'react';
import timelog from "../../assets/5593982.png"

const Stu = () => {
  const [positions, setPositions] = useState([]);
  const [col,setCol] = useState("");
  const [row, setRow] = useState("");
const [name, setRoo] = useState("");
  const {user} = useContext(AuthContext);


  
  useEffect(() => {
 
    
   
    const inte = setInterval(()=>{
    
    const fetchDatas = async () => {
      try {
        // const theid = (user.student_id);
        const response = await axios.get(`http://localhost:8080/project/phpbackened/controll.php?check=${user.student_id}`);
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


  useEffect(()=>{
    if(positions.length != 0){

  setRoo("");
 positions.map((pos,index)=>{
  const column = index % 5 + 1;
  const row = Math.floor(index / 5) + 1;
  if(pos.students_id==user.student_id){
    setCol(column)
    setRow(row)
    setRoo(pos.room);
  }
 }) 
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
        <center> <h4 className='text-primary fw-bold'>A LEVEL EXAMINATION  
        
  
        <span style={{marginLeft:3}} className='btn btn-primary'> You are working in:  {name == 'room1' ?
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
                                {name =='room8' ? "S6 MPC" : <>
                               { name =='room9' ? "S6 MCE" : <>
                               </>}
                                </>  }
                                </>}
                              </>}
                            </>}
                          </>}
                        </>}
                      </>}
                  </>
                }</span> </h4></center>
      <h5>Row:{row},Column:{col}</h5>
         {positions.length === 0 ? 
         <>
         <img style={{width:300}} src={timelog} />
          <h1 className='text-muted'>NO PLAN AVAILABLE </h1>
         </>
      :
      <>
       
        <div  className="grid-containera container">
        <div className="grid-row">{getGridCells().slice(0, 5)}</div>
                <div className="grid-row">{getGridCells().slice(5, 10)}</div>
                <div className="grid-row">{getGridCells().slice(10, 15)}</div>
                <div className="grid-row">{getGridCells().slice(15, 20)}</div>
                <div className="grid-row">{getGridCells().slice(20, 25)}</div>
                <div className="grid-row">{getGridCells().slice(25,30)}</div>
        </div>
        </>  
      }
      </center>
    </>
  );
};

export default Stu;
