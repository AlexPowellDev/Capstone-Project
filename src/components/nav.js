import logo from '../../src/assets/LL-Logo.jpg';
import '../index.css'

function Nav(){
    return(
    <nav className="nav-bar">
        <div>
        <img src={logo} alt="Little Lemon logo" id='nav-logo'/>
        </div>
        <ul className="nav-container">
            <li><a href ="">Home</a></li>
            <li><a href ="">About</a></li>
            <li><a href ="">Menu</a></li>
            <li><a href ="">Reservations</a></li>    
            <li><a href ="">Order Online</a></li>
            <li><a href ="">Login</a></li>
        </ul>
    </nav>
        )
    }
    
    export default Nav;