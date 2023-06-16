import React from 'react'
import img from '../../images/logo.jpg'
import './Event.css'
import { Link} from "react-router-dom";

export default function Event() {
 
  return (
    <>
    <div className="container Event_container">
      <h2>Mega Night</h2>
      <img src={img} alt="Meganight"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatibus sed. Esse in totam expedita magni ullam fugiat necessitatibus, officiis laborum! Neque, earum saepe quasi illo amet harum beatae vero laboriosam, eos iure porro doloribus explicabo aliquid aut rem itaque voluptatem ad unde maiores dignissimos fuga velit, eaque fugiat assumenda? Eos tempora voluptatem inventore qui nemo, illo incidunt deserunt ipsam aliquid minima harum enim. Quod ipsam autem iusto cupiditate natus? Soluta qui ut id dicta?</p>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt quis tempora!</h3>
      <Link className="btn btn-info my-3" to="/events/eform">
      Book the ticket
      </Link>
    </div>
    </>
  )
}