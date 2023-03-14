import logo from '../../src/assets/LL-Logo.jpg';
import '../styles/index.css'
import { Link } from 'react-router-dom';


function Nav(){
    return(
    <nav className="nav-bar">
        <div>
        <img src={logo} alt="Little Lemon logo" id='nav-logo'/>
        </div>
        <ul className="nav-container">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>    
            <li><Link to="">Order Online</Link></li>
            <li><Link to="">Login</Link></li>
        </ul>
    </nav>
        
        )
    }
    
    export default Nav;