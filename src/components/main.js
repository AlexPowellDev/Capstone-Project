import '../index.css'
import salad from'../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.jpg'
import dessert from '../assets/lemon dessert.jpg'

function Main(){
    return(
        <main>
            <div className="main-header">
                <h2 className="main-h2">This week's specials!</h2>
                <div>
                    <button type="submit" className="main-button">Online Menu</button>
                </div>
            </div>
            <section id="main-section">
                {/*grid item*/}
                <div className="item-wrapper">                    
                    <div className="item-image-wrapper">
                        <img src={salad} alt="image of little lemon greek salad" className="main-img"/>
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
                        <a href="" className="article-link">Order a delivery</a>
                    </article>
                </div>
                {/*grid item*/}
                <div className="item-wrapper">
                    <div className="item-image-wrapper">
                        <img src={bruchetta} alt="image of little lemon bruchetta" className="main-img"/>
                    </div>
                    <article>
                        <div className="item-title">
                            <h3>Bruchetta</h3>
                            <div className="item-price-wrapper">
                                <h3>$5.99</h3>
                            </div>
                        </div>
                        <div className="item-description-wrapper">
                            <p>Our bruchetta is made from grilled bread that has been smeard with garlic and seasoned with salt and olive oil.</p>
                        </div>
                        <a href="" className="article-link">Order a delivery</a>
                    </article>
                </div>
                {/*grid item*/}
                <div className="item-wrapper">
                    <div className="item-image-wrapper">
                        <img src={dessert} alt="image of little lemon dessert" className="main-img"/>
                    </div>
                    <article>
                        <div className="item-title">
                            <h3>Lemon Dessert</h3>
                            <div className="item-price-wrapper">
                                <h3>$5.00</h3>
                            </div>
                        </div>
                        <div className="item-description-wrapper">
                            <p>This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        </div>
                        <a href="" className="article-link">Order a delivery</a>
                    </article>
                </div>
            </section>
        </main>
    )
}
    
    export default Main;