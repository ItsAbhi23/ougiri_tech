import { useContext } from 'react'
import Eventcard from '../../components/Eventcard';
import context from '../../context/Registration/RegistrationContext'
import './Registration.css'


function Registration() {
  // eslint-disable-next-line
  const {event} = useContext(context);
  // console.log(a);
let i=0
  return <>
    <div className='container row registerationpage'>
      <div className='title'><h2>Registration</h2></div>
     
        {event.map((A) => {
          
          return <Eventcard  key={i++} value={A}/>
        })
        }
      
      </div>
  </>
}
export default Registration