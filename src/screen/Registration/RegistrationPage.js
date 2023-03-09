import React from 'react'
// eslint-disable-next-line
import { useEffect } from 'react';
// eslint-disable-next-line
import logo from  '../../images/judge3.jpg'
import './RegistrationPage.css'
const RegistrationPage = () => {

//     <div>
//       <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Email address</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
// </div>
// <div className="mb-3">
//   {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
// </div>
//     </div>
// let Submitted= (e)=>{
//     e.preventDefault();
//     addticket(credentials.fname,credentials.lname,credentials.email,credentials.contactnumber,credentials.quantity);

//     setCredentials({fname: "",lname: "",email: "",contactnumber: "",quantity:1})

// }

// useEffect(() => {
//   if(result!=="")
//   {
//     if(result==="success")
//     {
//         console.log(result);
//         setResult(null);
//         navigate("/events/success");
//     }
//     else if(result==="failure")
//     {
//         setResult(null);
//         navigate("/events/failure");
//     }
//   }  
// }, [result])
  let handleClick=(e)=>{
    console.log(e.target.value);
  }
let handleChange=()=>{

}

return (
    
    <div className="container bodyy">
        <div className="box">
            <div className="heading">
                <p>O U G R I</p>
            </div>
            <form onSubmit={''}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">Name</label>
                    <div className="flexing">
                        <span >
                            <input type="text" className="form-control" id="first_name" name="fname" value={''} onChange={''} />
                            <div id="first_name_tag" className="form-text">First Name</div>
                        </span>
                        <span>
                            <input type="text" className="form-control" id="last_name" name="lname" value={''} onChange={''} />
                            <div id="last_name_tag" className="form-text">Last Name</div>
                        </span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="emailId" className="form-label">Email address*</label>
                    <input type="email" className="form-control" id="emailId" name='email' value={''} onChange={''} aria-describedby="emailHelp" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                    <input type="tel" pattern="[0-9]{10}" className="form-control" id="contactnumber" placeholder='+91' name='contactnumber' value={''} onChange={''}/>
                </div>
                <h6>Click Below To Participate In Other Events</h6>
                 <div className='container event-list'>
                  
                    <div>   
                    <div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" onChange={handleChange} onClick={handleClick}  value="Event Name"  />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" onChange={handleChange} onClick={handleClick} value=""  />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" onChange={handleChange} onClick={handleClick} value=""  />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick}   />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name"  onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange}  onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div>  
        
             </div>
           <div>
           <div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange}  onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name"  onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name"  onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name"  onChange={handleChange} onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div><div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick} />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  id="flexCheckDefault" type="checkbox" value="Event Name" onChange={handleChange} onClick={handleClick}  />
  <label className="form-check-label" for="flexCheckDefault">
    Checked checkbox
  </label>
</div>
             
                 </div>
                 </div>
                {/* <div className="mb-3">
                    <div className="flexing">
                    <label htmlFor="quantity" className="form-label">Tickets</label>
                    <label htmlFor="quantity" className="form-label">Rs 500/-</label>
                    </div>
                     <div className="flexing2">
                    <div id="quantity_tag" className="form-text ">Quantity:</div>
                    <input type="number" className="form-control " id="quantity" min='1' name="quantity" value={''} onChange={''}/>
                    </div>
                </div> */}

<button type="submit" className="btn btn-primary">Continue to Payment</button>
            </form>
        </div>
        </div>

  )
}

export default RegistrationPage
