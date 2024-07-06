import { useContext } from "react";
import { Context } from "./Context";

export default function Mycomponent()
{
    const {text,setText}=useContext(Context)
    //consumer
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText("hello World")}>Click</button>
        </div>
    )
}