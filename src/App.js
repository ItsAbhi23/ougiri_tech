
import './App.css';
// eslint-disable-next-line
import Home from './screen/Home/Home'
// eslint-disable-next-line
import Event from './screen/Event/Event'
import EventState from './context/EventState';
import RegistrationPage from './screen/Registration/RegistrationPage'
function App() {
  return (
      <>
     <EventState>
      {/* < Home/>
      <Event /> */}
      <RegistrationPage/>
      </EventState>

      </>
  );
}

export default App;
