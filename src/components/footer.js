import '../index.css'
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
                        <li className ="footer-nav-button"><a href ="">Home</a></li>
                        <li className ="footer-nav-button"><a href ="">About</a></li>
                        <li className ="footer-nav-button"><a href ="">Menu</a></li>
                    </div>
                    <div className="footer-column">
                        <li className ="footer-nav-button"><a href ="">Reservations</a></li>    
                        <li className ="footer-nav-button"><a href ="">Order Online</a></li>
                        <li className ="footer-nav-button"><a href ="">Login</a></li>
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