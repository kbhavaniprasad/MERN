import { useState } from "react";
import { Context } from "./Context";
import Mycomponent from "./Mycomponent";
import Login from "./component/Login";
//provider->produces the data/props
export default function Example()
{//provide
    const [text,setText]=useState("");
    return(
        <div>
            <Context.Provider value={{text,setText}}>
                <Mycomponent/>
                <Login/>
            </Context.Provider>
        </div>
    )
}