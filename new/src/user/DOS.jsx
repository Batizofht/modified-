import React, { useState } from "react";

export default function DOS () {

    const [empty,SetEmpty] = useState("empty")
    const double = (e) => {
        e.target.contentEditable = true;
        SetEmpty(e.target.innerText);
        console.log(empty)
    }
    const single = (e) => {
        e.target.contentEditable = false;
    }


// Initializing a 2D array each index for teachers
  const numRows = 12;
  const numCols = 10;
  const initialValue = "empty";
  const initialArray = Array.from({ length: numRows }, () => Array(numCols).fill(initialValue));

  // State to hold the 2D array
  const [array, setArray] = useState(initialArray);

  // Function to update a specific element in the array
  const updateElement = (row, col, newValue) => {
    const newArray = array.map((arr) => [...arr]); // Create a shallow copy of the array
    newArray[row][col] = newValue;
    setArray(newArray);
  };
    return (
        <>
        <div className="">

        <div className="alert alert-dismissable alert-info">You have reavhed dos..</div>
        <table border="1" borderColor= "lightgray">
            
            <tr>
                <thead>
                <th className="px-2">Names</th>
                <th className="px-2">Score 1</th>
                <th className="px-2">Score 2</th>
                <th className="px-2">Score 3</th>
                <th className="px-2">Score 4</th>
                <th className="px-2">Score 5</th>
                <th className="px-2">Score 6</th>
                <th className="px-2">Score 7</th>
                <th className="px-2">Score 8</th>
                <th className="px-2">Score 9</th>
                <th className="px-2">Score 10</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-30">TEACHER 1</td>
                        <td>
                            <div className="border">
                            <input className="form-control mb-1 " style={{border : '1px solid '}} defaultValue="empty"
                             onDoubleClick={double} onBlur={single}/>
                            </div>
                        </td>
                        <td>
                            <div className="border p-2" onDoubleClick={double} 
                            onBlur={single} >
                           {empty}
                            </div>
                        </td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                        <td><input className="form-control mb-1" /></td>
                    </tr>
                </tbody>
            </tr>
        </table>
        </div>
        </>
    )

}