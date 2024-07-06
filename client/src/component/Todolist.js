import React from "react";
import { useState } from "react";
import '../Style1.css';
export default function Todolist()
{
    const [formData,SubmitFormData]=useState({
        time:"",
        note:""
    })
    const [TableData,SubmitTable]=useState([])
    function HandleForm(e){
        const {name,value} = e.target
        SubmitFormData({...formData,[name]:value});
    }
    function HandleSubmit()
    {
        SubmitTable([...TableData,formData]);
        SubmitFormData({
            time:"",
            note:""
        })

    }
    return(
        <div>
            <h1>TODOLIST</h1>
            <div class="form">
            <label>Time:</label><input  type="time" name="time" value={formData.time} onChange={HandleForm}/><br/>
            <label>Note:</label><input  type="text" name="note" value={formData.note} onChange={HandleForm}/><br/>
            <button onClick={HandleSubmit}>Save</button>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((info,index)=>(
                        <tr>
                            <td>{info.time}</td>
                            <td>{info.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}