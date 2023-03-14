import { Routes, Route,} from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Menu from './pages/menu'; 
import Reservations from './pages/reservations';
import ConfirmedBooking from './components/confirmedBooking ';

function App() {

  return (
    <>
      <div>
        <nav>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Menu' element={<Menu/>}></Route>
            <Route path='/Reservations' element={<Reservations/>}></Route>
            <Route path='/Order-Online' element={<About/>}></Route>
            <Route path='/Login' element={<About/>}></Route>
            <Route path='/Confirmed-Booking' element={<ConfirmedBooking/>}></Route>
          </Routes>
        </nav>
      </div>
    </>
  );
}

export default App;
