import React from 'react'
import success from '../../images/success logo.png'
import { useNavigate } from 'react-router-dom';
import  './TicketSuccess.css'
export default function RegistrationSuccess() {
    let navigate=useNavigate();
    let handleonclick=()=>{
        navigate("/");
    }
  return (
    <>
    <div className="container success" style={{textAlign:"center"}}>
        <img src={success} alt="success"  style={{maxHeight:"75px",maxWidth:"75px"}} />

        <h2>Congratulations</h2>
        <p>You have successfully registered </p>
        <p>And you can view it in our app on log in</p>

        {/* //need to create component that apper similar to log in ones */}
        <button type="button" className="btn btn-info" onClick={handleonclick}>Cancel</button>
    </div>
    </>
  )
}