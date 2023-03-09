import { useContext } from 'react'
import Eventcard from '../../component/Eventcard';
import context from '../../context/EventContext'
import './Event.css'


function Event() {
  // eslint-disable-next-line
  const a = useContext(context);
  // console.log(a);
let i=0
  return <>
    <div className='container row registerationpage'>
      <div className='title'><h2>Registration</h2></div>
     
        {a.map((A) => {
          
          return <Eventcard key={i++} value={A}/>
        })
        }
      
      </div>
  </>
}
export default Event