import '../styles/index.css'
import salad from'../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.jpg'
import dessert from '../assets/lemon dessert.jpg'
import { Link } from 'react-router-dom'

function Main(){
    return(
        <main>
            <div className="main-header">
                <h2 className="main-h2">This week's specials!</h2>
                <div className="main-button">
                    <Link to="/Order-Online">Online Menu</Link>
                </div>
            </div>
            <section id="main-section">
                {/*grid item*/}
                <div className="item-wrapper">                    
                    <div className="item-image-wrapper">
                        <img src={salad} alt="Little lemon greek salad" className="main-img"/>
                    </div>
                    <article>
                        <div className="item-title">
                            <h3>Greek Salad</h3>
                            <div className="item-price-wrapper">
                                <h3>$12.99</h3>
                            </div>
                        </div>
                        <div className="item-description-wrapper">
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese. Garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                        <Link to="/Order-Online" className="article-link">Order a delivery</Link>
                    </article>
                </div>
                {/*grid item*/}
                <div className="item-wrapper">
                    <div className="item-image-wrapper">
                        <img src={bruchetta} alt="Little lemon bruchetta" className="main-img"/>
                    </div>
                    <article>
                        <div className="item-title">
                            <h3>Bruschetta</h3>
                            <div className="item-price-wrapper">
                                <h3>$5.99</h3>
                            </div>
                        </div>
                        <div className="item-description-wrapper">
                            <p>Our bruschetta is made from grilled bread that has been smeard with garlic and seasoned with salt and olive oil.</p>
                        </div>
                        <Link to="/Order-Online" className="article-link">Order a delivery</Link>
                    </article>
                </div>
                {/*grid item*/}
                <div className="item-wrapper">
                    <div className="item-image-wrapper">
                        <img src={dessert} alt="Little lemon dessert" className="main-img"/>
                    </div>
                    <article>
                        <div className="item-title">
                            <h3>Lemon Heaven </h3>
                            <div className="item-price-wrapper">
                                <h3>$5.00</h3>
                            </div>
                        </div>
                        <div className="item-description-wrapper">
                            <p>This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        </div>
                        <Link to="/Order-Online" className="article-link">Order a delivery</Link>
                    </article>
                </div>
            </section>
        </main>
    )
}
    
    export default Main;