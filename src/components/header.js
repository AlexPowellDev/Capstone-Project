import '../styles/index.css'
import foodimg from '../assets/restauranfood.jpg'
import { Link } from 'react-router-dom';



function Header(){

    return(
<div id="parent">
    <header>
        <div className="CTA">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className="header-button">
                <Link to="/Reservations">Reserve a table</Link>
            </div>
        </div>
    </header>
    <div id="header-img">
        <img src={foodimg} alt="display of food at Little Lemon"/>
    </div>
</div>
    )
    }
    
    export default Header;