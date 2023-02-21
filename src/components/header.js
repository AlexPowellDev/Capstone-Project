import '../index.css'
import foodimg from '../assets/restauranfood.jpg'

function Header(){
    return(
<div id="parent">
    <header>
        <div className="CTA">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div>
                <button type="submit" className="header-button">Reserve a table</button>
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