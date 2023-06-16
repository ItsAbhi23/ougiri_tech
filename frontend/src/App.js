import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home/Home';
import Events from './screens/Events/Event';
import Registration from './screens/Registration/Registration';
import EventForm from './screens/EventForm/EventForm';
import TicketState from './context/Event/TicketState';
import CardDetail from './screens/RegistrationPage/CardDetails'
import TicketSuccess from './screens/TicketSuccess/TicketSuccess';
import TicketFailure from './screens/TicketFailure/TicketFailure';
import RegistrationState from './context/Registration/RegistrationState'
import RegistrationSuccess from './screens/RegistrationSuccess/RegistrationSuccess';
import RegistrationFailure from './screens/RegistrationFailure/RegistrationFailure';
import RegistrationForm from './screens/RegistrationPage/RegistrationPage';

function App() {
  return (
    <>
      <RegistrationState>
      <TicketState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/events/success" element={<TicketSuccess/>} />
          <Route exact path="/events/failure" element={<TicketFailure/>}/>
          <Route exact path="/events/eform" element={<EventForm/>}/>
          <Route exact path="/registration" element={<Registration/>} />
          <Route exact path="/cardDetails"  element={<CardDetail />} />
          <Route exact path="/registration/success" element={<RegistrationSuccess/>}/>
          <Route exact path="/registration/failure" element={<RegistrationFailure/>}/>
          <Route exact path="/registration/eform" element={<RegistrationForm/>}/>
        </Routes>
      </BrowserRouter>
      </TicketState>
      </RegistrationState>
    </>
  );
}

export default App;