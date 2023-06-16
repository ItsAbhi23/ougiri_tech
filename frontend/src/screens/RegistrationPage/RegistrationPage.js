import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// eslint-disable-next-line
import { useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
// eslint-disable-next-line
import logo from '../../images/judge3.jpg'
import './RegistrationPage.css'
const RegistrationPage = () => {
  const [credentials, setCredentials] = useState({ fname: "", lname: "", email: "", contactnumber: "" })
  const [amount, setAmount] = useState(0);
  const [items,setItems]= useState([]);
  // const [product,setProduct] = useState({
  //   name: 'ticket',
  //   price: 200,
  //   description: 'this is awesome'
  // });
  let navigate=useNavigate();
  const Submitted = (e) => {
    e.preventDefault();
   
    setCredentials({ fname: "", lname: "", email: "", contactnumber: "", quantity: 1 })
  }
  const handleToken = async (token) => {
    try {
      const response = await axios.post('http://localhost:3000/checkout', { token, items });
      console.log(response);
      navigate("/events/success");
    } catch (error) {
      console.error('Error occurred:', error);
      navigate("/events/failure");
    }
    
  };

  
  
  let changing = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
   
  }

  
  let eventmAmountHandler = (e) => {
    
    const newItem = e.target.value;
    let updatedItems = [...items];

    if (updatedItems.includes(newItem)) {
      updatedItems = updatedItems.filter((item) => item !== newItem);
    } else {
      updatedItems.push(newItem);
    }

    setItems(updatedItems);
    setAmount(updatedItems.length * 200);
  }

  return (
    <div className='body'>
      <div className="box">
        <h2>Registration</h2>
        <div className="heading">
          <p>O U G R I</p>
        </div>
        <form onSubmit={Submitted}>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">Name</label>
            <div className="flexing">
              <span >
                <input type="text" className="form-control" id="first_name" name="fname" value={credentials.fname} onChange={changing} />
                <div id="first_name_tag" className="form-text">First Name</div>
              </span>
              <span>
                <input type="text" className="form-control" id="last_name" name="lname" value={credentials.lname} onChange={changing} />
                <div id="last_name_tag" className="form-text">Last Name</div>
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="emailId" className="form-label">Email address*</label>
            <input type="email" className="form-control" id="emailId" name='email' value={credentials.email} onChange={changing} aria-describedby="emailHelp" required />
          </div>

          <div className="mb-3">
            <label htmlFor="contactnumber" className="form-label">Contact Number</label>
            <input type="tel" pattern="[0-9]{10}" className="form-control" id="contactnumber" placeholder='+91' name='contactnumber' value={credentials.contactnumber} onChange={changing} />
          </div>
          <h6>Click Below To Participate In Other Events</h6>
          <div className='container event-list'>

            <div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" onChange={eventmAmountHandler}  value="1" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" onChange={eventmAmountHandler}  value="2" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" onChange={eventmAmountHandler}  value="3" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="4" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="5" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="6" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="7" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="8" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="9" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="10" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>

            </div>
            <div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="11" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="12" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="13" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="14" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div><div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="15" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="16" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div><div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="17" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="18" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="19" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="20" onChange={eventmAmountHandler}  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Event Name
                </label>
              </div>

            </div>
          </div>
          <div className='paybtn'>
            <h4>Total Amount {amount}</h4>
            <StripeCheckout
            className="center"
            stripeKey="pk_test_51NAZrFSI2CjqhJl3j6vseVS8QrTzVL1vBybOYY9zq5QHwLM2S4Y5aRupNI5xvW68WLLYosGzml5BmaEafTJuDyMh004iqZKm9P"
            token={handleToken}
            amount={100}
            name={'ticket'}
            billingAddress
            shippingAddress
          />
          </div>
        </form>
      </div>
    </div>

  )
}

export default RegistrationPage

