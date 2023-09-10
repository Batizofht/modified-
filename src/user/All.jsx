import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const All = () => {
  const [allstudents, setAllstudents] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/sihs/upsss.php?allstudents=yes');
        setAllstudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setInterval(fetchData, 3000);

    return () => clearInterval(timer);
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id-22,
      sortable: true,
    },
    {
      name: 'Students ID',
      selector: 'student_id',
      sortable: true,
    },
    {
      name: 'First Name',
      selector: 'firstname',
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: 'secondname',
      sortable: true,
    },
    {
      name: 'Class',
      selector: 'Class',
      sortable: true,
    },
    {
      name: 'Stream/Combination',
      selector: 'streams',
      sortable: true,
    },
    {
      name: 'Level',
      selector: 'lelel',
      sortable: true,
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <div>
      <p>ID: {(data.id-22)}</p>
      <p>Student ID: {data.student_id}</p>
      <p>First Name: {data.firstname}</p>
      <p>Last Name: {data.secondname}</p>
      <p>Class: {data.Class}</p>
      <p>Stream: {data.streams}</p>
      <p>Level: {data.lelel}</p>
    </div>
  );

  const filteredData = allstudents.filter((item) =>
    item.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
    item.secondname.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <center>
        <h1 className="text-muted my-3">All students</h1>
      </center>
<center>
  <div className='my-4'>
        <h5> <a className='btn btn-primary rounded-2 fw-bold '>ADD A STUDENT BY CLASS</a></h5>
      </div>
      <div>
        <form className='form' role='form'>
          <input className='form-control' type='text' placeholder='Students ID' />
          <br/>
          <input className='form-control' type='text' placeholder='Students first name' />
          <br/>
          <input className='form-control' type='text' placeholder='Students Second name' />
          <br/>
          <input className='form-control' type='text' placeholder='Students Class' />
          <br/>
          <input  className='form-control' type='text' placeholder='Students Combination/ stream'/
          >
                      <br/>
          <select className='form-control' name=''>
            <option value="A">A'LEVEL</option>
            <option value="O">O'LEVEL</option>
          </select>
          <br/>
          
        <button className='btn btn-primary'>ADD STUDENTS</button>
        </form>
<dialog>
  
</dialog>
      </div>
      </center>
      
      <div >
   
      <input
className='form-control float-end'
  type="text"
  placeholder="Search..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{width: "30%",border:"2px solid blue"}}

/>
<h5 className='text-primary fw-bold'>All the students at SHIS</h5>
        <DataTable
          columns={columns}
          data={filteredData}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
        />
      </div>
    </div>
  );
};

export default All;
