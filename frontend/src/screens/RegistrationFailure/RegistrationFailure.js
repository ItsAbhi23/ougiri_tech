import React,{useEffect} from 'react'
import failure from '../../images/failure logo.png'
import { useNavigate } from 'react-router-dom';
export default function RegistrationFailure() {
    let navigate=useNavigate();
    useEffect(() => {
      setTimeout(() => {
        navigate("/registration")
      }, 5*1000);
    }, [])
    
  return (
    <>
    <div className="container" style={{textAlign:"center"}}>
        <img src={failure} alt="success"  style={{maxHeight:"75px",maxWidth:"75px"}} />

        <h2>Sorry!</h2>
        <p>There might be some error occured in Server</p>
        <p>Please try again</p>

        {/* //need to create component that apper similar to log in ones */}
    </div>
    </>
  )
}