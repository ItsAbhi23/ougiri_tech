import EventContext from './RegistrationContext'
import React, { useState } from 'react'
const EventState = (props) => {
    const [result, setResult] = useState("")
    const event = [
        { Name: "Name 1", text: "enter you text here" }, { Name: "Name 2", text: "enter you text here" }, { Name: "Name 3", text: "enter you text here" }, { Name: "Name 4", text: "enter you text here" }, { Name: "Name 5", text: "enter you text here" }
        , { Name: "Name 6", text: "enter you text here" }, { Name: "Name 7", text: "enter you text here" }, { Name: "Name 8", text: "enter you text here" }, { Name: "Name 9", text: "enter you text here" }, { Name: "Name 10", text: "enter you text here" }
        , { Name: "Name 11", text: "enter you text here" }, { Name: "Name 12", text: "enter you text here" }, { Name: "Name 13", text: "enter you text here" }, { Name: "Name 14", text: "enter you text here" }, { Name: "Name 15", text: "enter you text here" }
        , { Name: "Name 16", text: "enter you text here" }, { Name: "Name 17", text: "enter you text here" }
    ]

    let adduser=(fname,lname,email,contactnumber,events)=>{
        console.log(fname);
        console.log(lname);    
        console.log(email);
        console.log(contactnumber);
        console.log(events);
        //if events is empty
        //and erase the events once done
        //set the css
        setTimeout(() => {
            setResult("sucess");
        }, 10*1000);
    }

    return (
        <EventContext.Provider value={{event,adduser,result,setResult}}>
            {props.children}
        </EventContext.Provider>
    )
}
export default EventState;