import ticketContext from "./TicketContext";
import React, { useState } from 'react'

const TicketState =(props)=>{
    const [result, setResult] = useState("")
    let addticket = (fname,lname,email,contactnumber,quantity)=>{
        console.log(fname);
        console.log(lname);    
        console.log(email);
        console.log(contactnumber);
        console.log(quantity);
        // setResult("success");
        setTimeout(() => {
            setResult("success");
        }, 10*1000);
    }

    return(
        <ticketContext.Provider value={{addticket,result,setResult}}>
            {props.children}
        </ticketContext.Provider>
    )
}

export default TicketState;