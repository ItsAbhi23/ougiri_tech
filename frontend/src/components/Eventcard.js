import React from 'react'
import './Eventcard.css'
import {useNavigate} from 'react-router-dom'
export default function Eventcard(props) {
    const navigate=useNavigate();
    const handleClick=()=>{
              navigate('/registration/eform');
    }
    
  return (
    
      <div className='col-md-3 icard' >
        <div className='card my-3 ' >
            <div className='card-body'>
                <h5 className='card-title'>{props.value.Name}</h5>
                <p className='card-text'>{props.value.text}</p>
                <div>
                    <button type='button' onClick={handleClick} className='btn btn-primary '>Click to Participate</button>
                </div>
            </div>
        </div>
      </div>
  

  )
}
