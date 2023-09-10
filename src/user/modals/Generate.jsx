import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';

const Gens = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/sihs/controll.php/sihs/controll.php?allthestudents");
        const data = response.data;
        setPositions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
const room = positions.room;

  const getGridCells = () => {
    return positions.map((position, index) => (
      <div key={position.id} className="grid-cell">
        <img style={{ width: "400", height: 90 }} src="https://previews.123rf.com/images/solargaria/solargaria1708/solargaria170800136/84949400-isolated-of-table-and-chair-for-classroom-education-concept-vector-illustration.jpg" /><br/>
     
    <div>
   
    <h5 style={{ zIndex: 1, backgroundColor: "blue", color: "white", borderRadius: "5%" }}>{position.students_id}</h5>
        <h5 style={{ zIndex: 1, backgroundColor: "blue", color: "white", borderRadius: "5%" }}>{position.combination}</h5>
    </div>
      </div>
    ));
  };

  return (
    <>
      <center className='containera'>
        <center> <h4 className='text-danger'>A LEVEL EXAMINATION {room}</h4></center>
        <div className="grid-container">
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
      </center>
    </>
  );
};

export default Gens;
