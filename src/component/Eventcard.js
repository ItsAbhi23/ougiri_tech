import React from 'react'
import './Eventcard.css'
export default function Eventcard(props) {
    // console.log(props.value.Name)
  return (
      <div className='col-md-3' >
        <div className='card my-3'>
            <div className='card-body'>
                <h5 className='card-title'>{props.value.Name}</h5>
                <p className='card-text'>{props.value.text}</p>
                <div>
                    <button type='button' className='btn btn-primary '>Click</button>
                </div>
            </div>
        </div>
      </div>

  )
}
