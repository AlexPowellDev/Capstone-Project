import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/bookingForm';
import Reservations from './pages/reservations'; 
import { MemoryRouter as Router } from 'react-router-dom';


test('Renders the booking form occasions label', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText("Occasion");
  expect(linkElement).toBeInTheDocument();
});

test('initializeTimes function returns initial state', () =>{
  render(
  <Router>
  <Reservations/>
  </Router>
  );
  const timeElement = screen.getByText("17:00")
  expect(timeElement).toBeInTheDocument()
});