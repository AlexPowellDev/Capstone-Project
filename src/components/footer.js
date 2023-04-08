import '../styles/index.css'
import { Link } from 'react-router-dom';
import logo from '../../src/assets/LL-Logo.jpg';

function Footer(){
return(
    <footer>
        <div className="footer-logo-wrapper">
            <img src={logo} alt="Little Lemon logo" id='footer-logo'/>
        </div>
        <div className="footer-nav-wrapper">
                <ul id="nav-footer">
                    <div className="footer-column">
                        <li className ="footer-nav-button"><Link to="/">Home</Link></li>
                        <li className ="footer-nav-button"><Link to ="/About">About</Link></li>
                    </div>
                    <div className="footer-column">
                        <li className ="footer-nav-button"><Link to ="/Reservations">Reservations</Link></li>    
                        <li className ="footer-nav-button"><Link to ="/Menu">Menu</Link></li>
                    </div>
                </ul>
        </div>
        <div className="copyright">
            <p>Little Lemon • © 2023</p>
        </div>
    </footer>
)
}

export default Footer;