import React from "react";
import { useState } from "react";
export default function Feedback()
{
    const [FormData,SubmitFormData]=useState({
        name:"",
        age:"",
        rollno:""
    })
    const [table,SubmitTable]=useState([])
    function HandleChange(e)
    {
        const {name,value}=e.target
        SubmitFormData({...FormData,[name]:value});

    }
    function HandleSubmit()
    {
        SubmitTable([...table,FormData])
        SubmitFormData({
        name:"",
        age:"",
        rollno:""
        })

    }
    return(
        <div>
            <h1>FEEDBACK</h1>
            <div class="feed">
            <input type="text" name="name"value={FormData.name} onChange={HandleChange}/><br/>
            <input type="number" name="age"value={FormData.age} onChange={HandleChange}/><br/>
            <input type="text" name="rollno"value={FormData.rollno} onChange={HandleChange}/><br/>
            <button onClick={HandleSubmit}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Rollno</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((key,index)=>(
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.age}</td>
                        <td>{key.rollno}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}